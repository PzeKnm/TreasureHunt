


using GameLib;
using System;
using System.Threading;

namespace PiSignalR
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Program starts.");

            // Start worker threads
            GameManagerWorker wkrGame = new GameManagerWorker(CreateGame);

            ThreadStart tsGame = new ThreadStart(wkrGame.Run);
            Thread threadGame = new Thread(tsGame);
            threadGame.Start();

            Console.WriteLine("Press Esc to exit.");

            ConsoleKeyInfo k = Console.ReadKey();
            while (k.Key != ConsoleKey.Escape)
            {

              if (k.Key == ConsoleKey.G)
                  wkrGame.DoTestCommand("GenerateAccessCode", "");

              if (k.Key == ConsoleKey.A)
                wkrGame.DoTestCommand("AttachClient", "");

              if (k.Key == ConsoleKey.B)
                wkrGame.DoTestCommand("BeginGame", "");

              if (k.Key == ConsoleKey.L)
                wkrGame.DoTestCommand("Left", "");

              if (k.Key == ConsoleKey.R)
                wkrGame.DoTestCommand("Right", "");

              k = Console.ReadKey();
            }

            Console.ReadKey();
            Console.WriteLine("Shutting down...");

            // Stop worker threads
            wkrGame.Stop();

            threadGame.Join();

            Console.WriteLine("Program end.");
        }

        public static Game CreateGame(GameManager gm)
        {
          return new Pinball(gm);
        }


    }
}


