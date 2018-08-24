using Microsoft.EntityFrameworkCore;

namespace dotApi.Models
{
    public class dotApiContext : DbContext
    {
        public dotApiContext(DbContextOptions<dotApiContext> options)
            : base(options)
        {
        }

        public DbSet<RowItem> RowItems { get; set; }
    }
}