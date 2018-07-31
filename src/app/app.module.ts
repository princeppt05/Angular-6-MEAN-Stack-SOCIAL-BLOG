import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NavigationComponent } from './auth/navigation/navigation.component';
import{RouterModule} from '@angular/router';
import { HomeComponent } from './auth/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { LoginServiceService } from './auth/login/login-service.service';
import { PostsComponent } from './auth/posts/posts.component';
import { ViewPostsComponent } from './auth/posts/view-posts/view-posts.component';
import { AuthinterceptorService } from './auth/authinterceptor.service';
import { AuthGuard } from './auth/auth.guard';
import { UserpostsComponent } from './auth/posts/userposts/userposts.component';
import { CommentsComponent } from './auth/posts/comments/comments.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    HomeComponent,
    PostsComponent,
    ViewPostsComponent,
    UserpostsComponent,
    CommentsComponent,
 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path:"home",component:HomeComponent},
      {path:"login",component:LoginComponent},
      {path:"registeration",component:RegisterComponent},
      {path:"postsCreate/:uid",component:PostsComponent,canActivate:[AuthGuard]},
      {path:"posts/:uid",component:UserpostsComponent,canActivate:[AuthGuard]},
      {path:"view_posts/:uid/:pid",component:ViewPostsComponent,canActivate:[AuthGuard]},
      {path:"",redirectTo:"home",pathMatch:'full'},
      {path:"**",redirectTo:"home"},])
  ],
  providers: [LoginServiceService,AuthGuard,CookieService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthinterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
