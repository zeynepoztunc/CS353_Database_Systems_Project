package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Images", schema = "public", catalog = "oyfcmypj")
@IdClass(ImagesEntityPK.class)
public class ImagesEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "image-id", nullable = false)
    private int imageId;

    public int getImageId() {
        return imageId;
    }

    public void setImageId(int imageId) {
        this.imageId = imageId;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "image-type", nullable = false, length = 15)
    private String imageType;

    public String getImageType() {
        return imageType;
    }

    public void setImageType(String imageType) {
        this.imageType = imageType;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "image-name", nullable = false, length = 30)
    private String imageName;

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
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
    @Column(name = "image-size", nullable = false, precision = 0)
    private float imageSize;

    public float getImageSize() {
        return imageSize;
    }

    public void setImageSize(float imageSize) {
        this.imageSize = imageSize;
    }

    @Basic
    @Column(name = "img-binary-path", nullable = false, length = -1)
    private String imgBinaryPath;

    public String getImgBinaryPath() {
        return imgBinaryPath;
    }

    public void setImgBinaryPath(String imgBinaryPath) {
        this.imgBinaryPath = imgBinaryPath;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ImagesEntity that = (ImagesEntity) o;

        if (imageId != that.imageId) return false;
        if (userId != that.userId) return false;
        if (Float.compare(that.imageSize, imageSize) != 0) return false;
        if (imageType != null ? !imageType.equals(that.imageType) : that.imageType != null) return false;
        if (imageName != null ? !imageName.equals(that.imageName) : that.imageName != null) return false;
        if (imgBinaryPath != null ? !imgBinaryPath.equals(that.imgBinaryPath) : that.imgBinaryPath != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = imageId;
        result = 31 * result + (imageType != null ? imageType.hashCode() : 0);
        result = 31 * result + (imageName != null ? imageName.hashCode() : 0);
        result = 31 * result + userId;
        result = 31 * result + (imageSize != +0.0f ? Float.floatToIntBits(imageSize) : 0);
        result = 31 * result + (imgBinaryPath != null ? imgBinaryPath.hashCode() : 0);
        return result;
    }
}
