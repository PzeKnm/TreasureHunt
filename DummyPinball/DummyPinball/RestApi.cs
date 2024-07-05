using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace DummyPinball
{
  public class RestApi
  {

    private static string sBaseURL = "http://sandgatethapi.azurewebsites.net/api/";
    private static string sHubDeviceId = "Station001";
    private static string sHubDeviceKey = "ZjyLmuSHOu5Bv8YoqWy49za92%2bnG0cR/8vO2e/8Q1r8=";

    public static bool ActivateStation()
    {
      string sUrl = sBaseURL + @"UploadStationEvent?HubDeviceId=" + sHubDeviceId + "&HubDeviceKey=" + sHubDeviceKey + "&Event=Activate";
      return SendHttpRequest(sUrl);
    }

    public static bool DeactivateStation()
    {
      string sUrl = sBaseURL + @"UploadStationEvent?HubDeviceId=" + sHubDeviceId + "&HubDeviceKey=" + sHubDeviceKey + "&Event=Deactivate";
      return SendHttpRequest(sUrl);
    }


    public static bool SendCommandEventToClient(string sCommand, string sParms)
    {
      string sUrl = sBaseURL + @"UploadStationEvent?HubDeviceId=" + sHubDeviceId + "&HubDeviceKey=" + sHubDeviceKey + 
        "&Event=Command&Command=" + sCommand + "&Parameters=" + sParms;
      return SendHttpRequest(sUrl);
    }

    public static bool SendAccessCodeToServer(int nCode)
    {
      string sCode = string.Format("{0}", nCode);
      string sUrl = sBaseURL + @"UploadStationAccessCode?HubDeviceId=" + sHubDeviceId + "&HubDeviceKey=" + sHubDeviceKey + "&AccessCode=" + sCode;
      return SendHttpRequest(sUrl);
    }




    private static bool SendHttpRequest(string sReq)
    {
      HttpWebRequest request = WebRequest.Create(sReq) as HttpWebRequest;

      // Get response  
      using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
      {
        // Get the response stream  
        StreamReader reader = new StreamReader(response.GetResponseStream());

        // Console application output  
        string sResult = reader.ReadToEnd();

        return (response.StatusCode == HttpStatusCode.OK);
      }
    }






  }
}


/*
 * 
 * http://localhost:7071/api/UploadStationAccessCode?HubDeviceId=Station001&HubDeviceKey=ZjyLmuSHOu5Bv8YoqWy49za92%2bnG0cR/8vO2e/8Q1r8=&AccessCode=5432



 * 
 * */
