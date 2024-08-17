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

namespace TreasureHunt
{
  public class Stations : ControllerBase
  {


    [FunctionName("Stations")]
    public async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
    {
      DateTime dteBegin = DateTime.Now;
      _logger = log;
      try
      {
        DataAccess da = new DataAccess(_logger);
        if(da.CheckDBActive())
        {
          UserIdFuncs.UpdateUserId(req, log);
          log.LogInformation("Get Stations.");
          int nSuppressMessage = await Task.Run(() => {return 99;});


          da.UpdateStationStatusFromLastContactTime();
          List<GameStationDto> lst = da.GetGameStations();  

          var wrappedObject = new Wrapper<IEnumerable<GameStationDto>>(lst);
          wrappedObject.StatusCode = 200;
          wrappedObject.SetExecutionDurationSince(dteBegin);
          return new OkObjectResult(wrappedObject);
        }
        var wrappedObjectError = new Wrapper<string>("CheckDBActive fails");
        wrappedObjectError.StatusCode = 400;
        wrappedObjectError.ErrorMessage = "CheckDBActive fails";
        wrappedObjectError.SetExecutionDurationSince(dteBegin);
        return new BadRequestObjectResult(wrappedObjectError);
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
}
