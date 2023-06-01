package com.example.werent.entity;

import java.sql.Date;

public class RegisteredUserDTO {
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
    private boolean creationSuccesful;
    private boolean loginSuccessful;

    public boolean isLoginSuccessful() {
        return loginSuccessful;
    }

    public void setLoginSuccessful(boolean loginSuccessful) {
        this.loginSuccessful = loginSuccessful;
    }

    public boolean isCreationSuccesful() {
        return creationSuccesful;
    }

    public void setCreationSuccesful(boolean creationSuccesful) {
        this.creationSuccesful = creationSuccesful;
    }

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
