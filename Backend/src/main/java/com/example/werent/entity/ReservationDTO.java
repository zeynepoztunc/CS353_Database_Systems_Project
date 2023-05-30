package com.example.werent.entity;

import java.sql.Date;

public class ReservationDTO {
    private int reservationId;
    private Date reservationStartDate;
    private Date reservationEndDate;
    private int stayOfDuration;
    private boolean isPaidFor;
    private boolean isApprovedByHost;
    private int numberOfGuests;

    public int getReservationId() {
        return reservationId;
    }

    public void setReservationId(int reservationId) {
        this.reservationId = reservationId;
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

    public boolean isApprovedByHost() {
        return isApprovedByHost;
    }

    public void setApprovedByHost(boolean approvedByHost) {
        isApprovedByHost = approvedByHost;
    }

    public int getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(int numberOfGuests) {
        this.numberOfGuests = numberOfGuests;
    }
}
