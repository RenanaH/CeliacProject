import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserMangementService } from '../user-managment.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.minLength(11)]),
    psw: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPsw: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  constructor(private userService: UserMangementService) {
    this.registerForm.setValidators(this.comparisonValidator());
  }
    model: any = {};
  get gen(){
    return this.registerForm.controls;
  }
  ngOnInit() {
  }

  public comparisonValidator() : ValidatorFn{
    return (registerForm: FormGroup): ValidationErrors => {
       const control1 = registerForm.controls['psw'];
       const control2 = registerForm.controls['confirmPsw'];
       if (control1.value !== control2.value) {
          control2.setErrors({notEquivalent: 'אימות סיסמה נכשל'});
       } else {
          control2.setErrors(null);
       }
       return;
 };
}
  onSubmit() {
    // stop here if form is invalid
    if (this.registerForm.valid) {

      let user={
        "email": this.registerForm.value.mail,
        "password": this.registerForm.value.password
    };
      this.userService.register(user);

      }
    }
  }
