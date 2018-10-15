import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes,ActivatedRoute,NavigationEnd  } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }


  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/authentication']);
  }
}

