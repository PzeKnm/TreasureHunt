using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using TreasureHunt.Data;
using TreasureHunt.Model;
using System.Text;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;

namespace TreasureHunt
{
  public class PassCommandToStation : ControllerBase
  {

    [FunctionName("PassCommandToStation")]
    public async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
        ILogger log,
        [SignalR(HubName = "BroadcastClientMessage")]IAsyncCollector<SignalRMessage> signalRMessages)
    {
      DateTime dteBegin = DateTime.Now;
      _logger = log;
      log.LogInformation("Performing PassCommandToStation.");
      int nSuppressMessage = await Task.Run(() => {return 99;});

      string GameId = req.Query["GameId"];
      string ClientId = req.Query["ClientId"];
      string ClientAuthToken = req.Query["ClientAuthToken"];
      string cmd = req.Query["Command"]; 
      string parms = req.Query["Parameters"];

      // All threee parms must be present
      if (GameId == null || ClientId == null || ClientAuthToken == null || cmd == null)
      {
        AccessResult arError = new AccessResult();
        arError.Success = false;
        var wrappedError = new Wrapper<AccessResult>(arError);
        wrappedError.ErrorMessage = "Invalid parameters";
        wrappedError.StatusCode = 400;
        return new BadRequestObjectResult(wrappedError);
      }

      // Validate auth token
      ClientAuthToken cat = new ClientAuthToken();
      if(!cat.IsValid(ClientAuthToken, ClientId, GameId))
      {
        AccessResult arError = new AccessResult();
        arError.Success = false;
        var wrappedError = new Wrapper<AccessResult>(arError);
        wrappedError.ErrorMessage = "Invalid ClientAuthToken";
        wrappedError.StatusCode = 400;
        return new BadRequestObjectResult(wrappedError);
      }

      if (string.IsNullOrEmpty(parms))
        parms = ""; 

      // Cloud2DeviceHelper.SendCommmand(hubDeviceId, hubDeviceKey, cmd, parms);  
      bool bSuccess = await SignalRClientComms.PublishMessageToSignalRClients(signalRMessages, ClientId, GameId, "SPA2Station", ClientAuthToken, cmd, parms);
      if (!bSuccess)
      {
        AccessResult arError = new AccessResult();
        arError.Success = false;
        var wrappedError = new Wrapper<AccessResult>(arError);
        wrappedError.ErrorMessage = "SignalRClientComms.PublishMessageToSignalRClients returned false";
        wrappedError.StatusCode = 400;
        return new BadRequestObjectResult(wrappedError);
      }

      string s = "Command performed OK";
      var wrapped = new Wrapper<string>(s);
      wrapped.StatusCode = 200;
      wrapped.SetExecutionDurationSince(dteBegin);
      return new OkObjectResult(wrapped); 
    }


  }
}



