import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { RouterModule, Routes, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotellist',
  templateUrl: './hotellist.component.html',
  styleUrls: ['./hotellist.component.css']
})
export class HotellistComponent implements OnInit {

  
 
  constructor(private _myservice: MyserviceService, private router: Router) { }

  ngOnInit() {

    
  } 

    
getHotels(){
  this._myservice.getHotels().subscribe(  
    // (data:Product[])=>{  
    //   this.allProduct=data;  
    // }  
  ); 
}

  }




