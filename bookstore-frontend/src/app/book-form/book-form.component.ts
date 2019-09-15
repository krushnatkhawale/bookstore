import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Book } from '../service/model/Book'
import { Observable } from 'rxjs';
import { BookControllerService } from '../service/api/bookController.service'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styles: []
})
export class BookFormComponent implements OnInit {

   private book: Book;

  constructor(private router: Router, private bookService: BookControllerService) { }

  ngOnInit() {
  }

  create(){

    this.bookService.saveBookUsingPOST(this.book).subscribe( resp => this.router.navigate(['/book-list']));
  }
}
