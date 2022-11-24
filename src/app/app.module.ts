import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { EditComponent } from './edit/edit.component';
import { IssueComponent } from './issue/issue.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';

const MyRoute: Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"userup",
    component:UserSignupComponent
  },
  {
  path:"userin",
  component:UserLoginComponent
  },
  

 {
path:"view",
component:ViewComponent
},
{
 path:"search",
component:SearchComponent
 },
{
 path:"issue",component:IssueComponent
  },
  {
path:"edit",
component:EditComponent
 },
 {
path:"delete",
component:DeleteComponent
 },
{
path:"entry",
component:EditComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserLoginComponent,
    UserSignupComponent,
    ViewComponent,
    SearchComponent,
    DeleteComponent,
    BookEntryComponent,
    EditComponent,
    IssueComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(MyRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
