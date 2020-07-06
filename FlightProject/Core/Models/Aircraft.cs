using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightProject.Core.Models
{
    public class Aircraft
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public int Price { get; set; }
        public string Manufacturer { get; set; }
    }

    public enum Countries
    {
        USA,RUS,ENG,CHN,SWE
    }
}
