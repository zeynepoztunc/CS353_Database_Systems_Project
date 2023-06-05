package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Admin", schema = "public", catalog = "oyfcmypj")
public class AdminEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user-id", nullable = false)
    private int userId;

    public int getUserId() {
        return userId;
    }
    private String path;

    public void setPath(String path) {
        this.path = path;
    }


    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "admin-id", nullable = false)
    private int adminId;

    public int getAdminId() {
        return adminId;
    }

    public void setAdminId(int adminId) {
        this.adminId = adminId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AdminEntity that = (AdminEntity) o;

        if (userId != that.userId) return false;
        if (adminId != that.adminId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + adminId;
        return result;
    }
}
