<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<html>
<head>
<title>Exception Page</title>

<jsp:include page="../common/header.jsp"></jsp:include>

</head>
<body>


<div class="alert alert-danger">
    <h1>Exception</h1>
	<pre>
	<%
		Exception e = (Exception)request.getAttribute("exception");   
	    e.printStackTrace();	    
		out.print(e.getMessage());   
	%>
	</pre>
</div>

</body>
</html>