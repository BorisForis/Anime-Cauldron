package com.TwoPiece.AnimeRandomizer.Anime.Controller;

import com.TwoPiece.AnimeRandomizer.Anime.Errors.NotFoundAnimeException;
import com.TwoPiece.AnimeRandomizer.Anime.Models.Anime;
import com.TwoPiece.AnimeRandomizer.Anime.Service.AnimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/anime")
public class AnimeController {
    private final AnimeService service;
    @Autowired
    public AnimeController(AnimeService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public Anime getAnime(@PathVariable int id) {
        return service.getAnimeById(id).orElseThrow(NotFoundAnimeException::new);
    }

    @PostMapping
    public String addAnime(@RequestBody Anime anime) {
        service.addAnime(anime);
        return "Done";
    }
}
