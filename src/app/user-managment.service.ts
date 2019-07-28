import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {LoginPageComponent} from './identification-modul/login-page/login-page.component';
import { RegisterPageComponent } from './identification-modul/register-page/register-page.component';

@Injectable({
  providedIn: 'root'
})
export class UserMangementService {


constructor(private http:  HttpClient) { }

register(user)
  {
    this.http.post("                              ",user)
    .subscribe(x=>{
      alert(x);
    });
  }

// login(): Observable<LoginComponent> {

// }
}
