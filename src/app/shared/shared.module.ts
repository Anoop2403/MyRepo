import {NgModule} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {
OnScreenMessageComponent,
MultiKeyTranslatePipe
} from '../../framework';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [
    MultiKeyTranslatePipe,
    OnScreenMessageComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MultiKeyTranslatePipe,
    OnScreenMessageComponent
  ],
  providers: [
  ]
})
export class SharedModule {
}
