using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Net.Http;

namespace GameLib
{
  public class RestApi
  {

    // private static string sBaseURL = "https://treasurehuntrestapi.azurewebsites.net/api/";
    //// private static string sHubDeviceId = "Station001";
    //// private static string sHubDeviceKey = "ZjyLmuSHOu5Bv8YoqWy49za92%2bnG0cR/8vO2e/8Q1r8=";
    private string _sBaseURL;
    private string _sHubDeviceId;
    private string _sHubDeviceKey;

    private bool _showPerformance;

    private static readonly HttpClient client = new HttpClient();

    public RestApi(string sBaseUrl, string hubDeviceId, string hubDeviceKey)
    {
      _sBaseURL = sBaseUrl;
      _sHubDeviceId = hubDeviceId;
      _sHubDeviceKey = hubDeviceKey;
      _showPerformance = false;
    }


    public bool BroadcastMessageToSignalRClients(ClientMessage cm)
    {
      string sUrl = _sBaseURL + @"BroadcastMessageToSignalRClients";
      string body = JsonConvert.SerializeObject(cm, Formatting.Indented);
      PostRequest(sUrl, body);
      return true;
    }


    public bool UploadPinStates(string sPinStates)
    {
      string sUrl = _sBaseURL + @"PinState?Direction=DB2DEV";
      PostRequest(sUrl, sPinStates);
      return true;
    }




    public bool UploadStationStatus(string sStatus)
    {
      string sUrl = _sBaseURL + @"UploadStationStatus?HubDeviceId=" + _sHubDeviceId + 
            "&HubDeviceKey=" + _sHubDeviceKey + "&Status=" + sStatus;
      return (SendHttpRequest(sUrl) != "");
    }

    public void ShowPerformance(bool bShow)
    {
      _showPerformance = bShow;
    }


    public bool SendHeartbeat()
    {
      return SendSimpleEvent("Heartbeat");
    }


    public bool PublishMessageToClient(string sCommand, string sParms)
    {
      string sUrl = _sBaseURL + @"PublishMessageToClient?HubDeviceId=" + _sHubDeviceId + "&HubDeviceKey=" + _sHubDeviceKey +
        "&Command=" + sCommand + "&Parameters=" + sParms;
      return (SendHttpRequest(sUrl) != "");
    }


    public bool SendAccessCodeToServer(int nCode, int nTimeoutSec)
    {
        string sCode = string.Format("{0}", nCode);
        string sTimeout = string.Format("{0}", nTimeoutSec);
        string sUrl = _sBaseURL + @"UploadStationAccessCode?HubDeviceId=" + _sHubDeviceId + "&HubDeviceKey=" + _sHubDeviceKey + "&AccessCode=" + sCode + "&Timeout=" + sTimeout;
        if((SendHttpRequest(sUrl) != ""))
        {
          return PublishMessageToClient("AuthenticationTimeout", sTimeout);
        }
        else 
          return false;
    }

    public string GetSetting(string settingName)
    {
      string sUrl = _sBaseURL + @"Settings?SettingName=" + settingName;      
      string sResult = SendHttpRequest(sUrl);

      if(sResult != "")
      {
        RestWrapper<string> wrap = JsonConvert.DeserializeObject<RestWrapper<string>>(sResult);
        return wrap.Data;
      }

      return sResult;
    }


    private bool SendSimpleEvent(string sEvent)
    {
      string sUrl = _sBaseURL + @"UploadStationEvent?HubDeviceId=" + _sHubDeviceId + "&HubDeviceKey=" + _sHubDeviceKey + "&Event=" + sEvent;
      return (SendHttpRequest(sUrl) != "");
    }

    private string SendHttpRequest(string sReq)
    {
      try
      {
        DateTime before = DateTime.Now;
        HttpWebRequest request = WebRequest.Create(sReq) as HttpWebRequest;
        request.Proxy = null;

        string sResponse = "";
        // Get response  
        using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
        {
          using (Stream responseStream = response.GetResponseStream())
          {
            using (StreamReader sr = new StreamReader(responseStream))
              sResponse = sr.ReadToEnd();
          }

          if(_showPerformance)
          {
            TimeSpan timeSpan = DateTime.Now.Subtract(before);
            Console.WriteLine("Time taken for req: " + timeSpan.ToString());
            Console.WriteLine(sReq);    
          }   

          if(response.StatusCode == HttpStatusCode.OK)
            return sResponse;
          else
          {
            Console.WriteLine("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            Console.WriteLine("SendHttpRequest failed:");
            Console.WriteLine("Request: " + sReq);
            Console.WriteLine("Response: " + sResponse);
            Console.WriteLine("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            return "";
          }

        }
      }
      catch(WebException exc)
      {
        Console.WriteLine(exc.Message);
        return "";
      }

    }

    private async void PostRequest(string sUrl, string body)
    {
      var content = new StringContent(body, Encoding.UTF8, "application/json");

      var response = await client.PostAsync(sUrl, content);

      var responseString = await response.Content.ReadAsStringAsync();

      return;
    }
    
    
    // Allows calling function like:
    // http://sandgatethapi.azurewebsites.net/api/MoreOrLessGetQuestion?HubDeviceId=Station001&HubDeviceKey=ZjyLmuSHOu5Bv8YoqWy49za92%2bnG0cR/8vO2e/8Q1r8=&ExcludeKeys=2,5
    // or
    // htttp://sandgatethapi.azurewebsites.net/api/ XYZ ?HubDeviceId=Station001&HubDeviceKey=ZjyLmuSHOu5Bv8YoqWy49za92%2bnG0cR/8vO2e/8Q1r8= &Abc
    //                                              ===                                                                                     ===
    public string GetHttpRequestWithDeviceDetails(string sController, string sAppend)
    {
      string sUrl = _sBaseURL + sController + @"?HubDeviceId=" + _sHubDeviceId + "&HubDeviceKey=" + _sHubDeviceKey + sAppend;
      
      string sResult = SendHttpRequest(sUrl);
      return sResult;
      /*
      HttpWebRequest request = WebRequest.Create(sUrl) as HttpWebRequest;

      // Get response  
      using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
      {
          // Get the response stream  
          StreamReader reader = new StreamReader(response.GetResponseStream());

          // Console application output  
          string sResult = reader.ReadToEnd();
          if(response.StatusCode == HttpStatusCode.OK)
            return sResult;
          else
            return "";
      }*/
    }




  }
}
