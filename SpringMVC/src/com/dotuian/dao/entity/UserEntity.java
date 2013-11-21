package com.dotuian.dao.entity;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.dotuian.service.dto.UserDto;

public class UserEntity implements Serializable {

    private static final long serialVersionUID = -458045724375300041L;

    private long id;
    private String username;
    private String password;
    private Date birthday;
    private double salary;
    private int age;
    private String sex;
    private String hobby;
    private String memo;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }
    
    public UserDto toUserDto() {
        UserDto dto = new UserDto();
        dto.setId(this.getId());
        dto.setUsername(this.getUsername());
        dto.setPassword(this.getPassword());
        dto.setBirthday(this.getBirthday());
        dto.setSalary(this.getSalary());

        String[] temp = this.getHobby().split(",");
        List<String> hobbyList = new ArrayList<String>();
        for (int i = 0; i < temp.length; i++) {
            hobbyList.add(temp[i]);
        }
        dto.setHobby(hobbyList);

        dto.setSex(this.getSex());
        dto.setAge(this.getAge());
        dto.setMemo(this.getMemo());
        return dto;
    }
    
    
    public String getRoles(){
        return "ADMIN";
    }

}
