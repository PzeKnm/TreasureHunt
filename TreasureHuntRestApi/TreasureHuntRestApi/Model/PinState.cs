


using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.Extensions.Logging;

namespace TreasureHunt.Model
{


  public class PinStateDto
  {
    public string Id;
    public string ControllerId;
    public string PinName;
    public string Direction;
    public int State;    
  }
  

}