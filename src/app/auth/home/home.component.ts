import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login/login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username : any;
  uid:string;
  constructor(private _loginService : LoginServiceService) { 
    // this.username=this._loginService.user_details();
    console.log(_loginService);
    this.username= _loginService.username;
    this.uid=_loginService.uid;
    //console.log( this._loginService.user_details());
    
  }

  ngOnInit() {
   
    // this.username = 
  }


}
