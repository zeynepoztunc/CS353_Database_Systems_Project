package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "RentalLocations", schema = "public", catalog = "oyfcmypj")
@IdClass(RentalLocationsEntityPK.class)
public class RentalLocationsEntity {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RentalLocationsEntity that = (RentalLocationsEntity) o;

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
