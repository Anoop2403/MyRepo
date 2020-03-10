import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import {EmployeeDetailsDataModel} from './employee-data.model';
@Injectable()
export class EmployeeDataService {

  constructor(private http: HttpClient) { }

  getEmployeeDetails(): Observable<EmployeeDetailsDataModel[]>{
    var endpoint = "http://dummy.restapiexample.com/api/v1/employees";
    return this.http.get<EmployeeDetailsDataModel[]>(endpoint).pipe(
      map(res => {
        return res.items.data.map(
          data => new EmployeeDetailsDataModel(data)
          );
      }));
  }

}

