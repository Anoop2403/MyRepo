
import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import {EmployeeDataService} from '../../data-access-layer/employee-data.service';
import {FormLoaderService} from '../../services/employee-details/form-manager/form-loader.service';
@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
  ],
  providers: [
    EmployeeDataService,
    FormLoaderService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
