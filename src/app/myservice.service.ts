import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';  

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http: HttpClient) { }

// authentication

//   submitRegister(body:any){
    
//       return this._http.post('http://localhost:4000/authenticate/reg',body,{
//         observe:'body'
//       })
//   }

//   login(body:any){
    
//     return this._http.post('http://localhost:4000/authenticate/signin',body,{
//       observe:'body'
//     })


    
// }


// authentication



// addpropertyone

// addprp(body:any){
    
//   return this._http.post('http://localhost:4000/properties/property',body,{
//     observe:'body'
//   })
// }


// addpropertyone




// addpropertytwo

addptwo(body:any){
    
  return this._http.post('http://localhost:4000/room/room',body,{
    observe:'body'
  })
}



// addpropertytwo





// addd(body:any){
    
//   return this._http.post('http://localhost:4000/dest/dest',body,{
//     observe:'body'
//   })
// }



getHotels() {
  return this._http.get('http://localhost:4000/dest/dest').map((res:Response)=>res.json());
}



getProp(id){
  return this._http.get('http://localhost:4000/properties/property/'+id);
}
}








