package com.example.werent.entity;


public class RoomDetailsDTO {
    private int rentalId;
    private int hostId;
    private String rentalName;
    private int areaInM2;
    private int guestNo;
    private int numOfBeds;
    private String description;
    private boolean earthquakeSupport;
    private boolean couchsurfing;
    private int commonKitchenNum;
    private int commonBathroomNum;
    private int commonLivingRoomNum;

    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }

    public int getHostId() {
        return hostId;
    }

    public void setHostId(int hostId) {
        this.hostId = hostId;
    }

    public String getRentalName() {
        return rentalName;
    }

    public void setRentalName(String rentalName) {
        this.rentalName = rentalName;
    }

    public int getAreaInM2() {
        return areaInM2;
    }

    public void setAreaInM2(int areaInM2) {
        this.areaInM2 = areaInM2;
    }

    public int getGuestNo() {
        return guestNo;
    }

    public void setGuestNo(int guestNo) {
        this.guestNo = guestNo;
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

    public boolean isCouchsurfing() {
        return couchsurfing;
    }

    public void setCouchsurfing(boolean couchsurfing) {
        this.couchsurfing = couchsurfing;
    }

    public int getCommonKitchenNum() {
        return commonKitchenNum;
    }

    public void setCommonKitchenNum(int commonKitchenNum) {
        this.commonKitchenNum = commonKitchenNum;
    }

    public int getCommonBathroomNum() {
        return commonBathroomNum;
    }

    public void setCommonBathroomNum(int commonBathroomNum) {
        this.commonBathroomNum = commonBathroomNum;
    }

    public int getCommonLivingRoomNum() {
        return commonLivingRoomNum;
    }

    public void setCommonLivingRoomNum(int commonLivingRoomNum) {
        this.commonLivingRoomNum = commonLivingRoomNum;
    }
}
