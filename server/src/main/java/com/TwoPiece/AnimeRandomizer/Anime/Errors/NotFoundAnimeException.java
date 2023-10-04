package com.TwoPiece.AnimeRandomizer.Anime.Errors;

public class NotFoundAnimeException extends RuntimeException {
    public NotFoundAnimeException() {
        super("Anime not found");
    }

    public NotFoundAnimeException(String message) {
        super(message);
    }
}
