
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace TreasureHunt.Data
{
  public class ClientAuthToken {


    public ClientAuthToken()
    {
    }


    public string CreateToken(string ClientId, string GameId, DateTime expiry)
    {
      try
      {
        Dictionary<string, string> dict = new Dictionary<string, string>();
        dict.Add("ClientID", ClientId);
        dict.Add("GameId", GameId);
        dict.Add("ExpiryDate", expiry.ToString());

        string s = JsonConvert.SerializeObject(dict);

        return s;
      }
      catch (SqlException ex)
      {
        Console.WriteLine(ex.Message);
      }
      return "";
    }

    public bool IsValid(string sToken, string ClientId, string GameId)
    {
      var values = JsonConvert.DeserializeObject<Dictionary<string, string>>(sToken);
      if(values["ClientID"] == null || values["GameId"] == null || values["ExpiryDate"] == null)
        return false;

      if(values["ClientID"] != ClientId)
        return false;

      if (values["GameId"] != GameId)
        return false;

      DateTime dteExpiry = DateTime.Parse(values["ExpiryDate"]);
      if(dteExpiry < DateTime.Now)
        return false;

      return true;
    }



  }
}

