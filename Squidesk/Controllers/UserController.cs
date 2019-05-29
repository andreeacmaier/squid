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
        SqlDataReader dr;
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
                return View("Verify", us);
            }
            else
            {
                conn.Close();
                return View("Error");
            }

        }

        public ActionResult Details()
        {
            return View(us);
        }




        private void connectionString()
        {
            conn.ConnectionString = @"Data Source = (LocalDB)\MSSQLLocalDB; AttachDbFilename = F:\scul\scul3\II\Proj\squid\Squidesk\App_Data\Database1.mdf; Integrated Security = True";
        }
    }
}