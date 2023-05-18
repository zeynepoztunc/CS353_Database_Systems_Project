package com.example.werent.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Reports", schema = "public", catalog = "oyfcmypj")
@IdClass(ReportsEntityPK.class)
public class ReportsEntity {
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

    @Basic
    @Column(name = "report-date", nullable = false)
    private Date reportDate;

    public Date getReportDate() {
        return reportDate;
    }

    public void setReportDate(Date reportDate) {
        this.reportDate = reportDate;
    }

    @Basic
    @Column(name = "description", nullable = false, length = -1)
    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "is-confirmed", nullable = true)
    private Boolean isConfirmed;

    public Boolean getConfirmed() {
        return isConfirmed;
    }

    public void setConfirmed(Boolean confirmed) {
        isConfirmed = confirmed;
    }

    @Basic
    @Column(name = "evaluated", nullable = true)
    private Boolean evaluated;

    public Boolean getEvaluated() {
        return evaluated;
    }

    public void setEvaluated(Boolean evaluated) {
        this.evaluated = evaluated;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReportsEntity that = (ReportsEntity) o;

        if (userId != that.userId) return false;
        if (rentalId != that.rentalId) return false;
        if (reportDate != null ? !reportDate.equals(that.reportDate) : that.reportDate != null) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;
        if (isConfirmed != null ? !isConfirmed.equals(that.isConfirmed) : that.isConfirmed != null) return false;
        if (evaluated != null ? !evaluated.equals(that.evaluated) : that.evaluated != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + rentalId;
        result = 31 * result + (reportDate != null ? reportDate.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (isConfirmed != null ? isConfirmed.hashCode() : 0);
        result = 31 * result + (evaluated != null ? evaluated.hashCode() : 0);
        return result;
    }
}
