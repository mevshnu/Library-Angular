import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user=""
  password=""
  constructor(private route:Router){}
  readLogin=()=>
  {
    let data4:any={"user":this.user,"password":this.password}
  console.log(data4)
  if(this.user=="user" && this.password=="12345")
  {
    this.route.navigate(["/view"])
  }
  else
  {
alert("invalid login")
  }
  }

}
