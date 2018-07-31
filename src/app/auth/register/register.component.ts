import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'; 
import { RegisterServiceService } from './register-service.service';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm : FormGroup;
  constructor(private _fb :FormBuilder,private _regService:RegisterServiceService,private _router :Router) { }

  ngOnInit() {
    this.userForm = this._fb.group({
       username:['',[Validators.required,Validators.minLength(5)]],
       firstname:['',[Validators.required,Validators.minLength(5)]],
       lastname:['',[Validators.required]],
       email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
       password:['',[Validators.required,Validators.minLength(5)]],
       
    });
  }

  submit(){
     console.log(this.userForm.value);
    this._regService.submit(this.userForm.value);
    alert("registeration Complete");
    this._router.navigate(['/login']);
  }

}
