import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator} from '@angular/forms';

/**
 * Class to validate data in Forms (in this case to be larger than currentDate)
 */
@Directive({
  selector: '[appForbiddenDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: DataValidator, multi: true}]
})
export class DataValidator implements Validator {
  validate(control: FormControl) {

    let date = new Date(control.value);
    date.setHours(0, 0, 0, 0);
    let currDate = new Date();
    currDate.setHours(0, 0, 0, 0);
    if (date < currDate) {
      return {
        dataError: {
          parsedDate: date
        }
      };
    }
    return null;
  }

}
