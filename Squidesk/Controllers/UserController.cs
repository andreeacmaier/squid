using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Squidesk.Models;
using System.Data.SqlClient;

namespace Squidesk.Controllers
{
    public class UserController : Controller
    {
        SqlConnection conn = new SqlConnection();
        SqlCommand com = new SqlCommand();
        
        User us;

        // GET: User
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Verify(User user)
        {
            User us = null;
            using (dbconnection db = new dbconnection())
            {
                us = db.Users.SingleOrDefault(u => u.username == user.username && u.parola == user.parola);
            }
            if (us != null)
            {
                Session["user"] = us.username;
                return View("Verify", us);
            }
            else
            {
                conn.Close();
                return View("Login2");
            }

        }

        public ActionResult Details()
        {
            return View(us);
        }

        
        private void connectionString()
        {
            conn.ConnectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Mon\Code\squid\Squidesk\App_Data\Database1.mdf;Integrated Security=True;MultipleActiveResultSets=True;Connect Timeout=30;Application Name=EntityFramework";
        }
    }
}