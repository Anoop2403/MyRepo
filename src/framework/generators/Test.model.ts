import {
  Validators
} from '@angular/forms';
import {
  fieldConstraint,
  viewForm
} from './form-creators';
import {CustomValidatorsService} from '../utils/validators/custom-validators.service';

interface ITest {
  testField1: string;
}

@viewForm('Test')
export class Test {
  @fieldConstraint({
    validation: [
      Validators.required,
      CustomValidatorsService.isNumber
    ],
    onScreenMessage: {
      'required': 'required field',
      'isNumber': 'number field'
    }
  })
  testField1: string;

  constructor(tObj: ITest = {
    testField1: ''
  }) {
    this.testField1 = tObj.testField1;
  }
}
