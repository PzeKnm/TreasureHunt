using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;


namespace PinAdapter
{

  // Allows you to assign logical names to the pins
  public class RaspPin
  {
    public GPIOPinDriver.Pin pinNumber { get; set; }
    public GPIOPinDriver driver;
    public GPIOPinDriver.GPIODirection direction { get; set; }
    public string name { get; set; }
    public int oldState;

    override public string ToString()
    {
      string s = string.Format("Pin Name:{0}, direction:{1}, number {2}", 
        name, direction == GPIOPinDriver.GPIODirection.In? "In": "Out", driver.GPIOPin);
      return s;
    }
  }


  public class PinStateDto
  {
    public string Id { get; set; }
    public string ControllerId { get; set; }
    public string PinName { get; set; }
    public string Direction { get; set; }
    public int State { get; set; }
  }



  public class RaspPi 
  {
    // DO for led
    //GPIOPinDriver _drv17;
    // DO for led
    //GPIOPinDriver _drv27;

    // DI for Demo mode on off
    //GPIOPinDriver _drv22;  
    
    List<RaspPin> m_lstPins;

    bool _bSimulationMode;

    string _controllerId;

    public RaspPi(bool bSim, string controllerId)
    {
      _bSimulationMode = bSim;
      _controllerId = controllerId;
      m_lstPins = new List<RaspPin>();
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="lstPins"></param>
    public void InitialiseFromPinArray(List<RaspPin> lstPins)
    {
      Console.WriteLine("Initialising pins ------------------------------");
      foreach (RaspPin pn in lstPins)
      {
        RaspPin pin = new RaspPin();
        pin.driver = new GPIOPinDriver(pn.pinNumber, pn.direction, _bSimulationMode);
        //// pin.direction = pn.direction;
        pin.name = pn.name;
        pin.direction = pn.direction;
        pin.oldState = -1; // not yet determined
        m_lstPins.Add(pin);

        Console.WriteLine(pin.ToString());
      }
      Console.WriteLine("Initialising pins ============================");
    }

    /// <summary>
    /// 
    /// </summary>
    public void Deinitialise()
    {
      foreach(RaspPin pin in m_lstPins)
      {
        pin.driver.Unexport();
      }

      m_lstPins.Clear();
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="name"></param>
    /// <returns></returns>
    private GPIOPinDriver GetDriver(string name)
    {
      foreach(RaspPin pin in m_lstPins)
      {
        if(pin.name == name)
          return pin.driver;
      }

      return null;
    }


    /// <summary>
    /// 
    /// </summary>
    /// <param name="name"></param>
    /// <param name="nDurationMs"></param>
    public void PulsePin(string name, int nDurationMs)
    {
      Task<string> obTask = Task.Run(() =>
      {
        GPIOPinDriver drv = GetDriver(name);
        if(drv == null)
        {
          Console.WriteLine("Driver not found");
          return "Not OK";
        }
        Console.WriteLine("Switch on:" + name);
        drv.State = GPIOPinDriver.GPIOState.High;
        Thread.Sleep(nDurationMs);
        drv.State = GPIOPinDriver.GPIOState.Low;    
        Console.WriteLine("Switch off:" + name);
        return "OK";
      });    
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="name"></param>
    /// <returns></returns>
    public int ReadPin(string name)
    {
      GPIOPinDriver drv = GetDriver(name);
      if(drv == null)
      {
        Console.WriteLine("Driver not found");
        return 0;
      }
      if(drv.State == GPIOPinDriver.GPIOState.High)
        return 1;
      return 0;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    public bool Reboot()
    {
      Console.WriteLine("Rebooting...");
      System.Diagnostics.Process.Start(new System.Diagnostics.ProcessStartInfo() { FileName = "sudo", Arguments = "reboot" });
      return true;
    }


    /// <summary>
    /// Returns true if any Input pin state has changed
    /// </summary>
    /// <returns></returns>
    public bool CheckPinStates()
    {
      bool bSomethingChanged = false;
      foreach (RaspPin pn in m_lstPins)
      {
        if(pn.direction == GPIOPinDriver.GPIODirection.In)
        {
          int currentState = ReadPin(pn.name);
          if(currentState != pn.oldState)
          {
            Console.WriteLine("Pin {0} changed to {1}", pn.name, currentState);
            bSomethingChanged = true;
          }
        }
      }
      return bSomethingChanged;
    }

    // Read Input pin states and updates oldState, returning JSON array
    public List<PinStateDto> ReadPinStates()
    {
      List<PinStateDto> lst = new List<PinStateDto>();
      foreach (RaspPin pn in m_lstPins)
      {
        if (pn.direction == GPIOPinDriver.GPIODirection.In)
        {
          int currentState = ReadPin(pn.name);
          pn.oldState = currentState;

          PinStateDto dto = new PinStateDto();
          dto.Id = "na";
          dto.ControllerId = _controllerId;
          dto.PinName = pn.name;
          dto.Direction = "Input";
          dto.State = currentState;

          lst.Add(dto);
        }
      }
      return lst;
    }

    public bool WritePinStates(PinStateDto[] pins)
    {
      bool bAllGood = true;
      foreach (PinStateDto pn in pins)
      {
        GPIOPinDriver drv = GetDriver(pn.PinName);
        if (drv == null)
        {
          Console.WriteLine("Driver not found");
          bAllGood = false;
        }    
        else   
        {
          if(drv.Direction == GPIOPinDriver.GPIODirection.Out)
            drv.State = (pn.State == 0)? GPIOPinDriver.GPIOState.Low:  GPIOPinDriver.GPIOState.High;
        } 

      }

      return bAllGood;
    }

  }

}
