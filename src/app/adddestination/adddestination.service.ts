import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';  


@Injectable({
  providedIn: 'root'
})
export class AdddestinationService {

  constructor(private _http: HttpClient) { }

  addd(body:any){
    
    return this._http.post('http://localhost:4000/dest/dest',body,{
      observe:'body'
    })
  }
}
