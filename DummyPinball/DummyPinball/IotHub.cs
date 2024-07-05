using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.Devices.Client;

namespace DummyPinball
{
  class IotHub
  {

    private static DeviceClient deviceClient = null;
    private static string iotHubUri = "sandgateth-iot-hub.azure-devices.net";
    private static string deviceId = "Station001";
    private static string deviceKey = "ZjyLmuSHOu5Bv8YoqWy49za92+nG0cR/8vO2e/8Q1r8=";

    public void StartListening()
    {

      ReceiveC2dAsync();

    }



    private async void ReceiveC2dAsync()
    {
      try
      {
        if (deviceClient == null)
        {
          deviceClient = DeviceClient.Create(iotHubUri,
          new DeviceAuthenticationWithRegistrySymmetricKey(
          deviceId, deviceKey), Microsoft.Azure.Devices.Client.TransportType.Http1);
        }

        while (true)
        {
          Microsoft.Azure.Devices.Client.Message receivedMessage =
                      await deviceClient.ReceiveAsync();

          if (receivedMessage == null)
          {
            await Task.Delay(TimeSpan.FromMilliseconds(200));

            continue;
          }

          await deviceClient.CompleteAsync(receivedMessage);

          Stream str = receivedMessage.GetBodyStream();
          StreamReader reader = new StreamReader(str);
          string text = reader.ReadToEnd();

          // pass on message through delegate
          // frm.Invoke(new Action(() => { frm.OnCommandReceived(text); }));

          //await Task.Delay(TimeSpan.FromSeconds(2));
        }
      }
      catch (Exception exc)
      {
        Console.WriteLine(exc.Message);
      }

    }

  }
}
