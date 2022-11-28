import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
user=""
readSearch=()=>
{
  let data3:any={"user":this.user}
  console.log(data3)
}

}
