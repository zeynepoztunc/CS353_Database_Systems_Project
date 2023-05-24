package com.example.werent.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Reservation", schema = "public", catalog = "oyfcmypj")
public class ReservationEntity {
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

    @Basic
    @Column(name = "reservation-start-date", nullable = false)
    private Date reservationStartDate;

    public Date getReservationStartDate() {
        return reservationStartDate;
    }

    public void setReservationStartDate(Date reservationStartDate) {
        this.reservationStartDate = reservationStartDate;
    }

    @Basic
    @Column(name = "reservation-end-date", nullable = false)
    private Date reservationEndDate;

    public Date getReservationEndDate() {
        return reservationEndDate;
    }

    public void setReservationEndDate(Date reservationEndDate) {
        this.reservationEndDate = reservationEndDate;
    }

    @Basic
    @Column(name = "stay-of-duration", nullable = false)
    private int stayOfDuration;

    public int getStayOfDuration() {
        return stayOfDuration;
    }

    public void setStayOfDuration(int stayOfDuration) {
        this.stayOfDuration = stayOfDuration;
    }

    @Basic
    @Column(name = "is-paid-for", nullable = false)
    private boolean isPaidFor;

    public boolean isPaidFor() {
        return isPaidFor;
    }

    public void setPaidFor(boolean paidFor) {
        isPaidFor = paidFor;
    }

    @Basic
    @Column(name = "is-approved-by-host", nullable = true)
    private Boolean isApprovedByHost;

    public Boolean getApprovedByHost() {
        return isApprovedByHost;
    }

    public void setApprovedByHost(Boolean approvedByHost) {
        isApprovedByHost = approvedByHost;
    }

    @Basic
    @Column(name = "number-of-guests", nullable = false)
    private int numberOfGuests;

    public int getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(int numberOfGuests) {
        this.numberOfGuests = numberOfGuests;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReservationEntity that = (ReservationEntity) o;

        if (reservationId != that.reservationId) return false;
        if (stayOfDuration != that.stayOfDuration) return false;
        if (isPaidFor != that.isPaidFor) return false;
        if (numberOfGuests != that.numberOfGuests) return false;
        if (reservationStartDate != null ? !reservationStartDate.equals(that.reservationStartDate) : that.reservationStartDate != null)
            return false;
        if (reservationEndDate != null ? !reservationEndDate.equals(that.reservationEndDate) : that.reservationEndDate != null)
            return false;
        if (isApprovedByHost != null ? !isApprovedByHost.equals(that.isApprovedByHost) : that.isApprovedByHost != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = reservationId;
        result = 31 * result + (reservationStartDate != null ? reservationStartDate.hashCode() : 0);
        result = 31 * result + (reservationEndDate != null ? reservationEndDate.hashCode() : 0);
        result = 31 * result + stayOfDuration;
        result = 31 * result + (isPaidFor ? 1 : 0);
        result = 31 * result + (isApprovedByHost != null ? isApprovedByHost.hashCode() : 0);
        result = 31 * result + numberOfGuests;
        return result;
    }
}
