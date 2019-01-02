import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AddpropertyoneService } from './addpropertyone.service';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-addpropertyone',
  templateUrl: './addpropertyone.component.html',
  styleUrls: ['./addpropertyone.component.css']
})
export class AddpropertyoneComponent implements OnInit {

  imageUrl: string = "/assets/img/add2.png";
  imageUrltwo: string = "/assets/img/add2.png";
  imageUrlthree: string = "/assets/img/add2.png";
  imageUrlfour: string = "/assets/img/add2.png";
  imageUrlfive: string = "/assets/img/add2.png";
  fileToUpload: File = null;
 
  addpropertyone: FormGroup;
  successMessage = '';

  constructor(private _myservice: AddpropertyoneService, private http: HttpClient) {

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


  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // show image priview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  handleFileInputtwo(file: FileList) {
    this.fileToUpload = file.item(0);

    // show image priview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrltwo = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  handleFileInputthree(file: FileList) {
    this.fileToUpload = file.item(0);

    // show image priview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrlthree = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  handleFileInputfour(file: FileList) {
    this.fileToUpload = file.item(0);

    // show image priview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrlfour = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  handleFileInputfive(file: FileList) {
    this.fileToUpload = file.item(0);

    // show image priview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrlfive = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  selecttedFile = null;
 

  onFileSelected(event) {
    this.selecttedFile = event.target.files[0];
    console.log(event);
  }

 




  addpr() {

    var rooms =

      [{
        price: this.addpropertyone.value.price1,
        roomtype: this.addpropertyone.value.roomtype1,
        quentity: this.addpropertyone.value.quntity1,
        sleeps: this.addpropertyone.value.sleeps1

      }, {
        price: this.addpropertyone.value.price2,
        roomtype: this.addpropertyone.value.roomtype2,
        quentity: this.addpropertyone.value.quntity2,
        sleeps: this.addpropertyone.value.sleeps2

      },
      {
        price: this.addpropertyone.value.price3,
        roomtype: this.addpropertyone.value.roomtype3,
        quentity: this.addpropertyone.value.quntity3,
        sleeps: this.addpropertyone.value.sleeps3

      }, {
        price: this.addpropertyone.value.price4,
        roomtype: this.addpropertyone.value.roomtype4,
        quentity: this.addpropertyone.value.quntity4,
        sleeps: this.addpropertyone.value.sleeps4

      }]

    console.log(this.addpropertyone.value);
    // console.log(rooms);
    if (this.addpropertyone.valid) {

      this._myservice.addprp(this.addpropertyone.value)
        .subscribe(
          data => this.successMessage = 'Registration success',
          error => this.successMessage = 'Some error'
        );

      // this._myservice.addp(rooms)
      // .subscribe(
      //   data => this.successMessage = 'Registration success',
      //   error => this.successMessage = 'Some error'
      // );
    }

    
  }





  onUpload() {

    // console.log(this.addpropertyone.value);
    // // console.log(rooms);
    // if (this.addpropertyone.valid) {

    //   this._myservice.addp(this.addpropertyone.value)
    //     .subscribe(
    //       data => this.successMessage = 'Registration success',
    //       error => this.successMessage = 'Some error'
    //     );

      
    // }



      const fd = new FormData();
      fd.append('image', this.selecttedFile, this.selecttedFile.name);
      this.http.post('http://localhost:4000/uploadhotelimage/upload',fd)
    .subscribe(res =>{
      console.log(res);
    });
    }


}
