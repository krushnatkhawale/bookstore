import { Component, OnInit } from '@angular/core';
import { Book } from '../service/model/Book'
import { BookControllerService } from '../service/api/bookController.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  nbOfBooks: number;
  books: Book[];

  constructor(private bookService: BookControllerService) { }

  ngOnInit() {
    this.bookService.getBookCountUsingGET().subscribe( nbOfBooks => this.nbOfBooks = nbOfBooks );
    this.bookService.getBooksUsingGET().subscribe( books => this.books = books );
  }
}
