package com.example.werent.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "RegisteredUser", schema = "public", catalog = "oyfcmypj")
public class RegisteredUserEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user-id", nullable = false)
    private int userId;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "e-mail", nullable = false, length = 60)
    private String eMail;

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    @Basic
    @Column(name = "date-of-birth", nullable = false)
    private Date dateOfBirth;

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    @Basic
    @Column(name = "telephone-no", nullable = false, length = 15)
    private String telephoneNo;

    public String getTelephoneNo() {
        return telephoneNo;
    }

    public void setTelephoneNo(String telephoneNo) {
        this.telephoneNo = telephoneNo;
    }

    @Basic
    @Column(name = "gender", nullable = false, length = 20)
    private String gender;

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Basic
    @Column(name = "is-earthquake-victim", nullable = true)
    private Boolean isEarthquakeVictim;

    public Boolean getEarthquakeVictim() {
        return isEarthquakeVictim;
    }

    public void setEarthquakeVictim(Boolean earthquakeVictim) {
        isEarthquakeVictim = earthquakeVictim;
    }

    @Basic
    @Column(name = "balance", nullable = true, precision = 0)
    private Float balance;

    public Float getBalance() {
        return balance;
    }

    public void setBalance(Float balance) {
        this.balance = balance;
    }

    @Basic
    @Column(name = "user-rating", nullable = true, precision = 0)
    private Float userRating;

    public Float getUserRating() {
        return userRating;
    }

    public void setUserRating(Float userRating) {
        this.userRating = userRating;
    }

    @Basic
    @Column(name = "usage-mode", nullable = false, length = 20)
    private String usageMode;

    public String getUsageMode() {
        return usageMode;
    }

    public void setUsageMode(String usageMode) {
        this.usageMode = usageMode;
    }

    @Basic
    @Column(name = "description", nullable = true, length = -1)
    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "user-type", nullable = false, length = 20)
    private String userType;

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    @Basic
    @Column(name = "join-date", nullable = false)
    private Date joinDate;

    public Date getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(Date joinDate) {
        this.joinDate = joinDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RegisteredUserEntity that = (RegisteredUserEntity) o;

        if (userId != that.userId) return false;
        if (eMail != null ? !eMail.equals(that.eMail) : that.eMail != null) return false;
        if (dateOfBirth != null ? !dateOfBirth.equals(that.dateOfBirth) : that.dateOfBirth != null) return false;
        if (telephoneNo != null ? !telephoneNo.equals(that.telephoneNo) : that.telephoneNo != null) return false;
        if (gender != null ? !gender.equals(that.gender) : that.gender != null) return false;
        if (isEarthquakeVictim != null ? !isEarthquakeVictim.equals(that.isEarthquakeVictim) : that.isEarthquakeVictim != null)
            return false;
        if (balance != null ? !balance.equals(that.balance) : that.balance != null) return false;
        if (userRating != null ? !userRating.equals(that.userRating) : that.userRating != null) return false;
        if (usageMode != null ? !usageMode.equals(that.usageMode) : that.usageMode != null) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;
        if (userType != null ? !userType.equals(that.userType) : that.userType != null) return false;
        if (joinDate != null ? !joinDate.equals(that.joinDate) : that.joinDate != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + (eMail != null ? eMail.hashCode() : 0);
        result = 31 * result + (dateOfBirth != null ? dateOfBirth.hashCode() : 0);
        result = 31 * result + (telephoneNo != null ? telephoneNo.hashCode() : 0);
        result = 31 * result + (gender != null ? gender.hashCode() : 0);
        result = 31 * result + (isEarthquakeVictim != null ? isEarthquakeVictim.hashCode() : 0);
        result = 31 * result + (balance != null ? balance.hashCode() : 0);
        result = 31 * result + (userRating != null ? userRating.hashCode() : 0);
        result = 31 * result + (usageMode != null ? usageMode.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (userType != null ? userType.hashCode() : 0);
        result = 31 * result + (joinDate != null ? joinDate.hashCode() : 0);
        return result;
    }
}
