import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-addpropertytwo',
  templateUrl: './addpropertytwo.component.html',
  styleUrls: ['./addpropertytwo.component.css']
})
export class AddpropertytwoComponent implements OnInit {

  addpropertytwo: FormGroup;
  successMessage = '';

  constructor(private _myservice: MyserviceService) {

    this.addpropertytwo = new FormGroup({
      roomtype: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
     
    
    });
   }

  ngOnInit() {
  }

  
  add() {
    console.log(this.addpropertytwo.value);
    if (this.addpropertytwo.valid) {
      this._myservice.addptwo(this.addpropertytwo.value)
        .subscribe(
          data => this.successMessage = 'Added rooms this type',
          error => this.successMessage = 'Some error'
        );
    }
  }

}
