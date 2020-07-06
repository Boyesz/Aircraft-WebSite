using Microsoft.EntityFrameworkCore;
using System;


namespace FlightProject.Core.Models
{
    public class AircraftDbContext : DbContext
    {
        public DbSet<Aircraft> Aircrafts { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Aircrafts;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        }
    }
}
