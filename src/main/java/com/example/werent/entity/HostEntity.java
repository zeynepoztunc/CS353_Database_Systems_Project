package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Host", schema = "public", catalog = "oyfcmypj")
public class HostEntity {
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
    @Column(name = "iban", nullable = false, length = 40)
    private String iban;

    public String getIban() {
        return iban;
    }

    public void setIban(String iban) {
        this.iban = iban;
    }

    @Basic
    @Column(name = "region", nullable = true, length = 30)
    private String region;

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    @Basic
    @Column(name = "language", nullable = false, length = 30)
    private String language;

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    @Basic
    @Column(name = "job", nullable = false, length = 30)
    private String job;

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    @Basic
    @Column(name = "is-superhost", nullable = true)
    private Boolean isSuperhost;

    public Boolean getSuperhost() {
        return isSuperhost;
    }

    public void setSuperhost(Boolean superhost) {
        isSuperhost = superhost;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        HostEntity that = (HostEntity) o;

        if (userId != that.userId) return false;
        if (iban != null ? !iban.equals(that.iban) : that.iban != null) return false;
        if (region != null ? !region.equals(that.region) : that.region != null) return false;
        if (language != null ? !language.equals(that.language) : that.language != null) return false;
        if (job != null ? !job.equals(that.job) : that.job != null) return false;
        if (isSuperhost != null ? !isSuperhost.equals(that.isSuperhost) : that.isSuperhost != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + (iban != null ? iban.hashCode() : 0);
        result = 31 * result + (region != null ? region.hashCode() : 0);
        result = 31 * result + (language != null ? language.hashCode() : 0);
        result = 31 * result + (job != null ? job.hashCode() : 0);
        result = 31 * result + (isSuperhost != null ? isSuperhost.hashCode() : 0);
        return result;
    }
}
