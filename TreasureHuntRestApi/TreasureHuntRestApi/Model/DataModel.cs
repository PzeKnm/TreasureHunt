


using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.Extensions.Logging;

namespace TreasureHunt.Model
{

  
  

  public class AccessResult
  {
    public bool Success;
    public string GameId;
    public string Token;
  }



  public class UploadStationEventResult
  {
    public bool Success;
    public string Information;

  }

  public class ApiResult
  {
    public bool Success;
    public string Information;

  }

  // Message broadcast to all SignalR clients
  public class ClientMessage
  {
    /*
      GameId - guid TStation.ID
      "MessageTest"
    */
    public string Sender;

    /*
      HubDeviceId - TStation.HubDeviceId
    */
    public string StationId;

    /*
      "SPA2Station"
      "Station2SPA"
    */
    public string Direction;

    /*
      Token so that the clients know if the message is for them
    */
    public string AccessToken;

    /*
      The Command
    */
    public string Command;

    /*
      The parameters
    */
    public string Parameters;
  }

}