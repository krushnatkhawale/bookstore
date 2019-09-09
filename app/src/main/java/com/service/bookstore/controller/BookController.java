package com.service.bookstore.controller;

import com.service.bookstore.model.Book;
import com.service.bookstore.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {

    final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books/{id}")
    public Book getBook(@PathVariable Long id) {
        System.out.println("getBook: " + id);
        return bookService.findById(id);
    }

    @GetMapping("/books")
    public List<Book> getBooks() {
        System.out.println("getBooks");
        return bookService.findAll();
    }

    @PostMapping("/books")
    public void saveBook(@RequestBody Book book) {
        System.out.println("saveBook");
        bookService.save(book);
    }

    @DeleteMapping("/books/{id}")
    public void deleteBook(@PathVariable Long id) {
        System.out.println("deleteBook: " + id);
        bookService.deleteById(id);
    }

    @GetMapping("/booksCount")
    public int getBookCount() {
        System.out.println("getBookCount");
        return bookService.getCount();
    }
}