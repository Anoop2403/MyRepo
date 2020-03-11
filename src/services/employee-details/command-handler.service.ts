import { Injectable } from '@angular/core';
import {EmployeeDataService} from '../../data-access-layer/employee-data.service';

@Injectable()
export class CommandHandlerService {

  constructor(private employeeDataService: EmployeeDataService) { }

  getEmployeeDetails(): void {
    this.employeeDataService.getEmployeeDetails().subscribe(() => {
      
    })

  }

}