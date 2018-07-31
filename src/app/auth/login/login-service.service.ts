import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { CookieService } from '../../../../node_modules/ngx-cookie-service';
import { Router } from '../../../../node_modules/@angular/router';
import{Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  $authObservable : Subject<any> =new  Subject();
  username : any;
  uid:string;
  constructor(private _http:HttpClient,private _cookieService: CookieService,private _router :Router) { }

  login(login_details:any)
  {
    console.log(login_details);
    this._http.post('http://localhost:3000/login',login_details).subscribe((data:any)=>{
      // this._cookieService.set('token',data.isLoggedin);
        console.log(data);
        this.username=data.user.username;
        this.uid= data.user._id;
        if(data)
        {
           this._cookieService.set('token',data.token);
          //  this._cookieService.set('username',data.user.username);
           this.$authObservable.next(data.token);
          alert("Login Success");
          this._router.navigate(['/home']);
        }
        else{
          alert("invalid login details!!");
        }
    
  });
}
checkUserStatus() {
  return this._cookieService.get('token');
}
// user_details(){
//   return this._cookieService.get('username');
// }

logout(){
  
  this._cookieService.delete('token');
  this._cookieService.delete('username');
  this.$authObservable.next(false);
  
}
}

