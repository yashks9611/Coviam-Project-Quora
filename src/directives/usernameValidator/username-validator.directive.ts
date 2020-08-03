import { Directive } from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appUsernameValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS, 
      useValue: usernameValidate,
      multi: true 
    }
  ]
})
export class UsernameValidatorDirective {
  
  constructor() { }

}
