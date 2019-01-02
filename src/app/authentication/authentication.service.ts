import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';  

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) { }


  // authentication

  submitRegister(body:any){
    
    return this._http.post('http://localhost:4000/authenticate/reg',body,{
      observe:'body'
    })
}

login(body:any){
  
  return this._http.post('http://localhost:4000/authenticate/signin',body,{
    observe:'body'
  })


  
}


// authentication

}
