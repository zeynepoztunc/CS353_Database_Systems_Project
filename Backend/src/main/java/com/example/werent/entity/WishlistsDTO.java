package com.example.werent.entity;

import java.sql.Date;
public class WishlistsDTO {
    private int userId;
    private int rentalId;
    private Date date;
    private boolean exists;

    public int getUserId() {
        return userId;
    }

    public int getRentalId() {
        return rentalId;
    }

    public Date getDate() {
        return date;
    }

    public boolean isExists() {
        return exists;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setExists(boolean exists) {
        this.exists = exists;
    }

    @Override
    public boolean equals(Object o) {
        // Implementation of equals method
        return false;
    }

    @Override
    public int hashCode() {
        // Implementation of hashCode method
        return 0;
    }

    @Override
    public String toString() {
        // Implementation of toString method
        return null;
    }
}
