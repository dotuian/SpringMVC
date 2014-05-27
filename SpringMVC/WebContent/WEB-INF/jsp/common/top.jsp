<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@page import="org.springframework.security.core.context.SecurityContextHolder" %>


<!-- top begin -->
<div class="top">
    <div class="fl pl15">
        <img src="" alt="×××系统">
    </div>
    <div class="top_account fr pr15">
        <form name="loginForm" method="post" action="#">
        <span class="vb">2013-11-26 16:57</span>
        <span class="pl10 vb">业代00119</span>
        <span class="plr15 vb">欢迎您</span>
        <span class="plr15 vb">
            <input type="submit" name="exe_logout" value="&emsp;" onclick="submitOnlyOnce()" class="btn_logout vb">
        </span>
        </form>
    </div>
</div>
<!-- top end -->


