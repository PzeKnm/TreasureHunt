


using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.Extensions.Logging;
using TreasureHunt.Model;

namespace TreasureHunt.Data
{
  /// <summary>
  /// 
  /// </summary>
  public class DataAccess
  {

    /// <summary>
    /// 
    /// </summary>
    private static string sConn = "Server=tcp:firebase-subscriptions.database.windows.net,1433;Initial Catalog=SandgateTH;Persist Security Info=False;User ID=FunctionsUser;Password=AddSubs2DB;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
    private static string sConnLongTimeout = "Server=tcp:firebase-subscriptions.database.windows.net,1433;Initial Catalog=SandgateTH;Persist Security Info=False;User ID=FunctionsUser;Password=AddSubs2DB;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=120;";

    //  private static string sConn = "Server=ASWKNM01\\SQL2008;Initial Catalog=TreasureHunt;Persist Security Info=False;User ID=TreasureHuntUser;Password=Treasure2Find;MultipleActiveResultSets=False;Connection Timeout=30;";

    private static int cInactivityTimoutMin = 10;

    private ILogger _logger;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="log"></param>
    public DataAccess(ILogger log)
    {
      _logger = log;
    }


    /// <summary>
    /// since the DB is on a sleepable resource, wake it up if need be
    /// </summary>
    /// <returns></returns>
    public bool CheckDBActive()
    {
      try
      {
        using (SqlConnection conn = new SqlConnection(sConnLongTimeout))
        {
          conn.Open();
          conn.Close();
        }
        return true;
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
        throw (ex);
      }
    }

    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    public List<GameStationDto> GetGameStations()
    {
      List<GameStationDto> lst = new List<GameStationDto>();
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = string.Format("SELECT * FROM TStation ");
          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
              while (reader.Read())
              {
                GameStationDto gs = new GameStationDto();
                gs.Id = reader["ID"].ToString();  
                gs.Name= reader["Name"].ToString();  
                gs.Description = reader["Description"].ToString();  
                gs.Status = reader["Status"].ToString(); 
                gs.LastContactDate = reader.GetNullableDateTime("LastContactDate");
                lst.Add(gs);                              
              }
            }
            
            reader.Close();
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
        throw(ex);
      }

      return lst;
    }

    /// <summary>
    /// 
    /// </summary>
    public void UpdateStationStatusFromLastContactTime()
    {
      List<GameStationDto> lst = GetGameStations();
      foreach(GameStationDto gs in lst)
      {
        if(gs.LastContactDate != null)
        {
          TimeSpan ts = DateTime.UtcNow - (DateTime)gs.LastContactDate;
          if(ts.TotalMinutes > cInactivityTimoutMin)
          {
            string sStationId = GetStationHubDeviceId(gs.Id);
            ResetStationToken(gs.Id);
            UpdateStationStatus(sStationId, "Deactivated");
          }          
        }
      }
    }


    /// <summary>
    /// 
    /// </summary>
    /// <param name="gameId"></param>
    /// <returns></returns>
    public string GetStationAccessCode(string gameId)
    {
      string code = "";
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = string.Format("SELECT CurrentAuthCode FROM TStation where id = '{0}' ", gameId);
          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            SqlDataReader reader = cmd.ExecuteReader();
            if (reader.HasRows)
            {
              while (reader.Read())
              {
                code = reader["CurrentAuthCode"].ToString();  
              }
            }
            
            reader.Close();
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }

      return code;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="hubDeviceId"></param>
    /// <returns></returns>
    public string GetGameIdFromHubDeviceId(string hubDeviceId)
    {
      string code = "";
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = string.Format("SELECT ID FROM TStation where HubDeviceId = '{0}' ", hubDeviceId);
          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
              while (reader.Read())
              {
                code = reader["ID"].ToString();  
              }
            }
            
            reader.Close();
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }

      return code;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="gameId"></param>
    /// <returns></returns>
    public string GetStationAuthToken(string gameId)
    {
      string code = "";
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = string.Format("SELECT CurrentAuthToken FROM TStation where id = '{0}' ", gameId);
          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
              while (reader.Read())
              {
                code = reader["CurrentAuthToken"].ToString();  
              }
            }
            
            reader.Close();
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }

      return code;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="gameId"></param>
    /// <returns></returns>
    public string GenerateNewStationToken(string gameId, string clientId)
    {
      try
      {
        ClientAuthToken cat = new ClientAuthToken();
        string sToken = cat.CreateToken(clientId, gameId, DateTime.Now + TimeSpan.FromMinutes(10.0));

        _logger.LogInformation(sToken);

        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          using (SqlCommand cmd = new SqlCommand("UPDATE TStation SET CurrentAuthToken = @Token  WHERE Id = @Id", conn))
          {
            cmd.Parameters.AddWithValue("@Id", gameId);
            cmd.Parameters.AddWithValue("@Token", sToken);
            int rows = cmd.ExecuteNonQuery();
            if(rows == 1)
              return GetStationAuthToken(gameId);
          }          
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }

      return "";
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="gameId"></param>
    /// <returns></returns>
    public string ResetStationToken(string gameId)
    {
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          using (SqlCommand cmd = new SqlCommand("UPDATE TStation SET CurrentAuthToken = ''  WHERE Id = @Id", conn))
          {
            cmd.Parameters.AddWithValue("@Id", gameId);
            int rows = cmd.ExecuteNonQuery();
            if(rows == 1)
              return GetStationAuthToken(gameId);
          }          
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }

      return "";
    }


    /// <summary>
    /// Returns the HubDeviceId for a station
    /// </summary>
    /// <param name="GameId"></param>
    /// <returns></returns>
    public string GetStationHubDeviceId(string GameId)
    {
      string code = "";
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = string.Format("SELECT HubDeviceId FROM TStation where id = '{0}' ", GameId);
          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
              while (reader.Read())
              {
                code = reader["HubDeviceId"].ToString();  
              }
            }
            
            reader.Close();
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }

      return code;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="GameId"></param>
    /// <returns></returns>
    public string GetStationHubDeviceKey(string GameId)
    {
      string code = "";
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = string.Format("SELECT HubDeviceKey FROM TStation where id = '{0}' ", GameId);
          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
              while (reader.Read())
              {
                code = reader["HubDeviceKey"].ToString();  
              }
            }
            
            reader.Close();
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }

      return code;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="StationHubId"></param>
    /// <returns></returns>
    public string GetStationHubDeviceKeyFromStationHubId(string StationHubId)
    {
      string code = "";
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = string.Format("SELECT HubDeviceKey FROM TStation where HubDeviceId = '{0}' ", StationHubId);
          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
              while (reader.Read())
              {
                code = reader["HubDeviceKey"].ToString();  
              }
            }
            
            reader.Close();
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }

      return code;
    }
    
    /// <summary>
    /// 
    /// </summary>
    /// <param name="StationHubId"></param>
    /// <returns></returns>
    public string GetStationStatus(string StationHubId)
    {
      string status = "";
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = string.Format("SELECT Status FROM TStation where HubDeviceId = '{0}' ", StationHubId);
          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
              while (reader.Read())
              {
                status = reader["Status"].ToString();  
              }
            }
            
            reader.Close();
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }

      return status;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="stationId"></param>
    /// <param name="status"></param>
    /// <returns></returns>
    public bool UpdateStationStatus(string stationId, string status)
    {
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
            conn.Open();
            using (SqlCommand cmd = new SqlCommand("UPDATE TStation SET Status = @Status WHERE HubDeviceId = @Id", conn))
            {
              cmd.Parameters.AddWithValue("@Id", stationId);
              cmd.Parameters.AddWithValue("@Status", status);
              int rows = cmd.ExecuteNonQuery();
              return (rows == 1);
            }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }
      return false;
    }  

    /// <summary>
    /// 
    /// </summary>
    /// <param name="stationId"></param>
    /// <param name="authCode"></param>
    /// <returns></returns>
    public bool UpdateStationAccessCode(string stationId, string authCode)
    {
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
            conn.Open();
            using (SqlCommand cmd = new SqlCommand("UPDATE TStation SET CurrentAuthCode = @AuthCode WHERE HubDeviceId = @Id", conn))
            {
              cmd.Parameters.AddWithValue("@Id", stationId);
              cmd.Parameters.AddWithValue("@AuthCode", authCode);
              int rows = cmd.ExecuteNonQuery();
              return (rows == 1);
            }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }
      return false;
    }  

    /// <summary>
    /// 
    /// </summary>
    /// <param name="stationId"></param>
    /// <returns></returns>
    public bool UpdateStationHeartbeat(string stationId)
    {
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
            conn.Open();
            using (SqlCommand cmd = new SqlCommand("UPDATE TStation SET LastContactDate = GetDate() WHERE HubDeviceId = @Id", conn))
            {
              cmd.Parameters.AddWithValue("@Id", stationId);
              int rows = cmd.ExecuteNonQuery();
              return (rows == 1);
            }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }
      return false;
    }  


    /// <summary>
    /// 
    /// </summary>
    /// <param name="lstExclude"></param>
    /// <returns></returns>
    public MoreOrLessQuestion GetMoreOrLessQuestion(List<int> lstExclude)
    {
      MoreOrLessQuestion q = new MoreOrLessQuestion();
      
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = string.Format("SELECT top 1 * FROM TMoreOrLessQuestions  ");

          if(lstExclude.Count > 0)
          {
            sQry += "where QuestionKey not in (";
            bool bAddComma = false;
            foreach(int n in lstExclude)
            {
              if(bAddComma)
                sQry += ", ";
              sQry += n.ToString();
              bAddComma = true;
            }

            sQry += ") ";

          }
          sQry += " ORDER BY NEWID()";
          

          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
              while (reader.Read())
              {
                q.Id = reader["ID"].ToString();  
                q.QuestionKey = reader.GetInt("QuestionKey"); 
                q.Category = reader["Category"].ToString();  
                q.QuestionText = reader["QuestionText"].ToString();
                q.Answer = reader.GetInt("Answer");  
                q.RangeLo = reader.GetInt("RangeLo");  
                q.RangeHi = reader.GetInt("RangeHi");                                             
              }
            }
            
            reader.Close();
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }
           
      return q; 
    }
 
    
    /// <summary>
    /// 
    /// </summary>
    /// <param name="SettingName"></param>
    /// <returns></returns>
    public string GetSetting(string SettingName)
    {
      string value = "";
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = string.Format("SELECT Value FROM TSettings where name = '{0}' ", SettingName);
          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
              while (reader.Read())
              {
                value = reader["Value"].ToString();  
              }
            }
            
            reader.Close();
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }

      return value;
    }
    
    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    public List<UserDto> GetUsers()
    {
      List<UserDto> lst = new List<UserDto>();
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = string.Format("SELECT * FROM TUser ");
          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
              while (reader.Read())
              {
                UserDto u = new UserDto();
                u.Id = reader["ID"].ToString(); 
                u.Name= reader["Name"].ToString();  
                u.UserAgent = reader["UserAgent"].ToString();  
                u.IPAddr = reader["IPAddr"].ToString(); 
                u.LastContactDate = reader.GetNullableDateTime("LastContactDate");
                lst.Add(u);                              
              }
            }
            
            reader.Close();
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }

      return lst;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="UserId"></param>
    /// <param name="UserAgent"></param>
    /// <param name="ipaddr"></param>
    public void AddOrUpdateUser(string UserId, string UserAgent, string ipaddr)
    {
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = "";
          sQry += " IF NOT EXISTS (SELECT 1 FROM TUser WHERE Id=@Id)   ";
          sQry += "   INSERT INTO TUser (id, useragent, IPAddr, LastContactDate) VALUES(@Id, @UserAgent, @IPAddr, @LastContactDate)  ";
          sQry += " ELSE  ";
          sQry += "   UPDATE TUser SET useragent=@UserAgent, IPAddr = @IPAddr, LastContactDate = @LastContactDate WHERE Id=@Id ";

          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            cmd.Parameters.AddWithValue("@Id", UserId);
            cmd.Parameters.AddWithValue("@UserAgent", UserAgent);
            cmd.Parameters.AddWithValue("@IPAddr", ipaddr);
            cmd.Parameters.AddWithValue("@LastContactDate", DateTime.Now);
            int rows = cmd.ExecuteNonQuery();
            return;
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }
      return;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="ControllerId"></param>
    /// <param name="pinName"></param>
    /// <returns></returns>
    public List<PinStateDto> GetPinState(string ControllerId, string pinName = "")
    {
      List<PinStateDto> lst = new List<PinStateDto>();
      try
      {
        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = string.Format("SELECT * FROM TPinState where ControllerID = '{0}' ", ControllerId);
          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
              while (reader.Read())
              {
                PinStateDto gs = new PinStateDto();          
                gs.Id = reader["ID"].ToString();
                gs.ControllerId = reader["ControllerID"].ToString();
                gs.PinName = reader["PinName"].ToString();
                gs.Direction = reader["Direction"].ToString();
                gs.State = reader.GetInt("State");
                if(pinName == "" || pinName == gs.PinName)
                  lst.Add(gs);
              }
            }

            reader.Close();
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
        throw (ex);
      }

      return lst;
    }


    /// <summary>
    /// return true if the state has changed
    /// </summary>
    /// <param name="pinState"></param>
    /// <returns></returns>
    public bool SetPinState(PinStateDto pinState)
    {
      try
      {
        bool bHasChanged = false;
        List<PinStateDto> lstCurrent = GetPinState(pinState.ControllerId, pinState.PinName);
        if(lstCurrent.Count == 1)
        {
          PinStateDto pinCurrent = lstCurrent[0];
          if(pinCurrent.State != pinState.State)
            bHasChanged = true;
        }

        using (SqlConnection conn = new SqlConnection(sConn))
        {
          conn.Open();
          string sQry = "";

          if(lstCurrent.Count == 1)
          {
            sQry += "UPDATE TPinState SET State=@State WHERE ControllerID=@ControllerID AND PinName= @PinName";
          }
          else
          {
            sQry += "INSERT INTO TPinState (ID, ControllerID, PinName, Direction, State) VALUES(@Id, @ControllerID, @PinName, @Direction, @State)  ";
          }

          using (SqlCommand cmd = new SqlCommand(sQry, conn))
          {
            if (lstCurrent.Count == 1)
            {
              cmd.Parameters.AddWithValue("@ControllerID", pinState.ControllerId);
              cmd.Parameters.AddWithValue("@PinName", pinState.PinName);
              cmd.Parameters.AddWithValue("@State", pinState.State);
            }

            if (lstCurrent.Count == 0)
            {
              // new record, requires new guid
              cmd.Parameters.AddWithValue("@Id", Guid.NewGuid());
              cmd.Parameters.AddWithValue("@ControllerID", pinState.ControllerId);
              cmd.Parameters.AddWithValue("@PinName", pinState.PinName);
              cmd.Parameters.AddWithValue("@Direction", pinState.Direction);
              cmd.Parameters.AddWithValue("@State", pinState.State);
              bHasChanged = true;
            }

            int rows = cmd.ExecuteNonQuery();
            return bHasChanged;
          }
        }
      }
      catch (SqlException ex)
      {
        _logger.LogError(ex.Message);
      }
      return false;
    }

  } // DataAccess

} // ns