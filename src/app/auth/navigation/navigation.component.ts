import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login/login-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
toggleLinks : boolean =false;
  constructor(private _loginService:LoginServiceService) { }

  ngOnInit() {
    this._loginService.$authObservable.subscribe((data :any) => {
      this.toggleLinks=data; 
      // console.log(data);
    });
  }

  logout(){
    
    this._loginService.logout();
    // this._cookieService.delete('token');
    
  }
}
