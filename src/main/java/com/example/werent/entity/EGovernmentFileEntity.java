package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "E-GovernmentFile", schema = "public", catalog = "oyfcmypj")
public class EGovernmentFileEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "file-id", nullable = false)
    private int fileId;

    public int getFileId() {
        return fileId;
    }

    public void setFileId(int fileId) {
        this.fileId = fileId;
    }

    @Basic
    @Column(name = "file-name", nullable = false, length = 30)
    private String fileName;

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    @Basic
    @Column(name = "file-size", nullable = false, precision = 0)
    private float fileSize;

    public float getFileSize() {
        return fileSize;
    }

    public void setFileSize(float fileSize) {
        this.fileSize = fileSize;
    }

    @Basic
    @Column(name = "file-extension", nullable = false, length = 5)
    private String fileExtension;

    public String getFileExtension() {
        return fileExtension;
    }

    public void setFileExtension(String fileExtension) {
        this.fileExtension = fileExtension;
    }

    @Basic
    @Column(name = "file-binary-path", nullable = false, length = -1)
    private String fileBinaryPath;

    public String getFileBinaryPath() {
        return fileBinaryPath;
    }

    public void setFileBinaryPath(String fileBinaryPath) {
        this.fileBinaryPath = fileBinaryPath;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        EGovernmentFileEntity that = (EGovernmentFileEntity) o;

        if (fileId != that.fileId) return false;
        if (Float.compare(that.fileSize, fileSize) != 0) return false;
        if (fileName != null ? !fileName.equals(that.fileName) : that.fileName != null) return false;
        if (fileExtension != null ? !fileExtension.equals(that.fileExtension) : that.fileExtension != null)
            return false;
        if (fileBinaryPath != null ? !fileBinaryPath.equals(that.fileBinaryPath) : that.fileBinaryPath != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = fileId;
        result = 31 * result + (fileName != null ? fileName.hashCode() : 0);
        result = 31 * result + (fileSize != +0.0f ? Float.floatToIntBits(fileSize) : 0);
        result = 31 * result + (fileExtension != null ? fileExtension.hashCode() : 0);
        result = 31 * result + (fileBinaryPath != null ? fileBinaryPath.hashCode() : 0);
        return result;
    }
}
