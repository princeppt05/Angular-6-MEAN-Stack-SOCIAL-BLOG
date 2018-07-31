import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
post_view :any =[];
show: boolean = true;
post_comment:string = "abc";
  constructor(private _http: HttpClient, private _router: Router) { }
  
  // call_post(){
  //   console.log(  this._viewService.viewPost());
  // }
 
  ngOnInit() {
    
      this._http.get('http://localhost:3000/view_Posts').subscribe((data: any) => {
         
        console.log(data);
        console.log(data.uid+"user id");
         this.post_view = data;
         console.log(this.post_view); 
         console.log(this.post_comment);

    });
  }

  

}
