package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Owns", schema = "public", catalog = "oyfcmypj")
@IdClass(OwnsEntityPK.class)
public class OwnsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user-id", nullable = false)
    private int userId;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "file-id", nullable = false)
    private int fileId;

    public int getFileId() {
        return fileId;
    }

    public void setFileId(int fileId) {
        this.fileId = fileId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OwnsEntity that = (OwnsEntity) o;

        if (userId != that.userId) return false;
        if (fileId != that.fileId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + fileId;
        return result;
    }
}
