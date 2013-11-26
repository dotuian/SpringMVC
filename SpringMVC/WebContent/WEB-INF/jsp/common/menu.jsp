<%@page language="java" contentType="text/html; charset=UTF-8"pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@page import="org.springframework.security.core.context.SecurityContextHolder" %>

<c:set var="activePage" value="${param.activePage}"/>

<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Bootstrap theme</a>
        </div>
        
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
                <!--  -->
				<c:choose>
					<c:when test="${activePage == 'home'}">
					   <li class="active"><a href="<%=request.getContextPath()%>/index.do">Home</a></li>
					</c:when>
					<c:otherwise>
					   <li><a href="<%=request.getContextPath()%>/index.do">Home</a></li>
					</c:otherwise>
				</c:choose>

                <!--  -->
                <!--  
                <c:choose>
                    <c:when test="${activePage == 'addUser'}">
                       <li class="active"><a href="<%=request.getContextPath()%>/user/addUser.do">User</a></li>
                    </c:when>
                    <c:otherwise>
                       <li><a href="<%=request.getContextPath()%>/user/addUser.do">User</a></li>
                    </c:otherwise>
                </c:choose>
                -->
                
                <li class="dropdown" >
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">User <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li class="active" ><a href="<%=request.getContextPath()%>/user/index.do">用户名单</a></li>
                        <li><a href="<%=request.getContextPath()%>/user/addUser.do">添加用户</a></li>
                    </ul>
                </li>
				
                <!--  -->
                <li><a href="#contact">Contact</a></li>


				<li class="dropdown">
				    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
					<ul class="dropdown-menu">
						<li><a href="#">Action</a></li>
						<li><a href="#">Another action</a></li>
						<li><a href="#">Something else here</a></li>
						<li class="divider"></li>
						<li class="dropdown-header">Nav header</li>
						<li><a href="#">Separated link</a></li>
						<li><a href="#">One more separated link</a></li>
					</ul>
				</li>
			</ul>
            
            <!-- 菜单右侧 -->
			<ul class="nav navbar-nav navbar-right">
                <li><a href="#">Welcome,<sec:authentication property="principal.username" /></a></li>
				<li><a href="/SpringMVC/j_spring_security_logout">Logout(<%=SecurityContextHolder.getContext().getAuthentication().getName()%>)</a></li>
			</ul>
		</div>
      </div>
    </div>