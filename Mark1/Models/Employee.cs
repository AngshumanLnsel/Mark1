using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Mark1.Models
{
    [Table("Employee")]
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public Nullable<int> DepartmentID { get; set; }
        public string EmailID { get; set; }
        public Nullable<DateTime> DOJ { get; set; }
    }
}
