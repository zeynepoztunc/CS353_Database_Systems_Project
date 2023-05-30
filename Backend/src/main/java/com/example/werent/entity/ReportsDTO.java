package com.example.werent.entity;

import java.sql.Date;

public class ReportsDTO {
    private int userId;
    private int rentalId;
    private Date reportDate;
    private String description;
    private boolean isConfirmed;
    private boolean evaluated;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }

    public Date getReportDate() {
        return reportDate;
    }

    public void setReportDate(Date reportDate) {
        this.reportDate = reportDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isConfirmed() {
        return isConfirmed;
    }

    public void setConfirmed(boolean confirmed) {
        isConfirmed = confirmed;
    }

    public boolean isEvaluated() {
        return evaluated;
    }

    public void setEvaluated(boolean evaluated) {
        this.evaluated = evaluated;
    }
}
