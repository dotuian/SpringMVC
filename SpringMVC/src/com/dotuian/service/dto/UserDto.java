package com.dotuian.service.dto;

import java.sql.Date;
import java.util.List;

import com.dotuian.dao.entity.UserEntity;

public class UserDto {

    private long id;
    private String username;
    private String password;
    private Date birthday;
    private double salary;
    private int age;
    private String sex;
    private List<String> hobby;
    private String memo;

    public UserEntity toUserEntity(){
        UserEntity entity = new UserEntity();
        
        entity.setId(this.getId());
        entity.setUsername(this.getUsername());
        entity.setPassword(this.getPassword());
        entity.setBirthday(this.getBirthday());
        entity.setSalary(this.getSalary());

        
        List<String> list = this.getHobby();
        String hobby = "";
        for (int i = 0; i < list.size(); i++) {
            hobby += list.get(i); 
        }
        entity.setHobby(hobby);

        entity.setSex(this.getSex());
        entity.setAge(this.getAge());
        entity.setMemo(this.getMemo());
        
        
        return entity;
    }
    
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

    public List<String> getHobby() {
        return hobby;
    }

    public void setHobby(List<String> hobby) {
        this.hobby = hobby;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

}
