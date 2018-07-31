import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private _http:HttpClient) { }

  submit(reg_details:any)
  {
    
    this._http.post('http://localhost:3000/register',reg_details).subscribe((data:any)=>{
      // this._cookieService.set('token',data.isLoggedin);
        console.log(data);
    
  });
}
}
