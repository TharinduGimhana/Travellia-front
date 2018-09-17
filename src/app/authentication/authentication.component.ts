import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);

}
