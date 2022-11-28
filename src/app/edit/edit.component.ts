import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
title=""
readEdit=()=>
{
  let data2:any={"title":this.title}
  console.log(data2)
}
}
