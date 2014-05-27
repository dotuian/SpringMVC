<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html>
<head>
<TITLE>User Login Page</TITLE>

<link href="<%=request.getContextPath()%>/css/login.css" rel="stylesheet" />

<script type="text/javascript">
</script>

<style type="text/css">
</style>

</head>

<body class="login">
    <div id="container" style="max-width: 480px">
        
        <div id="header" class="group">
            <h2 id="logo"><p>
                <a href="#">用户登录</a></p>
            </h2>
            <div id="account-nav">
                <p>&nbsp;</p>
            </div>
        </div>

        <div id="content">
            <c:if test="${param.error == 'true'}">
                <div id="error">
                    <ul>
                        <li><spring:message code="ERROR005" /></li>
                    </ul>
                </div>
            </c:if>
            
            <form:form method="post" commandName="loginForm" class="form-signin" action="http://192.168.0.80:8080/SpringMVC/j_spring_security_check" >
                <div class="field text-field">
                    <label for="j_username"><spring:message code="page.username"/>:</label>
                    <form:input path="j_username" class="text-field" placeholder="UserName" size="30" />
                    <form:errors path="j_username" cssClass="error"/>  
                </div>
                
                <div class="field text-field">
                    <label for=j_password><spring:message code="page.password"/>:</label>
                    <form:password path="j_password" class="text-field" placeholder="Password" size="30"/>
                    <form:errors path="j_password" cssClass="error"/>
                </div>
                <div class="field">
                    <label>
                       <input type="checkbox" name="_spring_security_remember_me" id="rememberMe"/><spring:message code="page.remember_me"/>
                    </label>
                </div>
                <div class="actions">
                    <input class="button" name="commit" type="submit" value="Login">
                </div>
            </form:form>
        </div>

        <div id="footer-container">
            <div id="footer" class="group">
                <p></p>
            </div>
        </div>
    </div>

</body>
</html>