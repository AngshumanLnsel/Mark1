using Mark1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark1.Repository
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> GetEmployees();
        Task<Employee> GetEmployeeByID(int ID);
        Task<Employee> InsertEmployee(Employee objEmployee);
        Task<Employee> UpdateEmployee(Employee objEmployee);
        bool DeleteEmployee(int ID);
    }
}
