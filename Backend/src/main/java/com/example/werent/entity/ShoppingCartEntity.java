package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ShoppingCart", schema = "public", catalog = "oyfcmypj")
@IdClass(ShoppingCartEntityPK.class)
public class ShoppingCartEntity {
    @Basic
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
    @Column(name = "rental-id", nullable = false)
    private int rentalId;

    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ShoppingCartEntity that = (ShoppingCartEntity) o;

        if (reservationId != that.reservationId) return false;
        if (userId != that.userId) return false;
        if (rentalId != that.rentalId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = reservationId;
        result = 31 * result + userId;
        result = 31 * result + rentalId;
        return result;
    }
}
