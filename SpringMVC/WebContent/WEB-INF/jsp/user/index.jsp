<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<TITLE>User Index Page</TITLE>

<jsp:include page="../common/header.jsp"></jsp:include>

<script type="text/javascript">
    $(document).ready(function() {

        crunchifyAjax = function crunchifyAjax() {
            $.ajax({
                url : 'ajaxtest.do',
                success : function(data) {
                    $('#result').html(data);
                }
            });
        };

        crunchifyAjax();
    })
</script>

</head>

<body>

    <jsp:include page="../common/menu.jsp"></jsp:include>
    



    <div class="container">

      <div class="row row-offcanvas row-offcanvas-right">

        <div class="col-xs-12 col-sm-9">

          <div class="panel panel-primary">
              <!-- Default panel contents -->
              <div class="panel-heading">ユーザ一覧</div>
              <table class="table">
                  <tr>
                      <th>ID</th>
                      <th>名前</th>
                      <th>パスワード</th>
                      <th>誕生日</th>
                      <th>値</th>
                      <th>操作</th>
                  </tr>
                  <c:forEach var="stduent" items="${list}">
                      <tr>
                          <td>${stduent.id}</td>
                          <td>${stduent.username}</td>
                          <td>${stduent.password}</td>
                          <td>${stduent.birthday}</td>
                          <td>${stduent.salary}</td>
                          <td><a href="<c:url value="/sOPointTimerInitAction.do" />">delete</a></td>
                      <tr>
                  </c:forEach>
              </table>
          </div>


        </div>




        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
          <div class="list-group">
            <a href="#" class="list-group-item active">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
          </div>
        </div><!--/span-->
      </div><!--/row-->

      <hr>

      <footer>
        <p>&copy; Company 2013</p>
      </footer>

    </div><!--/.container-->









</body>
</html>