package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "FavoritedLocations", schema = "public", catalog = "oyfcmypj")
@IdClass(FavoritedLocationsEntityPK.class)
public class FavoritedLocationsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "location-id", nullable = false)
    private int locationId;

    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
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

    @Basic
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

        FavoritedLocationsEntity that = (FavoritedLocationsEntity) o;

        if (locationId != that.locationId) return false;
        if (userId != that.userId) return false;
        if (rentalId != that.rentalId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = locationId;
        result = 31 * result + userId;
        result = 31 * result + rentalId;
        return result;
    }
}
