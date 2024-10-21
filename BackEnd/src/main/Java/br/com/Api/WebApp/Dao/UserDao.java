package br.com.Api.WebApp.Dao;

import br.com.Api.WebApp.Models.User;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UserDao {
    private Connection conexao;

    public UserDao() {
        this.conexao = ConnectionFactory.obterConexao();
    }

    public void inserir(User user) {
        String sql = "INSERT INTO USUARIO (ID_USER, NOME, EMAIL, PASSWORD_USER, DTANASC) VALUES (?, ?, ?, ?, ?)";
        try (PreparedStatement comandoSql = conexao.prepareStatement(sql)) {
            comandoSql.setInt(1, user.getId()); // Assuming there's a method getId() in User
            comandoSql.setString(2, user.getNickName()); // Using getNickName() instead of getNome()
            comandoSql.setString(3, user.getEmail()); // Assuming there's a method getEmail() in User
            comandoSql.setString(4, user.getPassword()); // Assuming there's a method getPassword() in User
            comandoSql.setDate(5, Date.valueOf(String.valueOf(user.getDtaNasc()))); // Assuming there's a method getDtaNasc() in User
            comandoSql.executeUpdate();
        } catch (SQLException e) {
            // Consider logging the exception
            throw new RuntimeException("Error inserting user: " + e.getMessage(), e);
        }
    }

    public void alterar(User user) {
        String sql = "UPDATE USUARIO SET NOME = ?, EMAIL = ?, PASSWORD_USER = ?, DTANASC = ? WHERE ID_USER = ?";
        try (PreparedStatement comandoSql = conexao.prepareStatement(sql)) {
            comandoSql.setString(1, user.getNickName());
            comandoSql.setString(2, user.getEmail());
            comandoSql.setString(3, user.getPassword());
            comandoSql.setDate(4, Date.valueOf(String.valueOf(user.getDtaNasc()))); // Corrected this line
            comandoSql.setInt(5, user.getId());
            comandoSql.executeUpdate();
        } catch (SQLException e) {
            // Consider logging the exception
            throw new RuntimeException("Error updating user: " + e.getMessage(), e);
        }
    }
}
