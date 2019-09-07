package com.service.bookstore.util;

import org.springframework.stereotype.Component;

@Component
public class TextUtil {
    public String sanitize(String textToSanitize) {
        return textToSanitize.replaceAll("\\s+", " ");
    }
}
