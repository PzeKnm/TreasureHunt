using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using TreasureHunt.Data;
using TreasureHunt.Model;
using Microsoft.AspNetCore.SignalR.Client;

namespace TreasureHunt
{
  public class SignalRClientComms : ControllerBase
  {
    /// <summary>
    /// 
    /// </summary>
    public class NegotiateFunction
    {
      [FunctionName("negotiate")]
      public static IActionResult Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")]HttpRequest req, 
        [SignalRConnectionInfo(HubName = "BroadcastClientMessage")]SignalRConnectionInfo info, 
        ILogger log)
      {
        string sUserId = req.HttpContext.User.Identity.Name;
        log.LogInformation(sUserId);

        return info != null
              ? (ActionResult)new OkObjectResult(info)
              : new NotFoundObjectResult("Failed to load SignalR Info.");
      }
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="signalRMessages"></param>
    /// <param name="sender"></param>
    /// <param name="stationId"></param>
    /// <param name="direction"></param>
    /// <param name="accessToken"></param>
    /// <param name="cmd"></param>
    /// <param name="parms"></param>
    /// <returns></returns>
    public static async Task<bool> PublishMessageToSignalRClients(IAsyncCollector<SignalRMessage> signalRMessages,
              string sender, string stationId, string direction, string accessToken, string cmd, string parms)
    {
      try
      {
        ClientMessage cm = new ClientMessage();
        cm.Sender = sender;
        cm.StationId = stationId;
        cm.Direction = direction;
        cm.AccessToken = accessToken;
        cm.Command = cmd;
        cm.Parameters = parms;

        await signalRMessages.AddAsync(new SignalRMessage()
        {
          Target = "ClientMessage",
          Arguments = new object[] { cm }
        });

        return true;
      }
      catch (Exception ex)
      {
        string s = ex.Message;
        return false;
      }

    }

    /// <summary>
    /// 
    /// </summary>
    public class BroadcastMessageToSignalRClients : ControllerBase
    {
      [FunctionName("BroadcastMessageToSignalRClients")]
      public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "post")]HttpRequest req,
               [SignalR(HubName = "BroadcastClientMessage")]IAsyncCollector<SignalRMessage> signalRMessages, ILogger log)
      {
        DateTime dteBegin = DateTime.Now;
        _logger = log;
        try
        {
          var content = await new StreamReader(req.Body).ReadToEndAsync();
          ClientMessage msg = JsonConvert.DeserializeObject<ClientMessage>(content);
          if(msg == null)
            return BadResult("ClientMessage msg == null");

          DataAccess da = new DataAccess(_logger);
          if (da.CheckDBActive())
          {       
            await signalRMessages.AddAsync(new SignalRMessage()
            {
              Target = "ClientMessage",
              Arguments = new object[] { msg }
            });

            var wrappedObject = new Wrapper<string>("BroadcastMessageToSignalRClients sent");
            wrappedObject.StatusCode = 200;
            wrappedObject.SetExecutionDurationSince(dteBegin);
            return new OkObjectResult(wrappedObject);
          }
          return BadResult("CheckDBActive fails");
        }
        catch (Exception ex)
        {
          return BadResult(ex.Message);
        }
      }
    }

    /// <summary>
    /// 
    /// </summary>
    public class MessageFunction
    {
      [FunctionName("message")]
      public static async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "post")]HttpRequest req, 
                                                  [SignalR(HubName = "BroadcastClientMessage")]IAsyncCollector<SignalRMessage> signalRMessages, 
                                                  ILogger log)
      {
        int nSuppressMessage = await Task.Run(() => {return 99;});
        string requestBody = new StreamReader(req.Body).ReadToEnd();

        if (string.IsNullOrEmpty(requestBody))
        {
          return new BadRequestObjectResult("Please pass a payload to broadcast in the request body.");
        }

        await signalRMessages.AddAsync(new SignalRMessage()
        {
          Target = "ClientMessage",
          Arguments = new object[] { requestBody }
        });

        return new OkObjectResult("message called ok");
      }
    }

    /// <summary>
    /// 
    /// </summary>
    public class TestMessageFunction
    {
      [FunctionName("messagetest")]
      public static async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")]HttpRequest req, 
                                                  [SignalR(HubName = "BroadcastClientMessage")]IAsyncCollector<SignalRMessage> signalRMessages, 
                                                  [SignalRConnectionInfo(HubName = "BroadcastClientMessage")]SignalRConnectionInfo info,
                                                  ILogger log)
      {

        DateTime dteBegin = DateTime.Now;
        // _logger = log;
        try
        {
          int nSuppressMessage = await Task.Run(() => { return 99; });
          ClientMessage cm = new ClientMessage();
          cm.Sender = "MessageTest";
          cm.StationId = "MyStation";
          cm.Direction = "MyDirection";
          cm.AccessToken = "MyAccessToken";
          cm.Command = "MyCommand";
          cm.Parameters = "MyParameters";

          bool bResult = await SignalRClientComms.PublishMessageToSignalRClients(signalRMessages, cm.Sender, cm.StationId, cm.Direction,
              cm.AccessToken, cm.Command, cm.Parameters);
          /*
                    await signalRMessages.AddAsync(new SignalRMessage()
                    {
                        Target = "ClientMessage",
                        Arguments = new object[] { cm }
                    });
          */
          string sResult = bResult? "messagetest called ok" : "messagetest failed";
          var wrappedObject = new Wrapper<string>(sResult);
          wrappedObject.StatusCode = 200;
          wrappedObject.SetExecutionDurationSince(dteBegin);
          return new OkObjectResult(wrappedObject);
        }
        catch (Exception ex)
        {
          var wrappedObject = new Wrapper<string>(ex.Message);
          wrappedObject.StatusCode = 400;
          wrappedObject.ErrorMessage = ex.Message;
          wrappedObject.SetExecutionDurationSince(dteBegin);
          return new BadRequestObjectResult(wrappedObject);
        }
      }
    }






  } // class SignalRClientComms

  // Sent by a station to be consumed by whatever client might be connected.
  // Station has to supply credentials to guarantee authenticity.
  public class PublishMessageToClientFunction : ControllerBase
  {
    [FunctionName("PublishMessageToClient")]
    public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")]HttpRequest req, 
                                                [SignalR(HubName = "BroadcastClientMessage")]IAsyncCollector<SignalRMessage> signalRMessages, 
                                                ILogger log)
      {
        DateTime dteBegin = DateTime.Now;
        int nSuppressMessage = await Task.Run(() => {return 99;});
        // _logger = log;

        // Credentials to assure who is sending and that they are the real device
        string HubDeviceId = req.Query["HubDeviceId"];
        string HubDeviceKey = req.Query["HubDeviceKey"];

        // The command to be published.
        string Command = req.Query["Command"];
        string Parameters = req.Query["Parameters"];

        // All parms must be present
        if(HubDeviceId == null || HubDeviceKey == null || 
            Command == null || Parameters == null)
        {
          var wrappedError = new Wrapper<string>("");
          wrappedError.ErrorMessage = "Invalid parameters";
          wrappedError.StatusCode = 400;
          return new BadRequestObjectResult(wrappedError);
        }

        /* todo mkmkmkmk   
        // Check station credentials
        DataAccess da = new DataAccess(_logger);
        string sDeviceKey = da.GetStationHubDeviceKeyFromStationHubId(HubDeviceId); 
        if(!String.Equals(sDeviceKey, HubDeviceKey, StringComparison.OrdinalIgnoreCase) )
        {
          var wrappedError = new Wrapper<string>("");
          wrappedError.ErrorMessage = "Invalid key";
          wrappedError.StatusCode = 400;
          return new BadRequestObjectResult(wrappedError);              
        } */

        // Publish message

        // Get Current AccessToken for Station
        ////     string gameId = da.GetGameIdFromHubDeviceId(HubDeviceId);
        ////     string sToken = da.GetStationAuthToken(gameId);

        ClientMessage cm = new ClientMessage();
        cm.Sender = HubDeviceId;
        cm.StationId = HubDeviceId;
        cm.Direction = "Station2SPA";
        cm.AccessToken = "sToken";
        cm.Command = Command;
        cm.Parameters = Parameters;

        await signalRMessages.AddAsync(new SignalRMessage()
        {
            Target = "ClientMessage",
            Arguments = new object[] { cm }
        });


        string s = "PublishMessageToClient called ok";
        var wrapped = new Wrapper<string>(s);
        wrapped.StatusCode = 200;
        wrapped.SetExecutionDurationSince(dteBegin);
        return new OkObjectResult(wrapped);
      }
  } // PublishMessageToClientFunction


} // namespace

