using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Squidesk.Models
{
    public class User
    {

        public String username { get; set; }
        public String nume { get; set; }
        public String prenume { get; set; }
        public String parola { get; set; }
        public int nrMat { get; set; }

        public User()
        {

        }

        public User(String u, String n, String p, int nr, String pass)
        {
            this.username = u;
            this.nume = n;
            this.prenume = p;
            this.nrMat = nr;
            this.parola = pass;
        }
    }
}