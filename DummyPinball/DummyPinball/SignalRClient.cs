using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR.Client;

namespace DummyPinball
{

  public class ClientMessage
  {
    public string Sender;

    public string StationId;

    public string Direction;
    // Token so that the clients know if the message is for them
    public string AccessToken;
    // The Command
    public string Command;
    // The parameters
    public string Parameters;
  }

  public class ClientCommandEventArgs : EventArgs
  {
    public string Command;
    public string Parameters;
  }

  class SignalRClient
  {

    HubConnection _connection;

    //public event EventHandler CommandReceived;
    public event EventHandler<ClientCommandEventArgs> CommandReceived;

    public async void StartListening()
    {

      _connection = new HubConnectionBuilder()
                       .WithUrl("https://sandgatethapi.azurewebsites.net/api/")
                       .Build();

      _connection.Closed += async (error) =>
      {
        await Task.Delay(new Random().Next(0, 5) * 1000);
        await _connection.StartAsync();
      };

      _connection.On<ClientMessage>("ClientMessage", (cm) =>
      {
        if(cm.Direction == "SPA2Station")
        {
          string s = cm.Command;
          Debug.WriteLine(s);
          ClientCommandEventArgs args = new ClientCommandEventArgs();
          args.Command = cm.Command;
          args.Parameters = cm.Parameters;
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
}
