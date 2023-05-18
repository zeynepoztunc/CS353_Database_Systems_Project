package com.example.werent.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "Complaints", schema = "public", catalog = "oyfcmypj")
@IdClass(ComplaintsEntityPK.class)
public class ComplaintsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user-id1", nullable = false)
    private int userId1;

    public int getUserId1() {
        return userId1;
    }

    public void setUserId1(int userId1) {
        this.userId1 = userId1;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user-id2", nullable = false)
    private int userId2;

    public int getUserId2() {
        return userId2;
    }

    public void setUserId2(int userId2) {
        this.userId2 = userId2;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "complaint-date", nullable = false)
    private Timestamp complaintDate;

    public Timestamp getComplaintDate() {
        return complaintDate;
    }

    public void setComplaintDate(Timestamp complaintDate) {
        this.complaintDate = complaintDate;
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

        ComplaintsEntity that = (ComplaintsEntity) o;

        if (userId1 != that.userId1) return false;
        if (userId2 != that.userId2) return false;
        if (complaintDate != null ? !complaintDate.equals(that.complaintDate) : that.complaintDate != null)
            return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;
        if (isConfirmed != null ? !isConfirmed.equals(that.isConfirmed) : that.isConfirmed != null) return false;
        if (evaluated != null ? !evaluated.equals(that.evaluated) : that.evaluated != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId1;
        result = 31 * result + userId2;
        result = 31 * result + (complaintDate != null ? complaintDate.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (isConfirmed != null ? isConfirmed.hashCode() : 0);
        result = 31 * result + (evaluated != null ? evaluated.hashCode() : 0);
        return result;
    }
}
