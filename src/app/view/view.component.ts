import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
books:any =[
  {
    "title":"It Starts With Us",
    "image":"https://m.media-amazon.com/images/I/51W-r3VQlAL._SX320_BO1,204,203,200_.jpg",
    "author": "Colleen Hoover",
    "publisher":"Simon & Schuster",
    "language":"English",
    "price":200
  },
  {
    "title":"It Starts With Us",
    "image":"https://m.media-amazon.com/images/I/51W-r3VQlAL._SX320_BO1,204,203,200_.jpg",
    "author": "Colleen Hoover",
    "publisher":"Simon & Schuster",
    "language":"English",
    "price":200
  }
]
}
