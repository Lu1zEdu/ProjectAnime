package br.com.Api.WebApp.Dao;

import br.com.Api.WebApp.Models.ScoreAnime;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ScoreAnimeDao {
    private Connection conexao;

    public ScoreAnimeDao() {
        this.conexao = ConnectionFactory.obterConexao();
    }

    public void inserir(ScoreAnime scoreAnime) {
        String sql = "INSERT INTO SCORE_ANIME (ID_ANIME, ID_USUARIO, SCORE_ANIME) VALUES (?, ?, ?)";
        try (PreparedStatement comandoSql = conexao.prepareStatement(sql)) {
            comandoSql.setInt(1, scoreAnime.getId_Anime());
            comandoSql.setInt(2, scoreAnime.getId_Usuario());
            comandoSql.setFloat(3, scoreAnime.getScoreAnime());
            comandoSql.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Error inserting score: " + e.getMessage(), e);
        }
    }

    public void atualizar(ScoreAnime scoreAnime) {
        String sql = "UPDATE SCORE_ANIME SET SCORE_ANIME = ? WHERE ID_ANIME = ? AND ID_USUARIO = ?";
        try (PreparedStatement comandoSql = conexao.prepareStatement(sql)) {
            comandoSql.setFloat(1, scoreAnime.getScoreAnime());
            comandoSql.setInt(2, scoreAnime.getId_Anime());
            comandoSql.setInt(3, scoreAnime.getId_Usuario());
            comandoSql.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Error updating score: " + e.getMessage(), e);
        }
    }
}
