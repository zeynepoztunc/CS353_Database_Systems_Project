package com.example.werent.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Posts", schema = "public", catalog = "oyfcmypj")
public class PostsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "rental-id", nullable = false)
    private int rentalId;

    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }

    @Basic
    @Column(name = "user-id", nullable = false)
    private int userId;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "added-date", nullable = false)
    private Date addedDate;

    public Date getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(Date addedDate) {
        this.addedDate = addedDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PostsEntity that = (PostsEntity) o;

        if (rentalId != that.rentalId) return false;
        if (userId != that.userId) return false;
        if (addedDate != null ? !addedDate.equals(that.addedDate) : that.addedDate != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = rentalId;
        result = 31 * result + userId;
        result = 31 * result + (addedDate != null ? addedDate.hashCode() : 0);
        return result;
    }
}
