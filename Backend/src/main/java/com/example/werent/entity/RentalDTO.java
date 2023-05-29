package com.example.werent.entity;

import java.sql.Date;

import java.sql.Time;

public class RentalDTO
{
    private int rentalId;
    private String rentalName;
    private int hostId;
    private int guestNo;
    private float dailyPrice;
    private Float rating;
    private String city;
    private String province;
    private String address;
    private float latitude;
    private float longitude;
    private Date rentingAvailableStartDate;
    private Date rentingAvailableEndDate;
    private Date hostSelectedRentalStartDate;
    private Date hostSelectedRentalEndDate;
    private String guestPolicy;
    private String rentalType;
    private float areaInM2;
    private int numOfBeds;
    private String description;
    private boolean earthquakeSupport;
    private int maxStayDuration;
    private int cancellationRefund;
    private int cancellationDayLimit;
    private Time earliestCheckInHour;
    private Time latestCheckOutHour;
    private int cancellationHourLimit;
    private boolean autoApproveRequests;
    private boolean isAdminApproved;
    private boolean couchsurfing;
    private String searchInput;
    private String filterCity;
    private String chosenCity;
    private String filterCategory;
    private String chosenCategory;

    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }

    public String getRentalName() {
        return rentalName;
    }

    public void setRentalName(String rentalName) {
        this.rentalName = rentalName;
    }

    public int getHostId() {
        return hostId;
    }

    public void setHostId(int hostId) {
        this.hostId = hostId;
    }

    public int getGuestNo() {
        return guestNo;
    }

    public void setGuestNo(int guestNo) {
        this.guestNo = guestNo;
    }

    public float getDailyPrice() {
        return dailyPrice;
    }

    public void setDailyPrice(float dailyPrice) {
        this.dailyPrice = dailyPrice;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    public float getLongitude() {
        return longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }

    public Date getRentingAvailableStartDate() {
        return rentingAvailableStartDate;
    }

    public void setRentingAvailableStartDate(Date rentingAvailableStartDate) {
        this.rentingAvailableStartDate = rentingAvailableStartDate;
    }

    public Date getRentingAvailableEndDate() {
        return rentingAvailableEndDate;
    }

    public void setRentingAvailableEndDate(Date rentingAvailableEndDate) {
        this.rentingAvailableEndDate = rentingAvailableEndDate;
    }

    public Date getHostSelectedRentalStartDate() {
        return hostSelectedRentalStartDate;
    }

    public void setHostSelectedRentalStartDate(Date hostSelectedRentalStartDate) {
        this.hostSelectedRentalStartDate = hostSelectedRentalStartDate;
    }

    public Date getHostSelectedRentalEndDate() {
        return hostSelectedRentalEndDate;
    }

    public void setHostSelectedRentalEndDate(Date hostSelectedRentalEndDate) {
        this.hostSelectedRentalEndDate = hostSelectedRentalEndDate;
    }

    public String getGuestPolicy() {
        return guestPolicy;
    }

    public void setGuestPolicy(String guestPolicy) {
        this.guestPolicy = guestPolicy;
    }

    public String getRentalType() {
        return rentalType;
    }

    public void setRentalType(String rentalType) {
        this.rentalType = rentalType;
    }

    public float getAreaInM2() {
        return areaInM2;
    }

    public void setAreaInM2(float areaInM2) {
        this.areaInM2 = areaInM2;
    }

    public int getNumOfBeds() {
        return numOfBeds;
    }

    public void setNumOfBeds(int numOfBeds) {
        this.numOfBeds = numOfBeds;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isEarthquakeSupport() {
        return earthquakeSupport;
    }

    public void setEarthquakeSupport(boolean earthquakeSupport) {
        this.earthquakeSupport = earthquakeSupport;
    }

    public int getMaxStayDuration() {
        return maxStayDuration;
    }

    public void setMaxStayDuration(int maxStayDuration) {
        this.maxStayDuration = maxStayDuration;
    }

    public int getCancellationRefund() {
        return cancellationRefund;
    }

    public void setCancellationRefund(int cancellationRefund) {
        this.cancellationRefund = cancellationRefund;
    }

    public int getCancellationDayLimit() {
        return cancellationDayLimit;
    }

    public void setCancellationDayLimit(int cancellationDayLimit) {
        this.cancellationDayLimit = cancellationDayLimit;
    }

    public Time getEarliestCheckInHour() {
        return earliestCheckInHour;
    }

    public void setEarliestCheckInHour(Time earliestCheckInHour) {
        this.earliestCheckInHour = earliestCheckInHour;
    }

    public Time getLatestCheckOutHour() {
        return latestCheckOutHour;
    }

    public void setLatestCheckOutHour(Time latestCheckOutHour) {
        this.latestCheckOutHour = latestCheckOutHour;
    }

    public int getCancellationHourLimit() {
        return cancellationHourLimit;
    }

    public void setCancellationHourLimit(int cancellationHourLimit) {
        this.cancellationHourLimit = cancellationHourLimit;
    }

    public boolean isAutoApproveRequests() {
        return autoApproveRequests;
    }

    public void setAutoApproveRequests(boolean autoApproveRequests) {
        this.autoApproveRequests = autoApproveRequests;
    }

    public boolean getAdminApproved() {
        return isAdminApproved;
    }

    public void setAdminApproved(Boolean isAdminApproved) {
        this.isAdminApproved = isAdminApproved;
    }

    public boolean isCouchsurfing() {
        return couchsurfing;
    }

    public void setCouchsurfing(boolean couchsurfing) {
        this.couchsurfing = couchsurfing;
    }

    public String getSearchInput() {
        return searchInput;
    }

    public void setSearchInput(String searchInput) {
        this.searchInput = searchInput;
    }

    public String getFilterCity() {
        return filterCity;
    }

    public void setFilterCity(String filterCity) {
        this.filterCity = filterCity;
    }

    public String getChosenCity() {
        return chosenCity;
    }

    public void setChosenCity(String chosenCity) {
        this.chosenCity = chosenCity;
    }

    public String getFilterCategory() {
        return filterCategory;
    }

    public void setFilterCategory(String filterCategory) {
        this.filterCategory = filterCategory;
    }

    public String getChosenCategory() {
        return chosenCategory;
    }

    public void setChosenCategory(String chosenCategory) {
        this.chosenCategory = chosenCategory;
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
