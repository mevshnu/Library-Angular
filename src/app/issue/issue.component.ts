import { Component } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent {
name=""
title=""
date=""
membershipNumber=""
readIssue=()=>
{
let data2:any={"name":this.name,"title":this.title,"date":this.date,"membershipNumber":this.membershipNumber}
console.log(data2)
}

}
