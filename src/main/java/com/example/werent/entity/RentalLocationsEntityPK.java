package com.example.werent.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;

public class RentalLocationsEntityPK implements Serializable {
    @Column(name = "rental-id", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rentalId;
    @Column(name = "location-id", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int locationId;

    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }

    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RentalLocationsEntityPK that = (RentalLocationsEntityPK) o;

        if (rentalId != that.rentalId) return false;
        if (locationId != that.locationId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = rentalId;
        result = 31 * result + locationId;
        return result;
    }
}
