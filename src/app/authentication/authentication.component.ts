import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

    myForm:FormGroup;
  constructor(private _myservice: MyserviceService) { 
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null,Validators.email),
      password:new FormControl(null,Validators.required) 
    });
  }

  ngOnInit() {
 
  }

  isValid(controlName){
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }


  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);

  register(){
    console.log(this.myForm.value);
    this._myservice.submitRegister(this.myForm.value)
    // .subscribe(
    //   data => this.successMessage = 'Registration success',
    //   error => this.successMessage = 'Some error'
    // )
  }

}
