<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<TITLE>User Index Page</TITLE>

<jsp:include page="../common/header.jsp"></jsp:include>

<script type="text/javascript">
</script>

</head>

<body>

    <!-- 菜单栏 -->
    <jsp:include page="../common/menu.jsp">
        <jsp:param name="activePage" value="userIndex" />
    </jsp:include>
    

    <div class="container theme-showcase">

        <div class="page-header">
            <h1>Panels</h1>
        </div>
         <table class="table">
             <tr>
                 <th>ID</th>
                 <th>姓名</th>
                 <th>出生年月日</th>
                 <th>性别</th>
                 <th>操作</th>
             </tr>
             <c:forEach var="stduent" items="${list}">
                 <tr>
                     <td>${stduent.id}</td>
                     <td>${stduent.username}</td>
                     <td>${stduent.birthday}</td>
                     <td>${stduent.sex}</td>
                     <td>
                        <a href="<%=request.getContextPath()%>/user/editUser.do">Edit</a>
                        <a href="<%=request.getContextPath()%>/user/deleteUser.do">Delete</a>
                     </td>
                 <tr>
             </c:forEach>
         </table>

      <hr>

      <footer>
        <p>&copy; Company 2013</p>
      </footer>


    </div>


</body>
</html>