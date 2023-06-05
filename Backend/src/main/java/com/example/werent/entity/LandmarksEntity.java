package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Landmarks", schema = "public", catalog = "oyfcmypj")
public class LandmarksEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "landmark-id", nullable = false)
    private int landmarkId;

    public int getLandmarkId() {
        return landmarkId;
    }

    public void setLandmarkId(int landmarkId) {
        this.landmarkId = landmarkId;
    }

    @Basic
    @Column(name = "user-id", nullable = false)
    private int userId;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "landmark-name", nullable = false, length = 40)
    private String landmarkName;

    public String getLandmarkName() {
        return landmarkName;
    }

    public void setLandmarkName(String landmarkName) {
        this.landmarkName = landmarkName;
    }

    @Basic
    @Column(name = "description", nullable = true, length = -1)
    private String description;

    @Basic
    @Column(name = "image-path", nullable = true, length = -1)
    private String path;
    public void setPath(String path) {
        this.path = path;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
    @Column(name = "accepted", nullable = true)
    private Boolean accepted;

    public Boolean getAccepted() {
        return accepted;
    }

    public void setAccepted(Boolean accepted) {
        this.accepted = accepted;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LandmarksEntity that = (LandmarksEntity) o;

        if (landmarkId != that.landmarkId) return false;
        if (userId != that.userId) return false;
        if (Float.compare(that.latitude, latitude) != 0) return false;
        if (Float.compare(that.longitude, longitude) != 0) return false;
        if (landmarkName != null ? !landmarkName.equals(that.landmarkName) : that.landmarkName != null) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;
        if (city != null ? !city.equals(that.city) : that.city != null) return false;
        if (province != null ? !province.equals(that.province) : that.province != null) return false;
        if (accepted != null ? !accepted.equals(that.accepted) : that.accepted != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = landmarkId;
        result = 31 * result + userId;
        result = 31 * result + (landmarkName != null ? landmarkName.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (city != null ? city.hashCode() : 0);
        result = 31 * result + (province != null ? province.hashCode() : 0);
        result = 31 * result + (latitude != +0.0f ? Float.floatToIntBits(latitude) : 0);
        result = 31 * result + (longitude != +0.0f ? Float.floatToIntBits(longitude) : 0);
        result = 31 * result + (accepted != null ? accepted.hashCode() : 0);
        return result;
    }
}
