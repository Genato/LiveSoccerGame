using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LiveSoccerGame.Controllers
{
    /// <summary>
    /// HELLO FROM CONTROLLER
    /// </summary>
    public class HomeController : Controller
    {
        /// <summary>
        /// HELLO FROM CONTROLLER FUNCTION
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public IActionResult PlayGround()
        {
            ViewBag.CurrentView = "PlayGround";
            return View();
        }
    }
}
