
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading;

namespace PinAdapter
{
  class Program
  {
    static Configuration _conf;
    static SignalRClient _signalClient;
    static RaspPi _raspi;
    static RestApi _restApi;

    static void Main(string[] args)
    {
      try
      {
        Console.WriteLine("PinAdapter starts.");

        _conf = new Configuration();
        _conf.Load();

        _raspi = new RaspPi(_conf.settings.Simulation, _conf.settings.ControllerId);
        _raspi.InitialiseFromPinArray(_conf.settings.pins);

        _restApi = new RestApi(_conf.settings.RestAPiUrl, "", "");

        _signalClient = new SignalRClient(_conf.settings.ControllerId, _conf.settings.RestAPiUrl);
        _signalClient.CommandReceived += _signalClient_CommandReceived; ;
        _signalClient.StartListening();

        while (!Stopping)
        {
          Thread.Sleep(_conf.settings.PinPollingMs);
          
          if(_raspi.CheckPinStates() == true)
          {
            List<PinStateDto> lstCurrentStates = _raspi.ReadPinStates();
            string jsonString = System.Text.Json.JsonSerializer.Serialize(lstCurrentStates);
            _restApi.UploadPinStates(jsonString);
          }
        }

      }
      catch (Exception ex)
      {
        string s = ex.Message;
      }
      finally
      {

      }
      Console.WriteLine("PinAdapter ends.");
    }




    static private void _signalClient_CommandReceived(object sender, ClientCommandEventArgs e)
    {
      Console.WriteLine("External pin change: {0}", e.gameCommand.Parameters);

      string sPinStates = _restApi.GetPinStates(_conf.settings.ControllerId);

      if (sPinStates != "")
      {
        JsonSerializerOptions options = new JsonSerializerOptions
        {
          WriteIndented = true,
          IgnoreNullValues = true,
          PropertyNameCaseInsensitive = true
        };
        RestWrapper<PinStateDto[]> wrap = System.Text.Json.JsonSerializer.Deserialize<RestWrapper<PinStateDto[]>>(sPinStates, options);

        _raspi.WritePinStates(wrap.Data);
      }      
    }



    
    static readonly object stopLock = new object();
    /// <summary>
    /// Whether or not the worker thread has been asked to stop
    /// </summary>
    static bool stopping = false;
    /// <summary>
    /// Whether or not the worker thread has stopped
    /// </summary>
    static bool stopped = false;


    /// <summary>
    /// Returns whether the worker thread has been asked to stop.
    /// This continues to return true even after the thread has stopped.
    /// </summary>
    static public bool Stopping
    {
      get
      {
        lock (stopLock)
        {
          return stopping;
        }
      }
    }

    /// <summary>
    /// Returns whether the worker thread has stopped.
    /// </summary>
    static public bool Stopped
    {
      get
      {
        lock (stopLock)
        {
          return stopped;
        }
      }
    }

    /// <summary>
    /// Tells the worker thread to stop, typically after completing its 
    /// current work item. (The thread is *not* guaranteed to have stopped
    /// by the time this method returns.)
    /// </summary>
    static public void Stop()
    {
      lock (stopLock)
      {
        stopping = true;
      }
    }

    /// <summary>
    /// Called by the worker thread to indicate when it has stopped.
    /// </summary>
    static protected void SetStopped()
    {
      lock (stopLock)
      {
        stopped = true;
      }
    }


  }


}
