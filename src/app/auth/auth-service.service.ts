import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _http :HttpClient) { }
}

// authenticate(){
//   var token ="";
//   return this._http.get()
// }