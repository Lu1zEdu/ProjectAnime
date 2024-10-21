package br.com.Api.WebApp.Models;

public class ScoreAnime {
    private int Id_Anime;
    private int Id_Usuario;
    private float ScoreAnime;

    public ScoreAnime(int id_Anime, int id_Usuario, float scoreAnime) {
        Id_Anime = id_Anime;
        Id_Usuario = id_Usuario;
        ScoreAnime = scoreAnime;
    }

    public int getId_Anime() {
        return Id_Anime;
    }

    public void setId_Anime(int id_Anime) {
        Id_Anime = id_Anime;
    }

    public int getId_Usuario() {
        return Id_Usuario;
    }

    public void setId_Usuario(int id_Usuario) {
        Id_Usuario = id_Usuario;
    }

    public float getScoreAnime() {
        return ScoreAnime;
    }

    public void setScoreAnime(float scoreAnime) {
        ScoreAnime = scoreAnime;
    }
}
