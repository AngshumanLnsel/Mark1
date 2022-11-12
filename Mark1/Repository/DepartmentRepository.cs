using Mark1.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mark1.Repository
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private readonly APIdbContext _appDBContext;
        public DepartmentRepository(APIdbContext context)
        {
            _appDBContext = context ??
                throw new ArgumentNullException(nameof(context));
        }
        public async Task<IEnumerable<Department>> GetDepartment()
        {
            return await _appDBContext.Departments.ToListAsync();
        }
        public async Task<Department> GetDepartmentByID(int ID)
        {
            return await _appDBContext.Departments.FindAsync(ID);
        }
        public async Task<Department> InsertDepartment(Department objDepartment)
        {
            _appDBContext.Departments.Add(objDepartment);
            await _appDBContext.SaveChangesAsync();
            return objDepartment;
        }
        public async Task<Department> UpdateDepartment(Department objDepartment)
        {
            _appDBContext.Entry(objDepartment).State = EntityState.Modified;
            await _appDBContext.SaveChangesAsync();
            return objDepartment;
        }
        public bool DeleteDepartment(int ID)
        {
            bool result = false;
            var department = _appDBContext.Departments.Find(ID);
            if (department != null)
            {
                _appDBContext.Entry(department).State = EntityState.Deleted;
                _appDBContext.SaveChanges();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }
    }
}
