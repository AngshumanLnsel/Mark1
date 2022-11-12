import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';
import { State } from './state';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:44303/api/';
  readonly photoUrl = "https://localhost:44303/Photos/";

  constructor(private http: HttpClient) { }

  // Department
  getDepartmentList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Department/GetDepartment');
  }

  addDepartment(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'Department/AddDepartment', dept, httpOptions);
  }

  updateDepartment(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'department/UpdateDepartment', dept, httpOptions);
  }

  deleteDepartment(deptId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'department/DeleteDepartment?id='+ deptId, httpOptions);
  }

  // Employee
  getEmployeeList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'employee/GetEmployee');
  }

  addEmployee(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'employee/AddEmployee', emp, httpOptions);
  }

  updateEmployee(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'employee/UpdateEmployee/', emp, httpOptions);
  }

  deleteEmployee(empId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'employee/DeleteEmployee/' + empId, httpOptions);
  }

  uploadPhoto(photo: any) {
    return this.http.post(this.apiUrl + 'employee/savefile', photo);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'employee/GetAllDepartmentNames');
  }

  
  getCountries() {
    return [
     new Country(1, 'India' ),
     new Country(2, 'Bangladesh' ),
    ];
  }
  
  getStates() {
   return [
     new State(1, 1, 'Delhi' ),
     new State(2, 1, 'Mumbai' ),
     new State(3, 1, 'Kolkata'),
     new State(4, 1, 'Hydrabad'),
     new State(5, 2, 'Dhaka' ),
     new State(6, 2, 'Rajshahi'),
     new State(7, 1, 'Chennai' )
    ];
  }


}
