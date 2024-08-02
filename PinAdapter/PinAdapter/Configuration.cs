using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Text.Json;

namespace PinAdapter
{

  // string _cHubUrl = "https://treasurehuntrestapi.azurewebsites.net/api/";
  //     string _cHubUrl = "http://localhost:7071/api/";


  class Settings
  {
    public bool Simulation { get; set; }

    public string ControllerId { get; set; }

    public string RestAPiUrl { get; set; } = string.Empty;

    public List<RaspPin> pins { get; set; }

    public int PinPollingMs { get; set; }
  }



  class Configuration
  {
    private string _cFilename = "Settings.json";

    public Settings settings {get; set; }


    public Configuration()
    {
      
    }


    public void Load()
    {
      var p = Process.GetCurrentProcess();
      string sLoc = Environment.CurrentDirectory;
      string sFilePath = Path.Combine(sLoc, _cFilename);

      if(!File.Exists(sFilePath))
        SaveDefaultFile(sFilePath);

      var fileContent = File.ReadAllText(sFilePath);
      settings = JsonSerializer.Deserialize<Settings>(fileContent);

    }


    private void SaveDefaultFile(string sPath)
    {
      Settings s = new Settings();
      s.Simulation = true;
      s.ControllerId = "PiSim";
      s.RestAPiUrl = "https://treasurehuntrestapi.azurewebsites.net/api/";

      s.pins = new List<RaspPin>();
      s.pins.Add(new RaspPin { name = "MotionSensor", pinNumber = GPIOPinDriver.Pin.GPIO22, direction = GPIOPinDriver.GPIODirection.In });
      s.pins.Add(new RaspPin { name = "LightSensor", pinNumber = GPIOPinDriver.Pin.GPIO10, direction = GPIOPinDriver.GPIODirection.In });
      s.pins.Add(new RaspPin { name = "CorrectAnswer", pinNumber = GPIOPinDriver.Pin.GPIO17, direction = GPIOPinDriver.GPIODirection.Out });
      s.pins.Add(new RaspPin { name = "IncorrectAnswer", pinNumber = GPIOPinDriver.Pin.GPIO27, direction = GPIOPinDriver.GPIODirection.Out });

      s.PinPollingMs = 3000;

      string jsonString = JsonSerializer.Serialize(s);
      System.IO.File.WriteAllText(sPath, jsonString);
    }


  }
}
