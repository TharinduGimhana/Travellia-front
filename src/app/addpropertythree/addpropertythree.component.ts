import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-addpropertythree',
  templateUrl: './addpropertythree.component.html',
  styleUrls: ['./addpropertythree.component.css']
})
export class AddpropertythreeComponent implements OnInit {
  // imageUrl : string = "/assets/img/dp2.png";
  // fileToUpload : File = null;
  constructor() { }

  ngOnInit() {
  }



 
  // handleFileInput(file : FileList){
  //   this.fileToUpload = file.item(0);

  //   // show image preview

  //   var reader = new FileReader();
  //   reader.onload = (event:any) => {
  //     this.imageUrl = event.target.result; 
  //   }
  //   reader.readAsDataURL(this.fileToUpload);
  // }
}
