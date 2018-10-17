import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-addpropertyone',
  templateUrl: './addpropertyone.component.html',
  styleUrls: ['./addpropertyone.component.css']
})
export class AddpropertyoneComponent implements OnInit {

  addpropertyone: FormGroup;
  successMessage = '';

  constructor(private _myservice: MyserviceService) { 

    this.addpropertyone = new FormGroup({
      name: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      contactname: new FormControl(null, Validators.required),
      contactno: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      postalcode: new FormControl(null, Validators.required),
      star: new FormControl(null, Validators.required),
      roomtype1: new FormControl(null, Validators.required),
      quntity1: new FormControl(null, Validators.required),
      sleeps1: new FormControl(null, Validators.required),
      price1: new FormControl(null, Validators.required),
      roomtype2: new FormControl(null, Validators.required),
      quntity2: new FormControl(null, Validators.required),
      sleeps2: new FormControl(null, Validators.required),
      price2: new FormControl(null, Validators.required),
      roomtype3: new FormControl(null, Validators.required),
      quntity3: new FormControl(null, Validators.required),
      sleeps3: new FormControl(null, Validators.required),
      price3: new FormControl(null, Validators.required),
      roomtype4: new FormControl(null, Validators.required),
      quntity4: new FormControl(null, Validators.required),
      sleeps4: new FormControl(null, Validators.required),
      price4: new FormControl(null, Validators.required),
    
    });

  }

  ngOnInit() {
  }


  add() {
    console.log(this.addpropertyone.value);
    if (this.addpropertyone.valid) {
      this._myservice.addp(this.addpropertyone.value)
        .subscribe(
          // data => this.successMessage = 'Registration success',
          // error => this.successMessage = 'Some error'
        );
    }
  }

}
