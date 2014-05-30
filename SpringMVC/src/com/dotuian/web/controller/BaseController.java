package com.dotuian.web.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class BaseController {
    
    
    
    
    /**
     * 登录用户的信息
     * @return
     */
    public String getLoginUserName() {
        String username = null;

        Object principal = SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
        }

        return username;
    }
    
}
