import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatTableModule
} from '@angular/material';
import { Platform } from '@angular/cdk/platform';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from './http.interceptor';
import {EmployeeDataService} from '../data-access-layer/employee-data.service';
@NgModule({
  imports:      [CommonModule, BrowserModule, FormsModule, HttpClientModule,BrowserAnimationsModule , MatTableModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true
    },
    Platform,
    EmployeeDataService
  ]
})
export class AppModule { }
