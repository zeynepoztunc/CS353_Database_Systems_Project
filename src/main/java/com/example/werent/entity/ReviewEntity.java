package com.example.werent.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Review", schema = "public", catalog = "oyfcmypj")
public class ReviewEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "review-id", nullable = false)
    private int reviewId;

    public int getReviewId() {
        return reviewId;
    }

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }

    @Basic
    @Column(name = "review", nullable = true, length = -1)
    private String review;

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    @Basic
    @Column(name = "date", nullable = false)
    private Date date;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Basic
    @Column(name = "cleanliness-rating", nullable = false)
    private int cleanlinessRating;

    public int getCleanlinessRating() {
        return cleanlinessRating;
    }

    public void setCleanlinessRating(int cleanlinessRating) {
        this.cleanlinessRating = cleanlinessRating;
    }

    @Basic
    @Column(name = "check-in-rating", nullable = false)
    private int checkInRating;

    public int getCheckInRating() {
        return checkInRating;
    }

    public void setCheckInRating(int checkInRating) {
        this.checkInRating = checkInRating;
    }

    @Basic
    @Column(name = "communication-rating", nullable = false)
    private int communicationRating;

    public int getCommunicationRating() {
        return communicationRating;
    }

    public void setCommunicationRating(int communicationRating) {
        this.communicationRating = communicationRating;
    }

    @Basic
    @Column(name = "accuracy-rating", nullable = false)
    private int accuracyRating;

    public int getAccuracyRating() {
        return accuracyRating;
    }

    public void setAccuracyRating(int accuracyRating) {
        this.accuracyRating = accuracyRating;
    }

    @Basic
    @Column(name = "safety-rating", nullable = false)
    private int safetyRating;

    public int getSafetyRating() {
        return safetyRating;
    }

    public void setSafetyRating(int safetyRating) {
        this.safetyRating = safetyRating;
    }

    @Basic
    @Column(name = "location-rating", nullable = false)
    private int locationRating;

    public int getLocationRating() {
        return locationRating;
    }

    public void setLocationRating(int locationRating) {
        this.locationRating = locationRating;
    }

    @Basic
    @Column(name = "value-rating", nullable = false)
    private int valueRating;

    public int getValueRating() {
        return valueRating;
    }

    public void setValueRating(int valueRating) {
        this.valueRating = valueRating;
    }

    @Basic
    @Column(name = "general-rating", nullable = false)
    private int generalRating;

    public int getGeneralRating() {
        return generalRating;
    }

    public void setGeneralRating(int generalRating) {
        this.generalRating = generalRating;
    }

    @Basic
    @Column(name = "is-anonymous", nullable = false)
    private boolean isAnonymous;

    public boolean isAnonymous() {
        return isAnonymous;
    }

    public void setAnonymous(boolean anonymous) {
        isAnonymous = anonymous;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReviewEntity that = (ReviewEntity) o;

        if (reviewId != that.reviewId) return false;
        if (cleanlinessRating != that.cleanlinessRating) return false;
        if (checkInRating != that.checkInRating) return false;
        if (communicationRating != that.communicationRating) return false;
        if (accuracyRating != that.accuracyRating) return false;
        if (safetyRating != that.safetyRating) return false;
        if (locationRating != that.locationRating) return false;
        if (valueRating != that.valueRating) return false;
        if (generalRating != that.generalRating) return false;
        if (isAnonymous != that.isAnonymous) return false;
        if (review != null ? !review.equals(that.review) : that.review != null) return false;
        if (date != null ? !date.equals(that.date) : that.date != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = reviewId;
        result = 31 * result + (review != null ? review.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + cleanlinessRating;
        result = 31 * result + checkInRating;
        result = 31 * result + communicationRating;
        result = 31 * result + accuracyRating;
        result = 31 * result + safetyRating;
        result = 31 * result + locationRating;
        result = 31 * result + valueRating;
        result = 31 * result + generalRating;
        result = 31 * result + (isAnonymous ? 1 : 0);
        return result;
    }
}
