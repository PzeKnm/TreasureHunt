using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;


namespace PinAdapter
{


  public class VisualisationTcpServer
  {

    public class ConnectionDetails
    {
      public TcpClient m_client;
      public VisualisationTcpServer m_parentServer;
    }

    public class RemoteClient
    {
      public string m_Identifier;
      public DateTime m_lastContact;
    }

/*
    TcpListener m_server = null;

    SI2CVizData m_VizData;

    List<RemoteClient> m_lstClients;
*/
    public enum IncomingCommand
    {
      Unknown = 0,
      GetVizData = 1
    }
/*
    public void SetVisualisationData(VisualisationData vd)
    {  
      m_VizData.EnvironmentStatus = vd.EnvironmentStatus;
      m_VizData.GameState = (byte)vd.GameStateInt;
      m_VizData.InternalState = (byte)vd.InternalStateInt;
      m_VizData.PotentialScore = (ushort)vd.PotentialScore;
      m_VizData.Score = (ushort)vd.Score;
      m_VizData.TotalGameSecs = (ushort)vd.TotalGameSecs;
      m_VizData.RemainingSecs = (ushort)vd.RemainingSecs;
      m_VizData.RemainingQuestionSecs = (byte)vd.RemainingQuestionSecs;
    }

    public SI2CVizData GetData()
    {
      return m_VizData;
    }

    public void LogRemoteClientActivity(string sClientId)
    {
      RemoteClient rc = m_lstClients.Find(x => x.m_Identifier == sClientId);
      if (rc != null)
      {
        rc.m_lastContact = DateTime.Now;
        return;
      }

      RemoteClient rcNew = new RemoteClient();
      rcNew.m_Identifier = sClientId;
      rcNew.m_lastContact = DateTime.Now;
      m_lstClients.Add(rcNew);
    }

    public void RemoveClient(string sClientId)
    {
      var itemToRemove = m_lstClients.Find(x => x.m_Identifier == sClientId);
      if (itemToRemove != null)
        m_lstClients.Remove(itemToRemove);
    }

    public string GetConnectedClients()
    {
      if (m_lstClients.Count == 0)
        return "none";

      string s = "";
      foreach (var rc in m_lstClients)
      {
        s += "," + rc.m_Identifier + "(" + rc.m_lastContact.ToShortTimeString() + ")";
      }

      return s;
    }

    public VisualisationTcpServer()
    {
      m_lstClients = new List<RemoteClient>();
    }*/
/*
    public void SpinUpServer(string ip, int port)
    {

      IPAddress localAddr = IPAddress.Parse(ip);
      m_server = new TcpListener(localAddr, port);
      m_server.Start();
      StartListener();
      m_VizData.GameState = 0;

    }
*/
/*
    public void StartListener()
    {
      try
      {
        while (true)
        {
          Console.WriteLine("Waiting for a connection...");
          TcpClient client = m_server.AcceptTcpClient();
          Console.WriteLine("Connected!");
          Thread t = new Thread(new ParameterizedThreadStart(HandleDevice));
          ConnectionDetails cd = new ConnectionDetails();
          cd.m_client = client;
          cd.m_parentServer = this;
          t.Start(cd);
        }
      }
      catch (SocketException e)
      {
        Console.WriteLine("SocketException: {0}", e);
        m_server.Stop();
      }
    }
*/
/*
    public void HandleDevice(Object obj)
    {
      ConnectionDetails cd = (ConnectionDetails)obj;
      TcpClient client = cd.m_client;
      var stream = client.GetStream();
      string dataIncoming = null;
      Byte[] bytesIncoming = new Byte[256];

      string sClientId = "";
      int i;
      try
      {
        while (client.Connected)
        {
          while ((i = stream.Read(bytesIncoming, 0, bytesIncoming.Length)) != 0)
          {
            dataIncoming = Encoding.ASCII.GetString(bytesIncoming, 0, i);

            sClientId = GetClientIdentifier(dataIncoming);
            cd.m_parentServer.LogRemoteClientActivity(sClientId);

            IncomingCommand cmd = GetIncomingCommand(dataIncoming);

            if (cmd == IncomingCommand.Unknown)
            {
              Console.WriteLine("Unknown command: " + dataIncoming);
            }

            if (cmd == IncomingCommand.GetVizData)
            {
              SI2CVizData data = cd.m_parentServer.GetData();
              var arr = new byte[SIZE_OF_VIZ_DATA_IN_BYTES];

              // I2C is a byte-based protocol. We need to explicitely think whether we want to send
              // ints as ints, or truncate them to bytes
              arr[0] = (byte)data.EnvironmentStatus;
              arr[1] = (byte)data.GameState;
              arr[2] = (byte)data.InternalState;
              arr[3] = (byte)(data.PotentialScore >> 8);
              arr[4] = (byte)(data.PotentialScore & 0xff);
              arr[5] = (byte)(data.Score >> 8);
              arr[6] = (byte)(data.Score & 0xff);
              arr[7] = (byte)(data.TotalGameSecs >> 8);
              arr[8] = (byte)(data.TotalGameSecs & 0xff);
              arr[9] = (byte)(data.RemainingSecs >> 8);
              arr[10] = (byte)(data.RemainingSecs & 0xff);
              arr[11] = (byte)data.RemainingQuestionSecs;
              stream.Write(arr, 0, arr.Length);
            }
          }

          IsStillAlive(client);
          Thread.Sleep(50);
        }
        Console.WriteLine("Client has disappeared");
        cd.m_parentServer.RemoveClient(sClientId);
      }
      catch (Exception e)
      {
        Console.WriteLine("Exception: {0}", e.ToString());
        client.Close();
      }
    }
*/



    // "ClientIdentifier=%d;Command=GetVizData"
 /*   IncomingCommand GetIncomingCommand(string sData)
    {
      string[] sParams = sData.Split(';');

      foreach (var param in sParams)
      {
        string[] args = param.Split('=');
        if (args.Length == 2)
        {
          if (args[0] == "Command")
          {
            if (args[1] == "GetVizData")
              return IncomingCommand.GetVizData;
          }
        }
      }
      return IncomingCommand.Unknown;
    }*/
/*
    string GetClientIdentifier(string sData)
    {
      string[] sParams = sData.Split(';');

      foreach (var param in sParams)
      {
        string[] args = param.Split('=');
        if (args.Length == 2)
        {
          if (args[0] == "ClientIdentifier")
          {
            return args[1];
          }
        }
      }
      return "";
    }*/

  }

}
