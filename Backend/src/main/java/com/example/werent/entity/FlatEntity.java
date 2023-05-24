package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Flat", schema = "public", catalog = "oyfcmypj")
public class FlatEntity {
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
    @Column(name = "flat-type", nullable = true, length = 20)
    private String flatType;

    public String getFlatType() {
        return flatType;
    }

    public void setFlatType(String flatType) {
        this.flatType = flatType;
    }

    @Basic
    @Column(name = "num-of-rooms", nullable = false)
    private int numOfRooms;

    public int getNumOfRooms() {
        return numOfRooms;
    }

    public void setNumOfRooms(int numOfRooms) {
        this.numOfRooms = numOfRooms;
    }

    @Basic
    @Column(name = "no-of-bathrooms", nullable = false)
    private int noOfBathrooms;

    public int getNoOfBathrooms() {
        return noOfBathrooms;
    }

    public void setNoOfBathrooms(int noOfBathrooms) {
        this.noOfBathrooms = noOfBathrooms;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        FlatEntity that = (FlatEntity) o;

        if (rentalId != that.rentalId) return false;
        if (numOfRooms != that.numOfRooms) return false;
        if (noOfBathrooms != that.noOfBathrooms) return false;
        if (flatType != null ? !flatType.equals(that.flatType) : that.flatType != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = rentalId;
        result = 31 * result + (flatType != null ? flatType.hashCode() : 0);
        result = 31 * result + numOfRooms;
        result = 31 * result + noOfBathrooms;
        return result;
    }
}
