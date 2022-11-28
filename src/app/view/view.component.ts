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
    "title":"The Power of A Positive Attitude",
    "image":"https://m.media-amazon.com/images/I/416Z99JF6AS._SX460_BO1,204,203,200_.jpg",
    "author": "Roger Fritz",
    "publisher":"Fingerprint",
    "language":"English",
    "price":200
  },
  {
    "title":"A Game of Thrones",
    "image":"https://m.media-amazon.com/images/I/51BtI1vfkIL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    "author": "George R.R. Martin",
    "publisher":"Fingerprint",
    "language":"English",
    "price":200
  },
  {
    "title":"Sherlock Holmes",
    "image":"https://m.media-amazon.com/images/I/41OiDvq9pDS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
    "author": " Fingerprint",
    "publisher":"Arthur Ignatius",
    "language":"English",
    "price":200
  },
  {
    "title":"Life's Amazing Secrets",
    "image":"https://m.media-amazon.com/images/I/51PJyvcfPGL._SX321_BO1,204,203,200_.jpg",
    "author": "Life's Amazing Secrets",
    "publisher":"Gaur Gopal Das",
    "language":"English",
    "price":200
  }
]
}
