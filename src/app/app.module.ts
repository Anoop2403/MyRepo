import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { Platform } from '@angular/cdk/platform';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from './http.interceptor';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    BrowserAnimationsModule, 
    MatTableModule,
    CoreModule,
    SharedModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true
    },
    Platform,
  ]
})
export class AppModule { }
