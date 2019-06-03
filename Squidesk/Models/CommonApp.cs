using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Squidesk.Models
{
    public class CommonApp
    {
       
        public List<Lab> LabModel { get; set; }
        public String errorMessage { get; set; }
        public string username { get; internal set; }

     

        public CommonApp() {
            LabModel = new List<Lab>();
            errorMessage = "";
        }
        public CommonApp(List<Lab> labs)
        {
            LabModel = labs;
        }

        public void Progr(String Id)
        {
            CommonApp common = new CommonApp();
            string username = this.username;
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
                        db.Appointments.Add(new Appointment()
                        {
                            idLab = ID,
                            username = username
                        });

                    }
                    else
                    {
                        common.errorMessage = "Nu mai exista locuri";
                    }
                    db.SaveChanges();
                }
            }

            return;
        }

        

    }
}