import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';  


@Injectable({
  providedIn: 'root'
})
export class AddpropertyoneService {

  constructor(private _http: HttpClient) { }

  addprp(body:any){
    
    return this._http.post('http://localhost:4000/properties/property',body,{
      observe:'body'
    })
  }
  
}
