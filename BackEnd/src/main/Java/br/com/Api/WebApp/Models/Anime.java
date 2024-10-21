package br.com.Api.WebApp.Models;

import br.com.Api.WebApp.Enum.StatusEnum;

public class Anime {
    private String Titulo;
    private int Id;
    private int Rank;
    private float Score;
    private StatusEnum status;

    public Anime(String titulo, int id, int rank, float score, StatusEnum status) {
        Titulo = titulo;
        Id = id;
        Rank = rank;
        Score = score;
        this.status = status;
    }

    public String getTitulo() {
        return Titulo;
    }

    public void setTitulo(String titulo) {
        Titulo = titulo;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public int getRank() {
        return Rank;
    }

    public void setRank(int rank) {
        Rank = rank;
    }

    public float getScore() {
        return Score;
    }

    public void setScore(float score) {
        Score = score;
    }

    public StatusEnum getStatus() {
        return status;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }
}
