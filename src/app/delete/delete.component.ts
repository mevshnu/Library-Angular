import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
title=""
readDelete=()=>
{
let data1:any={"title":this.title}
console.log(data1)
}
}
