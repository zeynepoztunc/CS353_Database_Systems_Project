package com.example.werent.entity;

import java.sql.Date;

public class ReviewDTO {
    private int reviewId;
    private String review;
    private Date date;
    private int cleanlinessRating;
    private int checkInRating;
    private int communicationRating;
    private int accuracyRating;
    private int safetyRating;
    private int locationRating;
    private int valueRating;
    private int generalRating;
    private boolean isAnonymous;
    private String name;    //For space simplicity, mostly not used!

    public int getReviewId() {
        return reviewId;
    }

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getCleanlinessRating() {
        return cleanlinessRating;
    }

    public void setCleanlinessRating(int cleanlinessRating) {
        this.cleanlinessRating = cleanlinessRating;
    }

    public int getCheckInRating() {
        return checkInRating;
    }

    public void setCheckInRating(int checkInRating) {
        this.checkInRating = checkInRating;
    }

    public int getCommunicationRating() {
        return communicationRating;
    }

    public void setCommunicationRating(int communicationRating) {
        this.communicationRating = communicationRating;
    }

    public int getAccuracyRating() {
        return accuracyRating;
    }

    public void setAccuracyRating(int accuracyRating) {
        this.accuracyRating = accuracyRating;
    }

    public int getSafetyRating() {
        return safetyRating;
    }

    public void setSafetyRating(int safetyRating) {
        this.safetyRating = safetyRating;
    }

    public int getLocationRating() {
        return locationRating;
    }

    public void setLocationRating(int locationRating) {
        this.locationRating = locationRating;
    }

    public int getValueRating() {
        return valueRating;
    }

    public void setValueRating(int valueRating) {
        this.valueRating = valueRating;
    }

    public int getGeneralRating() {
        return generalRating;
    }

    public void setGeneralRating(int generalRating) {
        this.generalRating = generalRating;
    }

    public boolean isAnonymous() {
        return isAnonymous;
    }

    public void setAnonymous(boolean anonymous) {
        isAnonymous = anonymous;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
