package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Room", schema = "public", catalog = "oyfcmypj")
public class RoomEntity {
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
    @Column(name = "common-kitchen-num", nullable = false)
    private int commonKitchenNum;

    public int getCommonKitchenNum() {
        return commonKitchenNum;
    }

    public void setCommonKitchenNum(int commonKitchenNum) {
        this.commonKitchenNum = commonKitchenNum;
    }

    @Basic
    @Column(name = "common-bathroom-num", nullable = false)
    private int commonBathroomNum;

    public int getCommonBathroomNum() {
        return commonBathroomNum;
    }

    public void setCommonBathroomNum(int commonBathroomNum) {
        this.commonBathroomNum = commonBathroomNum;
    }

    @Basic
    @Column(name = "common-living-room-num", nullable = false)
    private int commonLivingRoomNum;

    public int getCommonLivingRoomNum() {
        return commonLivingRoomNum;
    }

    public void setCommonLivingRoomNum(int commonLivingRoomNum) {
        this.commonLivingRoomNum = commonLivingRoomNum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RoomEntity that = (RoomEntity) o;

        if (rentalId != that.rentalId) return false;
        if (commonKitchenNum != that.commonKitchenNum) return false;
        if (commonBathroomNum != that.commonBathroomNum) return false;
        if (commonLivingRoomNum != that.commonLivingRoomNum) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = rentalId;
        result = 31 * result + commonKitchenNum;
        result = 31 * result + commonBathroomNum;
        result = 31 * result + commonLivingRoomNum;
        return result;
    }
}
