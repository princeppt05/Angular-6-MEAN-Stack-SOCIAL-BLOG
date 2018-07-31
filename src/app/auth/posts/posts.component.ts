import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'; 
import{HttpClient} from '@angular/common/http';
import { CookieService } from '../../../../node_modules/ngx-cookie-service';
import { Router } from '../../../../node_modules/@angular/router';
import { PostsCreateServiceService } from './posts-create-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postForm : FormGroup;
  constructor(private _activatedRoute :ActivatedRoute,private _postC :PostsCreateServiceService,private _fb :FormBuilder,private _http:HttpClient,private _cookieService: CookieService,private _router :Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((data)=>{
      console.log(data);
    
    this.postForm = this._fb.group({
     uid:[data.uid],
     post_title:['',[Validators.required,Validators.minLength(5)]],
     post_des:['',[Validators.required,Validators.minLength(5)]]
     
      
   });
  });
   
  }
  post_create()
  {
    
     console.log(this.postForm.value);
    // console.log(data);
    this._postC.post_create(this.postForm.value);
    alert("Post Created");
    this._router.navigate(['/home']);
  //   alert("post created!!");
  //   this._http.post('http://localhost:3000/post_create',this.postForm.value).subscribe((data:any)=>{
  //     // this._cookieService.set('token',data.isLoggedin);
  //       console.log(data);
    
  // });
  
  }
}
