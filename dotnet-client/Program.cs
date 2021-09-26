using System;
using WebSocketSharp;

namespace dotnet_client
{
    class Program
    {
        static void Main(string[] args)
        {

            const string SOCKET_URL = "ws://ecap-server:8383";

             using (var ws = new WebSocket (SOCKET_URL)) {

                ws.OnOpen += (sender, e) => {
                    Console.WriteLine ("Connected to the server. Waiting for message....");
                };

                ws.OnError += (sender, e) => {
                    Console.WriteLine ("Error.... Try again!");
                };                

                ws.OnMessage += (sender, e) => {                    
                       if (e.IsText) {
                            Console.Write(e.Data);
                            return;
                        }                        
                    };
                
                ws.Connect ();
                Console.ReadKey (true);
            }
        }
    }
}
