using System;
using System.Collections.Generic;
using System.Text;
using System.Device.I2c;
using static MoreOrLess.I2CSlaveData;
using GameLib;
using System.Text.Json;

namespace MoreOrLess
{


  public class PinStateDto
  {
    public string Id { get; set; }
    public string ControllerId { get; set; }
    public string PinName { get; set; }
    public string Direction { get; set; }
    public int State { get; set; }
  }



  class VisualisationRestAPI
  {
   
    string m_StationId;
    bool m_bSim = false;
    RestApi m_RestApi;

    public VisualisationRestAPI(RestApi rapi, string stationId, bool bSim)
    {
      m_RestApi = rapi;
      m_StationId = stationId;
      m_bSim = bSim;
    }
         
    public void PublishVisualisationData(VisualisationData vd)
    {
      var serializeOptions = new JsonSerializerOptions
      {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        WriteIndented = true
      };
      string vizData = System.Text.Json.JsonSerializer.Serialize(vd, serializeOptions);

      ClientMessage cm = new ClientMessage();
      cm.Sender = m_StationId;
      cm.StationId = m_StationId;
      cm.Direction = "Station2Viz";
      cm.AccessToken = "";
      cm.Command = "UpdateViz";
      cm.Parameters = vizData;

      m_RestApi.BroadcastMessageToSignalRClients(cm);
    }



  }
}
