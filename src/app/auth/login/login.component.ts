import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'; 
import { LoginServiceService } from './login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm :FormGroup;

  constructor(private _fb :FormBuilder,private _loginService:LoginServiceService) { 

  }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username:['',[Validators.required,Validators.minLength(5)]],
      password:['',[Validators.required,Validators.minLength(5)]],
    });
   }
   login(){
    //  console.log(this.loginForm.value);
    
     this._loginService.login(this.loginForm.value);
   }
}
