using MatrimonialApp.Entities;
using Microsoft.EntityFrameworkCore;

namespace MatrimonialApp.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<AppUser> Users { get; set; }
    }
}
