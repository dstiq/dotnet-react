using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using dotApi.Models;

namespace dotApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class outputController : ControllerBase
    {
        private readonly dotApiContext _context;

        public outputController(dotApiContext context)
        {
            _context = context;

            if (_context.RowItems.Count() == 0)
            {
                _context.RowItems.Add(new RowItem { Name = "Item1" });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public ActionResult<List<RowItem>> GetAll()
        {
            return _context.RowItems.ToList();
        }

        [HttpGet("{id}", Name = "GetTodo")]
        public ActionResult<RowItem> GetById(long id)
        {
            var item = _context.RowItems.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }
    }
}