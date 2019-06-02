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

        //public ContentResult Data()
        //{

        //}

        //public ContentResult Data()
        //{
        //    //var data = new SchedulerAjaxData((new dbconnection()).Appointments);
        //    //return Content(data.Render(eventRenderer));
        //}

        //public void eventRenderer(System.Text.StringBuilder builder, object ev)
        //{
        //    var item = ev as Appointment;
        //    builder.Append(
        //        string.Format(":{0}, text:\"{1}\", start_date:\"{2:MM/dd/yyyy HH:mm}\", end_date:\"{3:MM/dd/yyyy HH:mm}\"",
        //        item.Id,
        //        HttpUtility.JavaScriptStringEncode(item.Lab.Subject.nume),
        //        item.Lab.start_date,
        //        item.Lab.end_date)
        //    );
        //}
        //public ContentResult Save(int? id, FormCollection actionValues)
        //{
        //    var action = new DataAction(actionValues);
        //    var changedEvent = DHXEventsHelper.Bind<Appointment>(actionValues);
        //    var entities = new dbconnection();
        //    try
        //    {
        //        switch (action.Type)
        //        {
        //            case DataActionTypes.Insert:
        //                entities.Appointments.Add(changedEvent);
        //                break;
        //            case DataActionTypes.Delete:
        //                changedEvent = entities.Appointments.FirstOrDefault(ev => ev.Id == action.SourceId);
        //                entities.Appointments.Remove(changedEvent);
        //                break;
        //            default:// "update"
        //                var target = entities.Appointments.Single(e => e.Id == changedEvent.Id);
        //                DHXEventsHelper.Update(target, changedEvent, new List<string> { "Id" });
        //                break;
        //        }
        //        entities.SaveChanges();
        //        action.TargetId = changedEvent.Id;
        //    }
        //    catch (Exception a)
        //    {
        //        action.Type = DataActionTypes.Error;
        //    }

        //    return (new AjaxSaveResponse(action));
        //}

    }
}