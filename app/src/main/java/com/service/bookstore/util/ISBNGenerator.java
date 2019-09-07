package com.service.bookstore.util;

import org.springframework.stereotype.Component;

import java.util.Random;

@Component
public class ISBNGenerator implements NumberGenerator {
    @Override
    public String generateNumber() {
        return "ISBN-" + Math.abs(new Random().nextInt());
    }
}
