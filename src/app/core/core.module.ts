
import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import {EmployeeDataService} from '../../data-access-layer/employee-data.service';
import {FormLoaderService} from '../../services/employee-details/form-manager/form-loader.service';
import {CommandHandlerService} from '../../services/employee-details/command-handler.service'
@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
  ],
  providers: [
    EmployeeDataService,
    FormLoaderService,
    CommandHandlerService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
