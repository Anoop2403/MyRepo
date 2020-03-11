
import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import {EmployeeDataService} from '../../data-access-layer/employee-data.service'
@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
  ],
  providers: [
    EmployeeDataService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
