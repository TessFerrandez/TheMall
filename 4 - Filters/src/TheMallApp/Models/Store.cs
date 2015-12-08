using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheMallApp.Models
{
    public class Store
    {
        public int StoreId { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public string WeekDayOpeningHours { get; set; }
        public string WeekEndOpeningHours { get; set; }
        public string Description { get; set; }
        public string StoreUrl { get; set; }
        public string Email { get; set; }
    }
}
