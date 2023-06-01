package com.example.werent.entity;

public class ImagesDTO {
    private int imageId;
    private String imageType;
    private String imageName;
    private int userId;
    private float imageSize;
    private String imgBinaryPath;

    public int getImageId() {
        return imageId;
    }

    public void setImageId(int imageId) {
        this.imageId = imageId;
    }

    public String getImageType() {
        return imageType;
    }

    public void setImageType(String imageType) {
        this.imageType = imageType;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public float getImageSize() {
        return imageSize;
    }

    public void setImageSize(float imageSize) {
        this.imageSize = imageSize;
    }

    public String getImgBinaryPath() {
        return imgBinaryPath;
    }

    public void setImgBinaryPath(String imgBinaryPath) {
        this.imgBinaryPath = imgBinaryPath;
    }
}