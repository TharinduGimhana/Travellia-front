import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { RouterModule, Routes, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  myForm: FormGroup;
  loginForm: FormGroup;
  successMessage = '';
  constructor(private _myservice: AuthenticationService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required)
    });

    this.loginForm = new FormGroup(
      {
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      }
    );


  }

  ngOnInit() {


  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  IsValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }



  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);

  register() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      this._myservice.submitRegister(this.myForm.value)
        .subscribe(
          data => this.successMessage = 'Registration success',
          error => this.successMessage = 'Some error'
        );
    }
  }

  login() {

    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this._myservice.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this.router.navigate(['/properties']);
          },
          error => this.successMessage = 'Invalid Email Or Password'
        );
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/authentication']);
  }

}
