import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  user=""
  password=""
  constructor(private route:Router){}
  readLogin=()=>
  {
    let data4:any={"user":this.user,"password":this.password}
  console.log(data4)
  if(this.user=="admin" && this.password=="12345")
  {
    this.route.navigate(["/entry"])


  }
  else
  {
    alert("invalid login")
  }
  }

}
