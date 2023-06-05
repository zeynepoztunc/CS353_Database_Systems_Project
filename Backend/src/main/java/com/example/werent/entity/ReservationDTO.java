package com.example.werent.entity;

import java.sql.Date;

public class ReservationDTO {
    private Integer reservationId;

    private Integer customerId;

    private Integer rentalId;

    private Date reservationStartDate;
    private Date reservationEndDate;
    private Integer stayOfDuration;
    private Integer price;
    private boolean isPaidFor;
    private Integer numberOfGuests;

    private String rentalName;

    public ReservationDTO(Integer reservationId, int customerId, int rentalId, java.sql.Date reservationStartDate, java.sql.Date reservationEndDate, int stayOfDuration, int price, boolean isPaidFor, int numberOfGuests, String rentalName)
    {
        this.reservationId = reservationId;
        this.customerId = customerId;
        this.rentalId = rentalId;
        this.reservationStartDate = reservationStartDate;
        this.reservationEndDate = reservationEndDate;
        this.stayOfDuration = stayOfDuration;
        this.price = price;
        this.isPaidFor = isPaidFor;
        this.numberOfGuests = numberOfGuests;
        this.rentalName = rentalName;
    }

    public Integer getReservationId() {
        return reservationId;
    }

    public void setReservationId(int reservationId) {
        this.reservationId = reservationId;
    }

    public int getCustomerId()
    {
        return customerId;
    }
    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }


    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }

    public Date getReservationStartDate() {
        return reservationStartDate;
    }

    public void setReservationStartDate(Date reservationStartDate) {
        this.reservationStartDate = reservationStartDate;
    }

    public Date getReservationEndDate() {
        return reservationEndDate;
    }

    public void setReservationEndDate(Date reservationEndDate) {
        this.reservationEndDate = reservationEndDate;
    }

    public int getStayOfDuration() {
        return stayOfDuration;
    }

    public void setStayOfDuration(int stayOfDuration) {
        this.stayOfDuration = stayOfDuration;
    }

    public boolean isPaidFor() {
        return isPaidFor;
    }

    public void setPaidFor(boolean paidFor) {
        isPaidFor = paidFor;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public int getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(int numberOfGuests) {
        this.numberOfGuests = numberOfGuests;

    }

    public String getRentalName() {
        return rentalName;
    }

    public void setRentalName(String rentalName) {
        this.rentalName = rentalName;
    }
}
