package com.example.werent.entity;

public class UserDTO {
    private int userId;
    private String name;
    private String surname;
    private String password;
    public int getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getPassword() {
        return password;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        // Implementation of equals method
        return false;
    }

    @Override
    public int hashCode() {
        // Implementation of hashCode method
        return 0;
    }

    @Override
    public String toString() {
        // Implementation of toString method
        return null;
    }
}
