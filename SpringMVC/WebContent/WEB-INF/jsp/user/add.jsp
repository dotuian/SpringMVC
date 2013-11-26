<%@page language="java" contentType="text/html; charset=UTF-8"pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  

<html>
<head>
<TITLE>User Index Page</TITLE>

<jsp:include page="../common/header.jsp"></jsp:include>

</head>
<body>

    <!-- 菜单栏 -->
    <jsp:include page="../common/menu.jsp">
        <jsp:param name="activePage" value="addUser" />
    </jsp:include>


	<div class="container">

		<div class="page-header">
			<h1>Panels</h1>
		</div>
        <div class="row">
            <div class="col-sm-4">

				<form:form method="post" commandName="userForm">
                  <!--  <form:errors path="*" cssClass="error" /> -->
                  
				  <div class="form-group">
				    <label for="username">UserName</label>
				    <form:input path="username" class="form-control" placeholder="UserName"/>
				    <form:errors path="username" cssClass="error"/>  
				  </div>
				  
				  <div class="form-group">
				    <label for="password">Password</label>
				    <form:password path="password" class="form-control" placeholder="Password"/>
				    <form:errors path="password" cssClass="error"/>
				  </div>
				  
				  <div class="form-group">
				    <label for="sex1">Sex</label><br/>
				    <label class="radio-inline">
    				    <form:radiobutton path="sex" value="1"/>Male
				    </label>
				    <label class="radio-inline">
				        <form:radiobutton path="sex" value="0"/>Female
				    </label><br/>
				    <form:errors path="sex" cssClass="error"/>
				  </div>
				  
                  <div class="form-group" >
                    <label for="birthday">Birthday</label>
                    <form:select path="year" items="${years}" class="span2"/>
                    <form:select path="month" items="${months}" class="span2"/>
                    <form:select path="day" items="${days}" class="span2"/>
                    <form:errors path="birthday" cssClass="error" />
                  </div>

                  <div class="form-group">
                    <label for="age">Salary</label>
					<form:select path="salary" class="form-control"> 
						<form:option value="" label="----------------"/> 
						<form:options items="${salaryList}" itemValue="level" itemLabel="value"/> 
					</form:select>
					<form:errors path="salary" cssClass="error"/>
                  </div>

                  <div class="form-group">
                    <label for="hobby">Hobby</label><br/>
                    <c:forEach items="${hobbyMap}" var="hobby">
	                    <label class="checkbox-inline">
	                       <form:checkbox path="hobby" value="${hobby.key}"/>${hobby.value} 
						</label> 
                    </c:forEach><br/> 
                    <form:errors path="hobby" cssClass="error"/>
                  </div>

				  <div class="form-group">
				    <label for="memo">memo</label>
				    <form:textarea path="memo" class="form-control" rows="3" />
				    <form:errors path="memo" cssClass="error"/>
				  </div>
				  
				  <button type="submit" class="btn btn-default">Submit</button>
				  
				</form:form>
           </div>
        </div>













      <hr>

      <footer>
        <p>&copy; Company 2013</p>
      </footer>


	</div>


</body>