import { Component } from '@angular/core';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
name=""
adharNumber=""
address=""
pinCode=""
dob=""
email=""
phone=""
userName=""
password=""
cpassword=""
readSignup=()=>
{
  let data5:any={
"name":this.name,
"adharNumber":this.adharNumber,
"address":this.address,
"pinCode":this.pinCode,
"dob":this.dob,
"email":this.email,
"phone":this.phone,
"userName":this.userName,
"password":this.password,
"cpassword":this.cpassword
  }
  console.log(data5)
}

}
