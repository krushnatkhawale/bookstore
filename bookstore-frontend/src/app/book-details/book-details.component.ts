import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {

 private book =  {
            "id": 1,
            "title": "this is book 1",
            "description": "this is book 1",
            "unitCost": 345.0,
            "isbn": "ISBN-1",
            "publicationDate": "2015-12-11",
            "nbOfPages": 2323,
            "imageUrl": "https://www.gstatic.com/webp/gallery3/1.png",
            "language": null
    }

  constructor() { }

  ngOnInit() {
  }

}
