<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<TITLE>Home Page</TITLE>

<jsp:include page="common/header.jsp"></jsp:include>

<script type="text/javascript">
</script>

</head>

<body>

	<!-- 菜单栏 -->
	<jsp:include page="common/menu.jsp">
		<jsp:param name="activePage" value="home" />
	</jsp:include>


	<div class="container theme-showcase">
		Welcome ! this is home page .

		<hr>

		<footer>
			<p>&copy; Company 2013</p>
		</footer>


	</div>


</body>
</html>