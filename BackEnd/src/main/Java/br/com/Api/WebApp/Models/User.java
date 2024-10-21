package br.com.Api.WebApp.Models;

import br.com.Api.WebApp.Enum.StatusUserEnum;

import java.util.Date;

public class User {
    private int Id;
    private String NickName;
    private String Email;
    private String Password;
    private Date DtaNasc;
    private StatusUserEnum statusUser;

    public User(String nickName, String email, String password, Date dtaNasc, StatusUserEnum statusUser) {
        NickName = nickName;
        Email = email;
        Password = password;
        DtaNasc = dtaNasc;
        this.statusUser = statusUser;
    }

    public StatusUserEnum getStatusUser() {
        return statusUser;
    }

    public void setStatusUser(StatusUserEnum statusUser) {
        this.statusUser = statusUser;
    }

    public String getNickName() {
        return NickName;
    }

    public void setNickName(String nickName) {
        NickName = nickName;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public Date getDtaNasc() {
        return DtaNasc;
    }

    public void setDtaNasc(Date dtaNasc) {
        DtaNasc = dtaNasc;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }
}
