import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { PostsCreateServiceService } from '../posts-create-service.service';
import { FormBuilder, Validators, FormGroup } from '../../../../../node_modules/@angular/forms';
import { CookieService } from '../../../../../node_modules/ngx-cookie-service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
 pid:string;
  show : boolean;
@Input() ps = this.ps;
  comments :string ;
  commForm:FormGroup;
  constructor(private _activatedRoute :ActivatedRoute,private _postC :PostsCreateServiceService,private _fb :FormBuilder,private _http:HttpClient,private _cookieService: CookieService,private _router :Router) { }

  ngOnInit() {
    console.log(this.pid);
    this._activatedRoute.params.subscribe((data)=>{
      console.log(data.uid);
    this.commForm = this._fb.group({
      pid:['1'],
      comments:[''],
      uid:[data.uid]
      
       
    });
  });
  }


  Comment(){
    this.show = !this.show;
    // console.log(this.ps);
     

    }
  commPost(pid){
    pid=this.pid;
    console.log(pid);
    
    console.log(this.commForm.value);
    this._http.post('http://localhost:3000/view_Comments',this.commForm.value).subscribe((resp:any)=>{
      // this._cookieService.set('token',data.isLoggedin);
        console.log(resp);
        console.log(this.comments);
  });


  }}