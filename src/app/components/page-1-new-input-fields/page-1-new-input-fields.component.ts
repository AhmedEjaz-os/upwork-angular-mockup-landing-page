import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-page-1-new-input-fields',
  templateUrl: './page-1-new-input-fields.component.html',
  styleUrls: ['./page-1-new-input-fields.component.scss']
})
export class Page1NewInputFieldsComponent implements OnInit {
  @Input() label: any;
  @Input() required: boolean;
  @Input() placeHolder: any;
  @Input() errorMessageForRequiredField: any;
  @Input() hint: any;
  @Input() type: any;
  @Input() val: any;
  @Input() disable: boolean;
  email = new FormControl('', [Validators.required, Validators.email]);
  text = new FormControl('', [Validators.required, Validators.nullValidator]);
  number = new FormControl('', [Validators.required, Validators.nullValidator]);
  date = new FormControl('', [Validators.required, Validators.nullValidator]);

  constructor() { }

  ngOnInit() {}

  getErrorMessage() {
    if(this.type){
      if(this.type.inpType === 'email'){
        if (this.email.hasError('required')) {
          return 'You must enter a value';
        }
        return this.email.hasError('email') ? "Email must be in email format abc@xyz.com": '';
      }
      else if(this.type.inpType === 'text'){
        if (this.text.hasError('required')) {
          return 'You must enter a value';
        }
      }
      else if(this.type.inpType === 'number'){
        if (this.number.hasError('required')) {
          return 'You must enter a value';
        }
      }
      else if(this.type.inpType === 'date'){
        if (this.date.hasError('required')) {
          return 'You must enter a value';
        }
      }
    }
  }

}
