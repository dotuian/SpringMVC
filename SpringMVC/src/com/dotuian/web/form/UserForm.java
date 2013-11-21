package com.dotuian.web.form;

import java.util.List;
import java.util.Random;

import com.dotuian.service.dto.UserDto;

public class UserForm {

    private String username;
    private String password;
    private String age;
    private String sex;
    private String birthday;
    private String salary;
    private List<String> hobby;
    private String memo;
    
    public UserForm() {

    }
    
    public UserForm(Random random) {
        this.username = "username" + random.nextInt(100000);
        this.password = "password" + random.nextInt(100000);
        this.age = String.valueOf(random.nextInt(100));
        this.sex = String.valueOf(random.nextInt(1));
        this.salary = String.valueOf(random.nextInt(4));
        this.memo = String.valueOf(random.nextInt(100000));
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

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
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

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("UserForm [username=");
        builder.append(username);
        builder.append(", password=");
        builder.append(password);
        builder.append(", age=");
        builder.append(age);
        builder.append(", sex=");
        builder.append(sex);
        builder.append(", birthday=");
        builder.append(birthday);
        builder.append(", salary=");
        builder.append(salary);
        builder.append(", memo=");
        builder.append(memo);
        builder.append("]");
        return builder.toString();
    }
    
    public UserDto toUserDto() {
        UserDto dto = new UserDto();
        if (this.getAge() != null) {
            dto.setAge(Integer.valueOf(this.getAge()));
        }
//        dto.setBirthday(DateUtils.convertToSqlDate(DateUtils.parseDate(
//                this.getBirthday(), Constant.DATE_FORMAT_8BIT)));
        dto.setHobby(this.getHobby());
        dto.setMemo(this.getMemo());
        dto.setPassword(this.getPassword());
        if(this.getSalary() != null){
            dto.setSalary(Double.valueOf(this.getSalary()));
        }
        dto.setSex(this.getSex());
        dto.setUsername(this.getUsername());
        return dto;
    }
    
}
