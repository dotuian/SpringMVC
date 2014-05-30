package com.dotuian.common.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

public class LoginSuccessHandler implements AuthenticationSuccessHandler{
    
    Logger log = Logger.getLogger(LoginFailureHandler.class);
    
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
            HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException {

        log.debug("===== onAuthenticationSuccess =====");
        
//        response.sendRedirect(request.getContextPath() + "/loginSuccess.do?url=" + request.getParameter("url"));

    }

}
