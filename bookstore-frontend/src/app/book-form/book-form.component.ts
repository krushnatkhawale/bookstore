import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styles: []
})
export class BookFormComponent implements OnInit {

    book =  {
             "id": 11,
             "title": "this is book 1111",
             "description": "this is book 11111",
             "unitCost": 345.0,
             "isbn": "ISBN-12345",
             "publicationDate": "2015-12-11",
             "nbOfPages": 2323,
             "imageUrl": "https://www.gstatic.com/webp/gallery3/1.png",
             "language": null
     }

  constructor() { }

  ngOnInit() {
  }

}
