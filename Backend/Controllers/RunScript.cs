using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using System;
using System.Diagnostics;

    
namespace BackendFramework.MakeSound {

        public static class ShellHelper
        {
            public static string Bash(this string cmd)
            {
                var escapedArgs = cmd.Replace("\"", "\\\"");
                
                var process = new Process()
                {
                    StartInfo = new ProcessStartInfo
                    {
                        FileName = "/bin/bash",
                        Arguments = $"-c \"{escapedArgs}\"",
                        RedirectStandardOutput = true,
                        UseShellExecute = false,
                        CreateNoWindow = true,
                    }
                };
                process.Start();
                string result = process.StandardOutput.ReadToEnd();
                process.WaitForExit();
                return result;
            }
        }

        [Produces("application/json")];
        [Route("sound")];
        [EnableCors("AllowAll")];

        public class SoundController : Controller {
                public SoundController(){

                }
        }

        [HttpPost]
        public async Task<IActionResult> Post(){

                string strCmdText;
                strCmdText = "aplay 2000.wav";
                var Output = strCmdText.Bash()


                return OkObjectResult(Output);
        }



        
}
