import { Component, ViewChild } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {MatTable} from '@angular/material/table';
import { map } from "rxjs/operators";
import {EmployeeDataService} from "../data-access-layer/employee-data.service"

export interface Employee {
  employee_name: string;
  employee_age: number;
  employee_salary: number;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  apiResponse;
  name;
  age;
  salary;
  displayedColumns: string[] = ['employee_name', 'employee_age', 'employee_salary'];
  dataSource: Array<Employee>;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  constructor(private employeeDataService: EmployeeDataService) {
    this.employeeDataService.getEmployeeDetails().subscribe(res => {
      this.apiResponse = res;
      this.dataSource = this.apiResponse;
    });
  }

  add() {
    if (!this.name || this.name.length > 20 || !this.age || this.age.length > 3 || !this.salary  ||this.salary.length > 10) {
      console.log('fields are incorrect');
    } else {
      this.apiResponse.push({employee_name: this.name, employee_age: this.age, employee_salary: this.salary});
      this.dataSource = this.apiResponse;
       this.table.renderRows();
    }
  }
}
