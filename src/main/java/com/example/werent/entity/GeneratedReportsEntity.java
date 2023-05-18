package com.example.werent.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "GeneratedReports", schema = "public", catalog = "oyfcmypj")
@IdClass(GeneratedReportsEntityPK.class)
public class GeneratedReportsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "report-id", nullable = false)
    private int reportId;

    public int getReportId() {
        return reportId;
    }

    public void setReportId(int reportId) {
        this.reportId = reportId;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "date", nullable = false)
    private Timestamp date;

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    @Basic
    @Column(name = "user-cnt", nullable = false)
    private int userCnt;

    public int getUserCnt() {
        return userCnt;
    }

    public void setUserCnt(int userCnt) {
        this.userCnt = userCnt;
    }

    @Basic
    @Column(name = "host-cnt", nullable = false)
    private int hostCnt;

    public int getHostCnt() {
        return hostCnt;
    }

    public void setHostCnt(int hostCnt) {
        this.hostCnt = hostCnt;
    }

    @Basic
    @Column(name = "postings-cnt", nullable = false)
    private int postingsCnt;

    public int getPostingsCnt() {
        return postingsCnt;
    }

    public void setPostingsCnt(int postingsCnt) {
        this.postingsCnt = postingsCnt;
    }

    @Basic
    @Column(name = "booking-cnt", nullable = false)
    private int bookingCnt;

    public int getBookingCnt() {
        return bookingCnt;
    }

    public void setBookingCnt(int bookingCnt) {
        this.bookingCnt = bookingCnt;
    }

    @Basic
    @Column(name = "user-earthquake-victim-cnt", nullable = false)
    private int userEarthquakeVictimCnt;

    public int getUserEarthquakeVictimCnt() {
        return userEarthquakeVictimCnt;
    }

    public void setUserEarthquakeVictimCnt(int userEarthquakeVictimCnt) {
        this.userEarthquakeVictimCnt = userEarthquakeVictimCnt;
    }

    @Basic
    @Column(name = "host-earthquake-victim-cnt", nullable = false)
    private int hostEarthquakeVictimCnt;

    public int getHostEarthquakeVictimCnt() {
        return hostEarthquakeVictimCnt;
    }

    public void setHostEarthquakeVictimCnt(int hostEarthquakeVictimCnt) {
        this.hostEarthquakeVictimCnt = hostEarthquakeVictimCnt;
    }

    @Basic
    @Column(name = "superhost-cnt", nullable = false)
    private int superhostCnt;

    public int getSuperhostCnt() {
        return superhostCnt;
    }

    public void setSuperhostCnt(int superhostCnt) {
        this.superhostCnt = superhostCnt;
    }

    @Basic
    @Column(name = "user-reporting-cnt", nullable = false)
    private int userReportingCnt;

    public int getUserReportingCnt() {
        return userReportingCnt;
    }

    public void setUserReportingCnt(int userReportingCnt) {
        this.userReportingCnt = userReportingCnt;
    }

    @Basic
    @Column(name = "post-reporting-cnt", nullable = false)
    private int postReportingCnt;

    public int getPostReportingCnt() {
        return postReportingCnt;
    }

    public void setPostReportingCnt(int postReportingCnt) {
        this.postReportingCnt = postReportingCnt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        GeneratedReportsEntity that = (GeneratedReportsEntity) o;

        if (reportId != that.reportId) return false;
        if (userCnt != that.userCnt) return false;
        if (hostCnt != that.hostCnt) return false;
        if (postingsCnt != that.postingsCnt) return false;
        if (bookingCnt != that.bookingCnt) return false;
        if (userEarthquakeVictimCnt != that.userEarthquakeVictimCnt) return false;
        if (hostEarthquakeVictimCnt != that.hostEarthquakeVictimCnt) return false;
        if (superhostCnt != that.superhostCnt) return false;
        if (userReportingCnt != that.userReportingCnt) return false;
        if (postReportingCnt != that.postReportingCnt) return false;
        if (date != null ? !date.equals(that.date) : that.date != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = reportId;
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + userCnt;
        result = 31 * result + hostCnt;
        result = 31 * result + postingsCnt;
        result = 31 * result + bookingCnt;
        result = 31 * result + userEarthquakeVictimCnt;
        result = 31 * result + hostEarthquakeVictimCnt;
        result = 31 * result + superhostCnt;
        result = 31 * result + userReportingCnt;
        result = 31 * result + postReportingCnt;
        return result;
    }
}
