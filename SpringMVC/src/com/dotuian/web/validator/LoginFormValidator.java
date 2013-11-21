package com.dotuian.web.validator;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.dotuian.web.form.LoginForm;

public class LoginFormValidator implements Validator {

    public boolean supports(Class<?> clazz) {
        return clazz.equals(LoginForm.class);
    }

    public void validate(Object target, Errors errors) {

        ValidationUtils.rejectIfEmpty(errors, "username", "ERROR001", new Object[]{"姓名"});  
        ValidationUtils.rejectIfEmpty(errors, "password", "ERROR001", new Object[]{"密码"});
        
        if(!errors.hasErrors()){
            LoginForm user = (LoginForm)target;  
            int length = user.getUsername().length();
            if (length > 10 || length <6 ) {
                errors.rejectValue("username", "ERROR004", new Object[]{"姓名","6","10"}, "");
            }
            
            length = user.getPassword().length();
            if (length > 10 || length <6 ) {
                errors.rejectValue("password", "ERROR004", new Object[]{"密码","6","10"}, "");
            }
        }

    }

}
