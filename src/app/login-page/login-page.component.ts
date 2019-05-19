import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  name; mail;
  //name = new FormControl('');
 // mail = new FormControl('');
  formGroup ;

  constructor() { }

  ngOnInit() {
    this.formGroup=new FormGroup(
    {
   name: new FormControl('',Validators.required),
   mail : new FormControl('',Validators.email)
    });
  }

  updateName(){
    console.warn(this.formGroup.value);
  }
}
