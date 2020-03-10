
interface IEmployeeDetails {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
    
}

export class EmployeeDetailsDataModel implements  IEmployeeDetails {
    id: string;
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
