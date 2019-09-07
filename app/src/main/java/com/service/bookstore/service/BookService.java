package com.service.bookstore.service;

import com.service.bookstore.model.Book;
import com.service.bookstore.repository.BookRepository;
import com.service.bookstore.util.NumberGenerator;
import com.service.bookstore.util.TextUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    private final TextUtil textUtil;
    private final NumberGenerator isbnGenerator;
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository, TextUtil textUtil, NumberGenerator isbnGenerator) {
        this.bookRepository = bookRepository;
        this.textUtil = textUtil;
        this.isbnGenerator = isbnGenerator;
    }

    public void save(Book book) {
        book.setTitle(textUtil.sanitize(book.getTitle()));
        book.setIsbn(isbnGenerator.generateNumber());
        bookRepository.save(book);
    }

    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    public Book findById(Long id) {
        return bookRepository.findById(id).get();
    }

    public void deleteById(Long id) {
        bookRepository.deleteById(id);
    }

    public int getCount() {
        return bookRepository.findAll().size();
    }
}