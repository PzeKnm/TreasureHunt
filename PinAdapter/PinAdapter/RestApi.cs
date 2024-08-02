using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace PinAdapter
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

    public RestApi(string sBaseUrl, string hubDeviceId, string hubDeviceKey)
    {
      _sBaseURL = sBaseUrl;
      _sHubDeviceId = hubDeviceId;
      _sHubDeviceKey = hubDeviceKey;
      _showPerformance = false;
    }

    public bool UploadPinStates(string sPinStates)
    {
      postData("PinState?Direction=Dev2DB", sPinStates);
      return true;
    }

    public string GetPinStates(string sControllerId)
    {
      string sUrl = _sBaseURL + @"PinState?controllerId=" + sControllerId;
      string sResult = SendHttpRequest(sUrl);
      return sResult;
    }

    


    /*
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
    */
    private string SendHttpRequest(string sReq)
    {
      try
      {
        DateTime before = DateTime.Now;
        HttpWebRequest request = WebRequest.Create(sReq) as HttpWebRequest;

        // Get response  
        using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
        {
            // Get the response stream  
            StreamReader reader = new StreamReader(response.GetResponseStream());

            string sResponse = reader.ReadToEnd();

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


    private bool postData(string relPath, string sContent)
    {
      HttpClient client = new HttpClient();
      client.BaseAddress = new Uri(_sBaseURL);
      client.DefaultRequestHeaders
            .Accept
            .Add(new MediaTypeWithQualityHeaderValue("application/json"));//ACCEPT header

      HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, relPath);
      request.Content = new StringContent(sContent, Encoding.UTF8, "application/json");

      client.SendAsync(request)
            .ContinueWith(responseTask =>
            {
              // Console.WriteLine("Response: {0}", responseTask.Result);
            });

      return true;
    }

  }
}
