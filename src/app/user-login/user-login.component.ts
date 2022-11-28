import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user=""
  password=""
  readLogin=()=>
  {
    let data4:any={"user":this.user,"password":this.password}
  console.log(data4)
  }

}
