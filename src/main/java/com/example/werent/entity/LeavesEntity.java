package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Leaves", schema = "public", catalog = "oyfcmypj")
@IdClass(LeavesEntityPK.class)
public class LeavesEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "reservation-id", nullable = false)
    private int reservationId;

    public int getReservationId() {
        return reservationId;
    }

    public void setReservationId(int reservationId) {
        this.reservationId = reservationId;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user-id1", nullable = false)
    private int userId1;

    public int getUserId1() {
        return userId1;
    }

    public void setUserId1(int userId1) {
        this.userId1 = userId1;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user-id2", nullable = false)
    private int userId2;

    public int getUserId2() {
        return userId2;
    }

    public void setUserId2(int userId2) {
        this.userId2 = userId2;
    }

    @Basic
    @Column(name = "review-id", nullable = false)
    private int reviewId;

    public int getReviewId() {
        return reviewId;
    }

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LeavesEntity that = (LeavesEntity) o;

        if (reservationId != that.reservationId) return false;
        if (userId1 != that.userId1) return false;
        if (userId2 != that.userId2) return false;
        if (reviewId != that.reviewId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = reservationId;
        result = 31 * result + userId1;
        result = 31 * result + userId2;
        result = 31 * result + reviewId;
        return result;
    }
}
