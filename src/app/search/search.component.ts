import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
title=""
readSearch=()=>
{
  let data3:any={"title":this.title}
  console.log(data3)
}

}
