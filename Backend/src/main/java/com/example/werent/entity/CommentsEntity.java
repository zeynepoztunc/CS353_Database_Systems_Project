package com.example.werent.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Comments", schema = "public", catalog = "oyfcmypj")
public class CommentsEntity {
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
    @Column(name = "user-id", nullable = false)
    private int userId;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "comment-description-text", nullable = false, length = -1)
    private String commentDescriptionText;

    public String getCommentDescriptionText() {
        return commentDescriptionText;
    }

    public void setCommentDescriptionText(String commentDescriptionText) {
        this.commentDescriptionText = commentDescriptionText;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CommentsEntity that = (CommentsEntity) o;

        if (reviewId != that.reviewId) return false;
        if (userId != that.userId) return false;
        if (commentDescriptionText != null ? !commentDescriptionText.equals(that.commentDescriptionText) : that.commentDescriptionText != null)
            return false;
        if (date != null ? !date.equals(that.date) : that.date != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = reviewId;
        result = 31 * result + userId;
        result = 31 * result + (commentDescriptionText != null ? commentDescriptionText.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        return result;
    }
}
