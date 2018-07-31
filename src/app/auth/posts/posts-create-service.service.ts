import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsCreateServiceService {

  constructor(private _http:HttpClient) { }

  post_create(post_create:any)
  {
   
    this._http.post('http://localhost:3000/post_create',post_create).subscribe((resp:any)=>{
      // this._cookieService.set('token',data.isLoggedin);
        console.log(resp);
    
  });
}
}