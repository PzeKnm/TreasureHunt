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
  public class ControllerBase
  {

    protected ILogger _logger;

    protected BadRequestObjectResult BadResult(string msg)
    {
      var wrappedObjectErrorC = new Wrapper<string>(msg);
      wrappedObjectErrorC.StatusCode = 400;
      wrappedObjectErrorC.ErrorMessage = msg;
      // wrappedObjectErrorC.SetExecutionDurationSince(dteBegin);
      return new BadRequestObjectResult(wrappedObjectErrorC);
    }

  }
}
