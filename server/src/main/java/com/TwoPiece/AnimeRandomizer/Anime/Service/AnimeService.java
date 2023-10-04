package com.TwoPiece.AnimeRandomizer.Anime.Service;

import com.TwoPiece.AnimeRandomizer.Anime.Models.Anime;
import com.TwoPiece.AnimeRandomizer.Anime.Repository.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnimeService {
    private final AnimeRepository repository;
    @Autowired
    public AnimeService(AnimeRepository repository) {
        this.repository = repository;
    }

    public Optional<Anime> getAnimeById(int id) {
        return repository.findAnimeByMal_Id(id);
    }

    public void addAnime(Anime anime) {
        boolean animeById = repository.findAnimeByMal_Id(anime.getMal_Id()).isPresent();
        if(animeById) {
            throw new IllegalStateException("Anime is already in the database");
        }
        repository.save(anime);
    }
}
