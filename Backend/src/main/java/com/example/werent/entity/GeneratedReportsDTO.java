package com.example.werent.entity;

import java.sql.Date;

public class GeneratedReportsDTO {
    private int reportId;
    private Date date;
    private int userCnt;
    private int hostCnt;
    private int postingsCnt;
    private int bookingCnt;
    private int userEarthquakeVictimCnt;
    private int hostEarthquakeVictimCnt;
    private int superhostCnt;
    private int userReportingCnt;
    private int postReportingCnt;

    public int getReportId() {
        return reportId;
    }

    public void setReportId(int reportId) {
        this.reportId = reportId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getUserCnt() {
        return userCnt;
    }

    public void setUserCnt(int userCnt) {
        this.userCnt = userCnt;
    }

    public int getHostCnt() {
        return hostCnt;
    }

    public void setHostCnt(int hostCnt) {
        this.hostCnt = hostCnt;
    }

    public int getPostingsCnt() {
        return postingsCnt;
    }

    public void setPostingsCnt(int postingsCnt) {
        this.postingsCnt = postingsCnt;
    }

    public int getBookingCnt() {
        return bookingCnt;
    }

    public void setBookingCnt(int bookingCnt) {
        this.bookingCnt = bookingCnt;
    }

    public int getUserEarthquakeVictimCnt() {
        return userEarthquakeVictimCnt;
    }

    public void setUserEarthquakeVictimCnt(int userEarthquakeVictimCnt) {
        this.userEarthquakeVictimCnt = userEarthquakeVictimCnt;
    }

    public int getHostEarthquakeVictimCnt() {
        return hostEarthquakeVictimCnt;
    }

    public void setHostEarthquakeVictimCnt(int hostEarthquakeVictimCnt) {
        this.hostEarthquakeVictimCnt = hostEarthquakeVictimCnt;
    }

    public int getSuperhostCnt() {
        return superhostCnt;
    }

    public void setSuperhostCnt(int superhostCnt) {
        this.superhostCnt = superhostCnt;
    }

    public int getUserReportingCnt() {
        return userReportingCnt;
    }

    public void setUserReportingCnt(int userReportingCnt) {
        this.userReportingCnt = userReportingCnt;
    }

    public int getPostReportingCnt() {
        return postReportingCnt;
    }

    public void setPostReportingCnt(int postReportingCnt) {
        this.postReportingCnt = postReportingCnt;
    }
}
