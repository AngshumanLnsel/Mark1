using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark1.Models
{
    public class APIdbContext: DbContext
    {
        public APIdbContext(DbContextOptions<APIdbContext> options) : base(options) { }

        public DbSet<Department> Departments
        {
            get;
            set;
        }
        public DbSet<Employee> Employees
        {
            get;
            set;
        }
    }
}
