import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { create } from 'domain';
import { createProviderInstance } from '../../../../../node_modules/@angular/core/src/view/provider';


@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.css']
})
export class UserpostsComponent implements OnInit {
  uid: any;
  post_view: any;
  show: boolean;

  constructor(private _activatedRoute: ActivatedRoute, private _http: HttpClient) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((data) => {
      console.log(data.uid);
      this.uid = data.uid;
      this._http.post('http://localhost:3000/view_MyPosts', data).subscribe((data: any) => {
        console.log(data);
        this.post_view = data;

      });
    });
  }
  // createPost(title:HTMLInputElement){
  //   let post ={title:title.value};
  //   this._http.post('http://localhost:3000/create_post_dynamically',JSON.stringify(post)).subscribe((data:any)=>{
  //       console.log(data);
  //   });
    
  
  Comment(post_id:any){
    console.log(post_id);
    
    this.show=!this.show;
       
  }
  
 

}
