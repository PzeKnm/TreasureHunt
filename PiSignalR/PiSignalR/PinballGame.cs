using GameLib;
using RaspberryGPIOManager;
using System;
using System.Timers;

namespace PiSignalR
{

  public class Pinball: Game
  {
    RaspPi _pi;

    private int _cGameLengthSec = 20;

    private int _pulseLengthMs = 500;

    private Timer _timerTicTock;

    private DateTime _dteGameStart;

    public Pinball(GameManager mgr) : base(mgr)
    {
          //// private static string sHubDeviceId = "Station001";
    //// private static string sHubDeviceKey = "ZjyLmuSHOu5Bv8YoqWy49za92%2bnG0cR/8vO2e/8Q1r8=";
      SetHubDeviceDetails("Station001", "ZjyLmuSHOu5Bv8YoqWy49za92%2bnG0cR/8vO2e/8Q1r8=");
    }

    public override void ProcessGameCommand(GameCommand gc)
    {
      if (gc.Command == "Left")
        BumpLeft();
      if (gc.Command == "Right")
        BumpRight();

    }


    public override void Initialise()
    {
      bool bSim = false;
      #if( SIMULATION )
            bSim = true;
      #endif  
      _pi = new RaspPi(bSim);
      _pi.Initialise();

      _timerTicTock = new Timer();
      _timerTicTock.Elapsed += _timerTicTock_Elapsed;
    }
    
    public override void Deinitialise()
    {
      _pi.Deinitialise();
    }


             

    public override void ChangeToBeginGame() 
    {      
      _dteGameStart = DateTime.Now;

      _timerTicTock.Interval = 1000;
      _timerTicTock.Start();
    }


    private void _timerTicTock_Elapsed(object sender, ElapsedEventArgs e)
    {
      TimeSpan ts = DateTime.Now - _dteGameStart;

      GameManagerState state = GetGameMangerState();
      if (state == GameManagerState.GamePlaying)
      {
        int nRemaining = _cGameLengthSec - (int)ts.TotalSeconds;
        if (nRemaining % 1 == 0)
        {
          bool b = PublishMessageToClient("TimeRemaining", nRemaining.ToString());
          if (b)
            Console.WriteLine("Remaining: " + nRemaining);
          else
            Console.WriteLine("Probelm sending to client");
        }
        if (nRemaining <= 0)
        {
          _timerTicTock.Stop();
          PerformGameFinished();
        }
      }
               
    }

    private void BumpLeft()
    {
      _pi.PulsePin(GPIOPinDriver.Pin.GPIO17, _pulseLengthMs);
      IncreaseScore(1);
    }


    private void BumpRight()
    {
      _pi.PulsePin(GPIOPinDriver.Pin.GPIO27, _pulseLengthMs);
      IncreaseScore(3);
    }


  }



}
