package com.dotuian.service.dto;

public class SalaryDto {

    private String level;
    private String value;

    public SalaryDto(String level, String value) {
        this.level = level;
        this.value = value;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

}
