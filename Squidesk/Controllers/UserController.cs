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
            connectionString();
            conn.Open();
            com.Connection = conn;
            com.CommandText = "select * from Users where username='"+user.username+"' and parola='"+user.parola+"' ";
            dr = com.ExecuteReader();            
            if (dr.Read())
            {
                
                String username = dr.GetString(0);
                String name = dr.GetString(1);
                String firstname = dr.GetString(2);
                String pass = dr.GetString(3);
                int nr = dr.GetInt32(4);
                us = new User(username, name, firstname, nr, pass);
                conn.Close();
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
            conn.ConnectionString = "Data Source=LAPTOP-BQ5NVT98\\SQLEXPRESS;Initial Catalog=Squidesk;Integrated Security=True;";
        }
    }
}