using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using RaspberryGPIOManager;

namespace PiSignalR
{
    class RaspPi
    {
        public void DoTest()
        {

            GPIOPinDriver drv = new GPIOPinDriver(GPIOPinDriver.Pin.GPIO17);
            drv.Direction = GPIOPinDriver.GPIODirection.Out;
            Thread.Sleep(500);
           
            for (int n = 0; n < 10; n++)
            {
                drv.State = GPIOPinDriver.GPIOState.High;                
                Thread.Sleep(1000);
                drv.State = GPIOPinDriver.GPIOState.Low;
                Thread.Sleep(1000);
            }

        }
    }
}
