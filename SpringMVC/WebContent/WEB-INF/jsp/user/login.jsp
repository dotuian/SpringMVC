<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html>
<head>
<TITLE>User Index Page</TITLE>

<jsp:include page="../common/header.jsp"></jsp:include>

<script type="text/javascript">
</script>

<style type="text/css">
body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>

</head>

<body>
    <div class="container">
    
		<form:form method="post" commandName="loginForm" class="form-signin" action="http://192.168.0.80:8080/SpringMVC/j_spring_security_check" >
			<h2 class="form-signin-heading">User Login</h2>
			
            <c:if test="${param.error == 'true'}">
                <div class="alert alert-danger"><spring:message code="ERROR005" /></div>
            </c:if>
			
			<div class="form-group">
				<label for="j_username"><spring:message code="page.username"/>:</label>
				<form:input path="j_username" class="form-control" placeholder="UserName" />
				<form:errors path="j_username" cssClass="error"/>  
			</div>        
			<div class="form-group">
				<label for=j_password><spring:message code="page.password"/>:</label>
				<form:password path="j_password" class="form-control" placeholder="Password" />
				<form:errors path="j_password" cssClass="error"/>
			</div>
			
			<label class="checkbox">
                <input type="checkbox" name="_spring_security_remember_me" id="rememberMe"/><spring:message code="page.remember_me"/>
			</label>
			
			
			<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
		</form:form>
    </div>

</body>
</html>