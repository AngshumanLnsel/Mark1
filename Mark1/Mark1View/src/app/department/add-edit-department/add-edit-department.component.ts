import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css']
})
export class AddEditDepartmentComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  @Input() depart: any;
  DepartmentID = "";
  DepartmentName = "";

  ngOnInit(): void {

    this.DepartmentID = this.depart.DepartmentID;
    this.DepartmentName = this.depart.DepartmentName;
  }
  addDepartment() {
    var dept = {
      DepartmentID: this.DepartmentID,
      DepartmentName: this.DepartmentName
    };
    this.service.addDepartment(dept).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDepartment() {
    var dept = {
      DepartmentID: this.DepartmentID,
      DepartmentName: this.DepartmentName
    };
    this.service.updateDepartment(dept).subscribe(res => {
      alert(res.toString());
    });
  }
}