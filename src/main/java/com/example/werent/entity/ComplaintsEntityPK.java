package com.example.werent.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;
import java.sql.Timestamp;

public class ComplaintsEntityPK implements Serializable {
    @Column(name = "user-id1", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId1;
    @Column(name = "user-id2", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId2;
    @Column(name = "complaint-date", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Timestamp complaintDate;

    public int getUserId1() {
        return userId1;
    }

    public void setUserId1(int userId1) {
        this.userId1 = userId1;
    }

    public int getUserId2() {
        return userId2;
    }

    public void setUserId2(int userId2) {
        this.userId2 = userId2;
    }

    public Timestamp getComplaintDate() {
        return complaintDate;
    }

    public void setComplaintDate(Timestamp complaintDate) {
        this.complaintDate = complaintDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ComplaintsEntityPK that = (ComplaintsEntityPK) o;

        if (userId1 != that.userId1) return false;
        if (userId2 != that.userId2) return false;
        if (complaintDate != null ? !complaintDate.equals(that.complaintDate) : that.complaintDate != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId1;
        result = 31 * result + userId2;
        result = 31 * result + (complaintDate != null ? complaintDate.hashCode() : 0);
        return result;
    }
}
