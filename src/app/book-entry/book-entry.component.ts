import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  title=""
  image=""
  author=""
  publisher=""
  language=""
  price=""
  readValue=()=>
  {
  let data:any =  {
    "title":this.title,
    "image":this.image,
    "author": this.author,
    "publisher":this.publisher,
    "language":this.language,
    "price":this.price
  }
  console.log(data)
  }
}
