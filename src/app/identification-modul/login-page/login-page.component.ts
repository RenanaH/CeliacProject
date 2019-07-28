import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { UserMangementService } from '../../user-managment.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private userService: UserMangementService) {

  }

  ngOnInit() {
  //   this.formGroup=new FormGroup(
  //   {
  //  name: new FormControl('',Validators.required),
  //  mail : new FormControl('',Validators.email)
  //   });
  }

  onSubmit() {
  }
}
