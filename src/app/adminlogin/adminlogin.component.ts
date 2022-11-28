import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  user=""
  password=""
  readLogin=()=>
  {
    let data4:any={"user":this.user,"password":this.password}
  console.log(data4)
  }

}
