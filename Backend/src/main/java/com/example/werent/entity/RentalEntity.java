package com.example.werent.entity;

import jakarta.persistence.*;

import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name = "Rental", schema = "public", catalog = "oyfcmypj")
public class RentalEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "rental-id", nullable = false)
    private int rentalId;

    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }

    @Basic
    @Column(name = "rental-name", nullable = false, length = 100)
    private String rentalName;

    public String getRentalName() {
        return rentalName;
    }

    public void setRentalName(String rentalName) {
        this.rentalName = rentalName;
    }

    @Basic
    @Column(name = "host-id", nullable = false)
    private int hostId;

    public int getHostId() {
        return hostId;
    }

    public void setHostId(int hostId) {
        this.hostId = hostId;
    }

    @Basic
    @Column(name = "guest-no", nullable = false)
    private int guestNo;

    public int getGuestNo() {
        return guestNo;
    }

    public void setGuestNo(int guestNo) {
        this.guestNo = guestNo;
    }

    @Basic
    @Column(name = "daily-price", nullable = false, precision = 0)
    private float dailyPrice;

    public float getDailyPrice() {
        return dailyPrice;
    }

    public void setDailyPrice(float dailyPrice) {
        this.dailyPrice = dailyPrice;
    }

    @Basic
    @Column(name = "rating", nullable = true, precision = 0)
    private Float rating;

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    @Basic
    @Column(name = "city", nullable = false, length = 20)
    private String city;

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Basic
    @Column(name = "province", nullable = false, length = 20)
    private String province;

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    @Basic
    @Column(name = "address", nullable = false, length = 120)
    private String address;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Basic
    @Column(name = "latitude", nullable = false, precision = 0)
    private float latitude;

    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    @Basic
    @Column(name = "longitude", nullable = false, precision = 0)
    private float longitude;

    public float getLongitude() {
        return longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }

    @Basic
    @Column(name = "renting-available-start-date", nullable = false)
    private Date rentingAvailableStartDate;

    public Date getRentingAvailableStartDate() {
        return rentingAvailableStartDate;
    }

    public void setRentingAvailableStartDate(Date rentingAvailableStartDate) {
        this.rentingAvailableStartDate = rentingAvailableStartDate;
    }

    @Basic
    @Column(name = "renting-available-end-date", nullable = false)
    private Date rentingAvailableEndDate;

    public Date getRentingAvailableEndDate() {
        return rentingAvailableEndDate;
    }

    public void setRentingAvailableEndDate(Date rentingAvailableEndDate) {
        this.rentingAvailableEndDate = rentingAvailableEndDate;
    }

    @Basic
    @Column(name = "host-selected-rental-start-date", nullable = false)
    private Date hostSelectedRentalStartDate;

    public Date getHostSelectedRentalStartDate() {
        return hostSelectedRentalStartDate;
    }

    public void setHostSelectedRentalStartDate(Date hostSelectedRentalStartDate) {
        this.hostSelectedRentalStartDate = hostSelectedRentalStartDate;
    }

    @Basic
    @Column(name = "host-selected-rental-end-date", nullable = false)
    private Date hostSelectedRentalEndDate;

    public Date getHostSelectedRentalEndDate() {
        return hostSelectedRentalEndDate;
    }

    public void setHostSelectedRentalEndDate(Date hostSelectedRentalEndDate) {
        this.hostSelectedRentalEndDate = hostSelectedRentalEndDate;
    }

    @Basic
    @Column(name = "guest-policy", nullable = true, length = 100)
    private String guestPolicy;

    public String getGuestPolicy() {
        return guestPolicy;
    }

    public void setGuestPolicy(String guestPolicy) {
        this.guestPolicy = guestPolicy;
    }

    @Basic
    @Column(name = "rental-type", nullable = false, length = 20)
    private String rentalType;

    public String getRentalType() {
        return rentalType;
    }

    public void setRentalType(String rentalType) {
        this.rentalType = rentalType;
    }

    @Basic
    @Column(name = "area-in-m2", nullable = false, precision = 0)
    private float areaInM2;

    public float getAreaInM2() {
        return areaInM2;
    }

    public void setAreaInM2(float areaInM2) {
        this.areaInM2 = areaInM2;
    }

    @Basic
    @Column(name = "num-of-beds", nullable = false)
    private int numOfBeds;

    public int getNumOfBeds() {
        return numOfBeds;
    }

    public void setNumOfBeds(int numOfBeds) {
        this.numOfBeds = numOfBeds;
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
    @Column(name = "earthquake-support", nullable = false)
    private boolean earthquakeSupport;

    public boolean isEarthquakeSupport() {
        return earthquakeSupport;
    }

    public void setEarthquakeSupport(boolean earthquakeSupport) {
        this.earthquakeSupport = earthquakeSupport;
    }

    @Basic
    @Column(name = "max-stay-duration", nullable = false)
    private int maxStayDuration;

    public int getMaxStayDuration() {
        return maxStayDuration;
    }

    public void setMaxStayDuration(int maxStayDuration) {
        this.maxStayDuration = maxStayDuration;
    }

    @Basic
    @Column(name = "cancellation-refund", nullable = false)
    private int cancellationRefund;

    public int getCancellationRefund() {
        return cancellationRefund;
    }

    public void setCancellationRefund(int cancellationRefund) {
        this.cancellationRefund = cancellationRefund;
    }

    @Basic
    @Column(name = "cancellation-day-limit", nullable = false)
    private int cancellationDayLimit;

    public int getCancellationDayLimit() {
        return cancellationDayLimit;
    }

    public void setCancellationDayLimit(int cancellationDayLimit) {
        this.cancellationDayLimit = cancellationDayLimit;
    }

    @Basic
    @Column(name = "earliest-check-in-hour", nullable = false)
    private Time earliestCheckInHour;

    public Time getEarliestCheckInHour() {
        return earliestCheckInHour;
    }

    public void setEarliestCheckInHour(Time earliestCheckInHour) {
        this.earliestCheckInHour = earliestCheckInHour;
    }

    @Basic
    @Column(name = "latest-check-in-hour", nullable = false)
    private Time latestCheckInHour;

    public Time getLatestCheckInHour() {
        return latestCheckInHour;
    }

    public void setLatestCheckInHour(Time latestCheckInHour) {
        this.latestCheckInHour = latestCheckInHour;
    }

    @Basic
    @Column(name = "cancellation-hour-limit", nullable = false)
    private int cancellationHourLimit;

    public int getCancellationHourLimit() {
        return cancellationHourLimit;
    }

    public void setCancellationHourLimit(int cancellationHourLimit) {
        this.cancellationHourLimit = cancellationHourLimit;
    }

    @Basic
    @Column(name = "auto-approve-requests", nullable = false)
    private boolean autoApproveRequests;

    public boolean isAutoApproveRequests() {
        return autoApproveRequests;
    }

    public void setAutoApproveRequests(boolean autoApproveRequests) {
        this.autoApproveRequests = autoApproveRequests;
    }

    @Basic
    @Column(name = "is-admin-approved", nullable = true)
    private Boolean isAdminApproved;

    public Boolean getAdminApproved() {
        return isAdminApproved;
    }

    public void setAdminApproved(Boolean adminApproved) {
        isAdminApproved = adminApproved;
    }

    @Basic
    @Column(name = "couchsurfing", nullable = false)
    private boolean couchsurfing;

    public boolean isCouchsurfing() {
        return couchsurfing;
    }

    public void setCouchsurfing(boolean couchsurfing) {
        this.couchsurfing = couchsurfing;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RentalEntity that = (RentalEntity) o;

        if (rentalId != that.rentalId) return false;
        if (hostId != that.hostId) return false;
        if (guestNo != that.guestNo) return false;
        if (Float.compare(that.dailyPrice, dailyPrice) != 0) return false;
        if (Float.compare(that.latitude, latitude) != 0) return false;
        if (Float.compare(that.longitude, longitude) != 0) return false;
        if (Float.compare(that.areaInM2, areaInM2) != 0) return false;
        if (numOfBeds != that.numOfBeds) return false;
        if (earthquakeSupport != that.earthquakeSupport) return false;
        if (maxStayDuration != that.maxStayDuration) return false;
        if (cancellationRefund != that.cancellationRefund) return false;
        if (cancellationDayLimit != that.cancellationDayLimit) return false;
        if (cancellationHourLimit != that.cancellationHourLimit) return false;
        if (autoApproveRequests != that.autoApproveRequests) return false;
        if (couchsurfing != that.couchsurfing) return false;
        if (rentalName != null ? !rentalName.equals(that.rentalName) : that.rentalName != null) return false;
        if (rating != null ? !rating.equals(that.rating) : that.rating != null) return false;
        if (city != null ? !city.equals(that.city) : that.city != null) return false;
        if (province != null ? !province.equals(that.province) : that.province != null) return false;
        if (address != null ? !address.equals(that.address) : that.address != null) return false;
        if (rentingAvailableStartDate != null ? !rentingAvailableStartDate.equals(that.rentingAvailableStartDate) : that.rentingAvailableStartDate != null)
            return false;
        if (rentingAvailableEndDate != null ? !rentingAvailableEndDate.equals(that.rentingAvailableEndDate) : that.rentingAvailableEndDate != null)
            return false;
        if (hostSelectedRentalStartDate != null ? !hostSelectedRentalStartDate.equals(that.hostSelectedRentalStartDate) : that.hostSelectedRentalStartDate != null)
            return false;
        if (hostSelectedRentalEndDate != null ? !hostSelectedRentalEndDate.equals(that.hostSelectedRentalEndDate) : that.hostSelectedRentalEndDate != null)
            return false;
        if (guestPolicy != null ? !guestPolicy.equals(that.guestPolicy) : that.guestPolicy != null) return false;
        if (rentalType != null ? !rentalType.equals(that.rentalType) : that.rentalType != null) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;
        if (earliestCheckInHour != null ? !earliestCheckInHour.equals(that.earliestCheckInHour) : that.earliestCheckInHour != null)
            return false;
        if (latestCheckInHour != null ? !latestCheckInHour.equals(that.latestCheckInHour) : that.latestCheckInHour != null)
            return false;
        if (isAdminApproved != null ? !isAdminApproved.equals(that.isAdminApproved) : that.isAdminApproved != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = rentalId;
        result = 31 * result + (rentalName != null ? rentalName.hashCode() : 0);
        result = 31 * result + hostId;
        result = 31 * result + guestNo;
        result = 31 * result + (dailyPrice != +0.0f ? Float.floatToIntBits(dailyPrice) : 0);
        result = 31 * result + (rating != null ? rating.hashCode() : 0);
        result = 31 * result + (city != null ? city.hashCode() : 0);
        result = 31 * result + (province != null ? province.hashCode() : 0);
        result = 31 * result + (address != null ? address.hashCode() : 0);
        result = 31 * result + (latitude != +0.0f ? Float.floatToIntBits(latitude) : 0);
        result = 31 * result + (longitude != +0.0f ? Float.floatToIntBits(longitude) : 0);
        result = 31 * result + (rentingAvailableStartDate != null ? rentingAvailableStartDate.hashCode() : 0);
        result = 31 * result + (rentingAvailableEndDate != null ? rentingAvailableEndDate.hashCode() : 0);
        result = 31 * result + (hostSelectedRentalStartDate != null ? hostSelectedRentalStartDate.hashCode() : 0);
        result = 31 * result + (hostSelectedRentalEndDate != null ? hostSelectedRentalEndDate.hashCode() : 0);
        result = 31 * result + (guestPolicy != null ? guestPolicy.hashCode() : 0);
        result = 31 * result + (rentalType != null ? rentalType.hashCode() : 0);
        result = 31 * result + (areaInM2 != +0.0f ? Float.floatToIntBits(areaInM2) : 0);
        result = 31 * result + numOfBeds;
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (earthquakeSupport ? 1 : 0);
        result = 31 * result + maxStayDuration;
        result = 31 * result + cancellationRefund;
        result = 31 * result + cancellationDayLimit;
        result = 31 * result + (earliestCheckInHour != null ? earliestCheckInHour.hashCode() : 0);
        result = 31 * result + (latestCheckInHour != null ? latestCheckInHour.hashCode() : 0);
        result = 31 * result + cancellationHourLimit;
        result = 31 * result + (autoApproveRequests ? 1 : 0);
        result = 31 * result + (isAdminApproved != null ? isAdminApproved.hashCode() : 0);
        result = 31 * result + (couchsurfing ? 1 : 0);
        return result;
    }
}
