package com.example.werent.entity;

import java.sql.Date;

public class HostDTO {
    private int userId;
    private String name;
    private String surname;
    private String password;
    private String email;
    private Date dateOfBirth;
    private String telephoneNo;
    private String gender;
    private boolean isEarthquakeVictim;
    private Float balance;
    private Float userRating;
    private String usageMode;
    private String description;
    private String userType;
    private Date joinDate;
    private String iban;
    private String region;
    private String language;
    private String job;
    private boolean isSuperhost;

    public int getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getPassword() {
        return password;
    }

    public String getIban() {
        return iban;
    }

    public String getRegion() {
        return region;
    }

    public String getLanguage() {
        return language;
    }

    public String getJob() {
        return job;
    }

    public boolean isSuperhost() {
        return isSuperhost;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public String getTelephoneNo() {
        return telephoneNo;
    }

    public String getGender() {
        return gender;
    }

    public boolean isEarthquakeVictim() {
        return isEarthquakeVictim;
    }

    public Float getBalance() {
        return balance;
    }

    public Float getUserRating() {
        return userRating;
    }

    public String getUsageMode() {
        return usageMode;
    }

    public String getDescription() {
        return description;
    }

    public String getUserType() {
        return userType;
    }

    public Date getJoinDate() {
        return joinDate;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setTelephoneNo(String telephoneNo) {
        this.telephoneNo = telephoneNo;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setEarthquakeVictim(boolean earthquakeVictim) {
        isEarthquakeVictim = earthquakeVictim;
    }

    public void setBalance(Float balance) {
        this.balance = balance;
    }

    public void setUserRating(Float userRating) {
        this.userRating = userRating;
    }

    public void setUsageMode(String usageMode) {
        this.usageMode = usageMode;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public void setJoinDate(Date joinDate) {
        this.joinDate = joinDate;
    }

    public void setIban(String iban) {
        this.iban = iban;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public void setSuperhost(boolean superhost) {
        isSuperhost = superhost;
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
