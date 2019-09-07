import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  nbOfBooks: number = 2
  books = [
     {
          "id": 1,
          "title": "this is book 1",
          "description": "this is book 1",
          "unitCost": 345.0,
          "isbn": "ISBN-1",
          "publicationDate": "2015-12-11",
          "nbOfPages": 2323,
          "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51uiOEOz01L._AC_UL115_.jpg",
          "language": null
     },
     {
          "id": 2,
          "title": "this is book 2",
          "description": "this is book 2",
          "unitCost": 345.0,
          "isbn": "ISBN-2",
          "publicationDate": "2015-12-11",
          "nbOfPages": 2323,
          "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/518djjKLsHL._AC_UL115_.jpg",
          "language": null
     }
  ]
  constructor() { }

  ngOnInit() {
  }

}
