package com.dotuian.common.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

public class LoginFailureHandler implements AuthenticationFailureHandler {
    
    Logger log = Logger.getLogger(LoginFailureHandler.class);
    
    
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException auth)
            throws IOException, ServletException {
        log.debug("===== onAuthenticationFailure =====");
        
        response.sendRedirect(request.getContextPath() + "/loginFailure.do?error=" + auth.getMessage() + "&url=" + request.getParameter("url"));
    }

}
