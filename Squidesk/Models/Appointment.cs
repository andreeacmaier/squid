//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Squidesk.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Appointment
    {
        public int Id { get; set; }
        public Nullable<int> idLab { get; set; }
        public string username { get; set; }
    
        public virtual Lab Lab { get; set; }
        public virtual User User { get; set; }
    }
}
