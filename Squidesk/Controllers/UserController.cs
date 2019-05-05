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

        // GET: User

        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Verify(User user)
        {
            connectionString();
            conn.Open();
            com.Connection = conn;
            com.CommandText = "select * from Users where username='"+user.username+"' and parola='"+user.parola+"' ";
            dr = com.ExecuteReader();
            if (dr.Read())
            {
                conn.Close();
                return View("LoggedIn");
            }
            else
            {
                conn.Close();
                return View("Error");
            }
            
        }

        private void connectionString()
        {
            conn.ConnectionString = "Data Source=LAPTOP-BQ5NVT98\\SQLEXPRESS;Initial Catalog=Squidesk;Integrated Security=True;";
        }
    }
}