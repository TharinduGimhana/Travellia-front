import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AdddestinationService } from './adddestination.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adddestination',
  templateUrl: './adddestination.component.html',
  styleUrls: ['./adddestination.component.css']
})
export class AdddestinationComponent implements OnInit {
  imageUrl: string = "/assets/img/add2.png";
  fileToUpload: File = null;

  adddest: FormGroup;
  successMessage = '';

  constructor(private _myservice: AdddestinationService, private http: HttpClient) {

    this.adddest = new FormGroup({
      desname: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
     



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

  selecttedFile = null;
 

  onFileSelected(event) {
    this.selecttedFile = event.target.files[0];
    console.log(event);
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selecttedFile, this.selecttedFile.name);
    this.http.post('http://localhost:4000/uploaddestimage/upload',fd)
  .subscribe(res =>{
    console.log(res);
  });
  }





  add() {

    

    console.log(this.adddest.value);
    // console.log(rooms);
    if (this.adddest.valid) {

      this._myservice.addd(this.adddest.value)
        .subscribe(
          data => this.successMessage = 'Added success',
          error => this.successMessage = 'Some error'
        );


    }

    
  }


}
