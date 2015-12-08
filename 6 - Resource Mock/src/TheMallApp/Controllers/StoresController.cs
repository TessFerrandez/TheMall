using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using TheMallApp.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TheMallApp.Controllers
{
    [Route("api/[controller]")]
    public class StoresController : Controller
    {
        List<Store> stores = new List<Store>()
        {
            new Store { StoreId = 1, Name = "Phone accessories R us", Description = "We have cool phone accessories in all colors", Email = "info@phoneaccessories.com", Location = "1A", StoreUrl = "http://www.phoneaccessories.com", WeekDayOpeningHours = "10 am - 8 pm", WeekEndOpeningHours = "10 am - 4 pm" },
            new Store { StoreId = 2, Name = "Organize yourself", Description = "Everything for your organizational needs", Email = "info@organize.com", Location = "4A", StoreUrl = "http://www.organize.com", WeekDayOpeningHours = "10 am - 8 pm", WeekEndOpeningHours = "10 am - 4 pm" },
            new Store { StoreId = 3, Name = "Fabulous Books", Description = "The best bookstore in the mid west", Email = "info@fabbooks.com", Location = "7A", StoreUrl = "http://www.fabbooks.com", WeekDayOpeningHours = "10 am - 8 pm", WeekEndOpeningHours = "10 am - 4 pm" },
            new Store { StoreId = 4, Name = "Ruler al heur", Description = "The biggest assortment of rulers in Europe", Email = "info@ruleralheur.com", Location = "3A", StoreUrl = "http://www.ruleralheur.com", WeekDayOpeningHours = "10 am - 8 pm", WeekEndOpeningHours = "10 am - 4 pm" },
            new Store { StoreId = 5, Name = "Intelligentsia Coffee", Description = "Fresh brewed ecological coffee", Email = "info@icoffee.com", Location = "5A", StoreUrl = "http://www.icoffee.com", WeekDayOpeningHours = "10 am - 8 pm", WeekEndOpeningHours = "10 am - 4 pm" },
            new Store { StoreId = 6, Name = "Hipster School Supplies", Description = "The hippest shool supplies there is", Email = "info@hipstershoolsupplies.com", Location = "2A", StoreUrl = "http://www.hipstershoolsupplies.com", WeekDayOpeningHours = "10 am - 8 pm", WeekEndOpeningHours = "10 am - 4 pm" },
            new Store { StoreId = 7, Name = "Self help therapy", Description = "Welcome to our self help practice, open 24/7", Email = "info@selfhelptherapy.com", Location = "6A", StoreUrl = "http://www.selfhelptherapy.com", WeekDayOpeningHours = "10 am - 8 pm", WeekEndOpeningHours = "10 am - 4 pm" },
            new Store { StoreId = 8, Name = "Rock Skate", Description = "Skateboards for cool peeps", Email = "info@rockskate.com", Location = "8A", StoreUrl = "http://www.rockskate.com", WeekDayOpeningHours = "10 am - 8 pm", WeekEndOpeningHours = "10 am - 4 pm" },
            new Store { StoreId = 9, Name = "Old School Music", Description = "Antique store specializing in high-end vintage musical instruments", Email = "info@osmusic.com", Location = "10A", StoreUrl = "http://www.osmusic.com", WeekDayOpeningHours = "10 am - 8 pm", WeekEndOpeningHours = "10 am - 4 pm" },
            new Store { StoreId = 10, Name = "Fishing and Carpenting", Description = "The ultimate guy store", Email = "info@fishandcarp.com", Location = "9A", StoreUrl = "http://www.fishandcarp.com", WeekDayOpeningHours = "10 am - 8 pm", WeekEndOpeningHours = "10 am - 4 pm" }
        };

        // GET: api/values
        [HttpGet]
        public IEnumerable<Store> Get()
        {
            return stores;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Store Get(int id)
        {
            return stores.FirstOrDefault(store => store.StoreId == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
