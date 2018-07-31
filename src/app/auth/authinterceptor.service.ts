import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpHeaders} from '@angular/common/http';
 
import { LoginServiceService } from './login/login-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor {

  constructor(private _authServiceBylogin : LoginServiceService) { }

  intercept(req , next){
    var token = this._authServiceBylogin.checkUserStatus();
    var authRequest = req.clone({
      headers : new HttpHeaders().set('authtoken',token)
    });
    return next.handle(authRequest); 

  }
}
