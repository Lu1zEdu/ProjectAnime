package br.com.Api.WebApp.Dao;

import br.com.Api.WebApp.Models.Anime;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AnimeDao {
    private Connection conexao;

    public AnimeDao() {
        this.conexao = ConnectionFactory.obterConexao();
    }

    public void inserir(Anime anime) {
        String sql = "INSERT INTO ANIME (ID_ANIME, TITULO_ANIME, RANK_ANIME, SCORE_ANIME, STATUS_ANIME) VALUES (?, ?, ?, ?, ?)";
        try (PreparedStatement comandoSql = conexao.prepareStatement(sql)) {
            comandoSql.setInt(1, anime.getId());
            comandoSql.setString(2, anime.getTitulo());
            comandoSql.setDouble(3, anime.getRank());
            comandoSql.setFloat(4, anime.getScore());
            comandoSql.setString(5, String.valueOf(anime.getStatus()));
            comandoSql.executeUpdate();
        } catch (SQLException e) {
            // Consider logging the exception
            throw new RuntimeException("Error inserting anime: " + e.getMessage(), e);
        }
    }

    public void alterar(Anime anime) {
        String sql = "UPDATE ANIME SET TITULO_ANIME = ?, RANK_ANIME = ?, SCORE_ANIME = ?, STATUS_ANIME = ? WHERE ID_ANIME = ?";
        try (PreparedStatement comandoSql = conexao.prepareStatement(sql)) {
            comandoSql.setString(1, anime.getTitulo());
            comandoSql.setDouble(2, anime.getRank());
            comandoSql.setFloat(3, anime.getScore());
            comandoSql.setString(4, String.valueOf(anime.getStatus()));
            comandoSql.setInt(5, anime.getId());
            comandoSql.executeUpdate();
        } catch (SQLException e) {
            // Consider logging the exception
            throw new RuntimeException("Error updating anime: " + e.getMessage(), e);
        }
    }
}
