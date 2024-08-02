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
using System.Collections.Generic;
using TreasureHunt.Model;
using TreasureHuntRestApi.Model;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;

namespace TreasureHunt
{
  public class PinState: ControllerBase
  {

    // api/PinState?controllerId=abc[&pinName=abc]
    [FunctionName("PinStateGet")]
    public async Task<IActionResult> Get(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "PinState")] HttpRequest req,
        ILogger log)
    {
      DateTime dteBegin = DateTime.Now;
      _logger = log;
      try
      {
        string controllerId = req.Query["controllerId"];
        if(controllerId == null)
          return BadResult("controllerId missing");

        string pinName = req.Query["pinName"];
        DataAccess da = new DataAccess(_logger);
        if(da.CheckDBActive())
        {
          log.LogInformation("Get PinState.");
          int nSuppressMessage = await Task.Run(() => {return 99;});
          List<PinStateDto> lst = da.GetPinState(controllerId, pinName?? "");  

          var wrappedObject = new Wrapper<IEnumerable<PinStateDto>>(lst);
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

    // api/PinState?controllerId=abc[&pin=12]
    [FunctionName("PinStatePost")]
    public async Task<IActionResult> Set(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "PinState")] HttpRequest req,
        [SignalR(HubName = "BroadcastClientMessage")]IAsyncCollector<SignalRMessage> signalRMessages,
        ILogger log)
    {
      DateTime dteBegin = DateTime.Now;
      _logger = log;
      try
      {
        string sDirection = req.Query["Direction"];
        if(sDirection == null || (sDirection.ToUpper() != "DEV2DB" && sDirection.ToUpper() != "DB2DEV"))
          return BadResult("lacking direction, if not motivation");

        var content = await new StreamReader(req.Body).ReadToEndAsync();
        PinStateDto[] lstPins = JsonConvert.DeserializeObject<PinStateDto[]>(content);

        DataAccess da = new DataAccess(_logger);
        if (da.CheckDBActive())
        {
          log.LogInformation("Set PinState.");
          int nSuppressMessage = await Task.Run(() => { return 99; });

          bool bSomethingChanged = false;
          string sChangedPins = "";
          string sStationId = "";
          foreach (PinStateDto p in lstPins)
          {
            if (da.SetPinState(p) == true)
            {
              bSomethingChanged = true;
              if(sChangedPins != "")
                sChangedPins += ",";
              sChangedPins += string.Format("{0}:{1}", p.PinName, p.State);
            }
            sStationId = p.ControllerId;
          }

          if(bSomethingChanged)
          {
            ClientMessage cm = new ClientMessage();
            cm.Sender = "PinStatePost";
            cm.StationId = sStationId;
            cm.Direction = sDirection;
            cm.AccessToken = "sToken";
            cm.Command = "PinStateChange";
            cm.Parameters = sChangedPins;

            await signalRMessages.AddAsync(new SignalRMessage()
            {
              Target = "ClientMessage",
              Arguments = new object[] { cm }
            });
          }

          List<PinStateDto> lst = da.GetPinState(lstPins[0].ControllerId);
          var wrappedObject = new Wrapper<IEnumerable<PinStateDto>>(lst);
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
}
