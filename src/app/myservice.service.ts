import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http: HttpClient) { }

  submitRegister(body:any){
    
      return this._http.post('http://localhost:4000/authenticate/reg',body,{
        observe:'body'
      })
  }
}
