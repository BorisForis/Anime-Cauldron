package com.TwoPiece.AnimeRandomizer.User.Models;

public class EntityRequestDTO {
    private final String change;
    private final String changeTo;

    public EntityRequestDTO(String change, String changeTo) {
        this.change = change;
        this.changeTo = changeTo;
    }

    public String getChange() {
        return change;
    }

    public String getChangeTo() {
        return changeTo;
    }
}
