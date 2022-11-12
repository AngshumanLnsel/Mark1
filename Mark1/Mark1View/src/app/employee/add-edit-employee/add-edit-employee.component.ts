import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  @Input() emp: any;
  EmployeeID = "";
  EmployeeName = "";
  Department = "";
  DOJ = "";
  PhotoFileName = "";
  PhotoFilePath = "";
  DepartmentList: any = [];
  //dt = new dateFormatPipe();

  ngOnInit(): void {
    this.loadEmployeeList();
  }

  loadEmployeeList() {

    this.service.getAllDepartmentNames().subscribe((data: any) => {
      this.DepartmentList = data;

      this.EmployeeID = this.emp.EmployeeID;
      this.EmployeeName = this.emp.EmployeeName;
      this.Department = this.DepartmentList[this.emp.DepartmentID].DepartmentName;
      var datePipe = new DatePipe("en-US");
      var cdate = datePipe.transform(this.emp.DOJ, 'dd/MM/yyyy')
      if(cdate !== null){        
        this.DOJ = cdate; 
      }     
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
    });
  }

  addEmployee() {
    var val = {
      EmployeeID: this.EmployeeID,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DOJ: this.DOJ,
      PhotoFileName: this.PhotoFileName
    };

    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateEmployee() {
    var val = {
      EmployeeID: this.EmployeeID,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DOJ: this.DOJ,
      PhotoFileName: this.PhotoFileName
    };

    this.service.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    this.service.uploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
    })
  }
}
