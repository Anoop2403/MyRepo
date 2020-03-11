import {
  viewForm,
  fieldConstraint
} from '../../../../framework/generators/form-creators';
import {
  CustomValidatorsService
} from '../../../../framework/utils/validators/custom-validators.service';
import {Validators} from '@angular/forms';
interface IEmployeeDetails {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
}
@viewForm('EmployeeDetails')
export class EmployeeDetailsModel implements  IEmployeeDetails {
    id: string;
     @fieldConstraint({
          validation: [Validators.required],

      })
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
    constructor( empdata: IEmployeeDetails = {
        id : '',
       
        employee_name: '',
        employee_salary: '',
        employee_age: '',
        profile_image: ''
    }
    ) {
      this.id = empdata.id,
      this.employee_name = empdata.employee_name,
      this.employee_age = empdata.employee_age,
      this.employee_salary = empdata.employee_salary,
      this.profile_image = empdata.profile_image
    }
  }
