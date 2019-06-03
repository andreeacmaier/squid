using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DHTMLX.Common;
using DHTMLX.Scheduler;
using DHTMLX.Scheduler.Data;
using Squidesk.Models;

namespace Squidesk.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            var sched = new DHXScheduler(this);
            sched.Skin = DHXScheduler.Skins.Terrace;
            sched.LoadData = true;
            sched.Config.isReadonly = true;
            sched.EnableDataprocessor = true;
            sched.InitialDate = DateTime.Now;
            List<Appointment> apps = new dbconnection().Appointments.ToList();
            List<CalendarEvent> Events = apps.Select(a => new CalendarEvent() { id = a.Id, text = a.Lab.Subject.nume, start_date = a.Lab.start_date, end_date = a.Lab.end_date }).ToList();
            sched.Data.Parse(Events);
            return View(sched);
        }

      public ActionResult MakeApp()
        {
            CommonApp common = new CommonApp(new dbconnection().Labs.ToList());
            common.username = (string)Session["user"];


            return View(common);
        }


        public ActionResult Progr(String Id)
        {
            CommonApp common = new CommonApp(new dbconnection().Labs.ToList());
            string username = (string)Session["user"];
            int ID = int.Parse(Id);
            List<Appointment> apps = new dbconnection().Appointments.Where(a => a.username == username && a.idLab == ID).ToList();
            if (apps.Any())
            {
                common.errorMessage = "Deja esti programat la aceasta activitate";
                
            }
            else
             {
                using (dbconnection db = new dbconnection())
                {
                    if (db.Labs.Where(a => a.Id == ID).First().capacitate > 0)
                    {
                        db.Labs.Where(a => a.Id == ID).First().capacitate--;
                        int newId = db.Appointments.Max(a => a.Id) + 1;
                        db.Appointments.Add(new Appointment()
                        {
                            Id = newId,
                            idLab = ID,
                            username = username
                        });
                        common.errorMessage = "Programare efectuata";
                    } else
                    {
                        common.errorMessage = "Nu mai exista locuri";
                    }
                    db.SaveChanges();
                }
            }

            return View("MakeApp",common);
        }

       

        

    }
}