package com.TwoPiece.AnimeRandomizer.Anime.Models;

import jakarta.persistence.*;

@Entity
@Table
public class Anime {

    @SequenceGenerator(
            name = "anime_sequence",
            sequenceName = "anime_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "anime_sequence"
    )
    @Column
    private String name;
    @Id
    @Column(name="U_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String genres;
    @Column
    private int mal_Id;

    public Anime() {
    }


    public Anime(String name, String genres, int mal_Id) {
        this.mal_Id = mal_Id;
        this.name = name;
        this.genres = genres;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getGenres() {
        return genres;
    }
    public int getMal_Id() {
        return mal_Id;
    }

}
