import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../service/model/Book'
import { BookControllerService } from '../service/api/bookController.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {

  book: Book

  constructor(private router: Router, private route: ActivatedRoute, private bookService: BookControllerService) { }

  ngOnInit() {
     var idToFetch = this.route.snapshot.params['bookId']
     this.bookService.getBookUsingGET(idToFetch).subscribe( book => this.book = book );
  }

  delete(){
     console.log('Deleting: ' + this.book.id)
     console.log('Deleting: ' + this.book.id)
     console.log('Deleting: ' + this.book.id)
     console.log('Deleting: ' + this.book.id)
     console.log('Deleting: ' + this.book.id)
     console.log('Deleting: ' + this.book.id)
     console.log('Deleting: ' + this.book.id)
     console.log('Deleting: ' + this.book.id)
     console.log('Deleting: ' + this.book.id)
     this.bookService.deleteBookUsingDELETE(this.book.id);
     this.router.navigate(['/book-list']);
  }
}
