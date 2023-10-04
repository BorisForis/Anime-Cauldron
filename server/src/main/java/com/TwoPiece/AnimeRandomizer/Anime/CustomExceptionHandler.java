package com.TwoPiece.AnimeRandomizer.Anime;

import com.TwoPiece.AnimeRandomizer.Anime.Errors.NotFoundAnimeException;
import com.TwoPiece.AnimeRandomizer.User.Error.NotFoundUserException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(NotFoundAnimeException.class)
    public ResponseEntity<String> handleNotFoundAnimeException(NotFoundAnimeException ex) {
        // You can customize the response message here
        String errorMessage = ex.getMessage();

        // Return a ResponseEntity with a 404 status code and the error message
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }

    @ExceptionHandler(NotFoundUserException.class)
    public ResponseEntity<String> handleNotFoundUserException(NotFoundUserException ex) {
        // You can customize the response message here
        String errorMessage = ex.getMessage();

        // Return a ResponseEntity with a 404 status code and the error message
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }
}