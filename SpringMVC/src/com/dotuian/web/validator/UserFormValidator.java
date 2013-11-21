package com.dotuian.web.validator;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.dotuian.web.form.UserForm;

public class UserFormValidator implements Validator {

    public boolean supports(Class<?> clazz) {
        return clazz.equals(UserForm.class);
    }

    public void validate(Object target, Errors errors) {

        ValidationUtils.rejectIfEmpty(errors, "username", "ERROR001", new String[]{"姓名"});  
        ValidationUtils.rejectIfEmpty(errors, "password", "ERROR001", new String[]{"密码"});
        ValidationUtils.rejectIfEmpty(errors, "age", "ERROR001", new String[]{"年龄"});
        UserForm user = (UserForm)target;  
        int length = user.getUsername().length();
        if (length > 20) {
            errors.rejectValue("username", "user.userName.too_long");
        }
        length = user.getPassword().length();
        if (length < 6) {
            errors.rejectValue("password", "user.password.too_short");
        } else if (length > 20) {
            errors.rejectValue("password", "user.password.too_long");
        }        

    }

}
