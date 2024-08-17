using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.Serialization;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR.Client;
using Newtonsoft.Json;

namespace GameLib
{
  class SignalRClient
  {
    HubConnection _connection;

    string _hubDeviceID;

    string _sUrl;

    //public event EventHandler CommandReceived;
    public event EventHandler<ClientCommandEventArgs> CommandReceived;

    public SignalRClient(string sHubDeviceID, string sUrl)
    {
      _hubDeviceID = sHubDeviceID;
      _sUrl = sUrl;
    }
                              
    public async void StartListening()
    {

      _connection = new HubConnectionBuilder()
        .WithUrl(_sUrl )
        .Build();

      _connection.Closed += async (error) =>
      {
        await Task.Delay(new Random().Next(0, 5) * 1000);
        await _connection.StartAsync();
      };

      _connection.On<ClientMessage>("ClientMessage", (cm) =>
      {
        if(cm.Direction == "SPA2Station" /* mkmkmk && cm.StationId == _hubDeviceID*/)
        { 
          Debug.WriteLine(cm.Command);

          ClientCommandEventArgs args = new ClientCommandEventArgs();
          GameCommand gc = new GameCommand(cm.Command, cm.Parameters);
          args.gameCommand = gc;
          OnCommandReceived(args);               
        }

      });


      try
      {
        await _connection.StartAsync();
        //   messagesList.Items.Add("Connection started");
        //   connectButton.IsEnabled = false;
        //    sendButton.IsEnabled = true;
      }
      catch (Exception ex)
      {
        string s = ex.Message;
        //    messagesList.Items.Add(ex.Message);
      }

    }


    protected virtual void OnCommandReceived(ClientCommandEventArgs e)
    {
      CommandReceived?.Invoke(this, e);
    }
          
  }

  [DataContract]
  public class ClientMessage
  {
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string Sender { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string StationId { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string Direction { get; set; }
    // Token so that the clients know if the message is for them
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string AccessToken { get; set; }
    // The Command
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string Command { get; set; }
    // The parameters
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string Parameters { get; set; }
  }



  public class ClientCommandEventArgs : EventArgs
  {
    public GameCommand gameCommand;
  }


  public class GameCommand
  {
    public GameCommand(string cmd, string parms)
    {
        Command = cmd;
        Parameters = parms;
    }

    public string Command;
    public string Parameters;
  }
}
