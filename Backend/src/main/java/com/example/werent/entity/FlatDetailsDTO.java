package com.example.werent.entity;

public class FlatDetailsDTO {
    private int rentalId;
    private int hostId;
    private String rentalName;
    private int areaInM2;
    private int numOfRoomsInFlat;
    private String flatType;
    private int numOfBedsInFlat;
    private int numOfBathrooms;
    private int guestNo;
    private String description;
    private boolean earthquakeSupport;
    private boolean couchsurfing;

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

    public int getNumOfRoomsInFlat() {
        return numOfRoomsInFlat;
    }

    public void setNumOfRoomsInFlat(int numOfRoomsInFlat) {
        this.numOfRoomsInFlat = numOfRoomsInFlat;
    }

    public String getFlatType() {
        return flatType;
    }

    public void setFlatType(String flatType) {
        this.flatType = flatType;
    }

    public int getNumOfBedsInFlat() {
        return numOfBedsInFlat;
    }

    public void setNumOfBedsInFlat(int numOfBedsInFlat) {
        this.numOfBedsInFlat = numOfBedsInFlat;
    }

    public int getNumOfBathrooms() {
        return numOfBathrooms;
    }

    public void setNumOfBathrooms(int numOfBathrooms) {
        this.numOfBathrooms = numOfBathrooms;
    }

    public int getGuestNo() {
        return guestNo;
    }

    public void setGuestNo(int guestNo) {
        this.guestNo = guestNo;
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


}
