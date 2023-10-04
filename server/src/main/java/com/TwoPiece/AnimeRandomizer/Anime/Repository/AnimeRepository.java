package com.TwoPiece.AnimeRandomizer.Anime.Repository;

import com.TwoPiece.AnimeRandomizer.Anime.Models.Anime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnimeRepository extends JpaRepository<Anime, Integer> {
    @Query("SELECT a FROM Anime a WHERE a.mal_Id = ?1")
    Optional<Anime> findAnimeByMal_Id(int id);
}
