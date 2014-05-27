<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
<TITLE>Template</TITLE>

<!-- jQuery -->
<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>

<link href="<%=request.getContextPath()%>/css/template.css?<%=System.currentTimeMillis()%>" rel="stylesheet" />

<script type="text/javascript">
$(document).ready(function() {

})
</script>

</head>
<body>

<div id="header">
</div>

<div id="wrapper">
    
    
    <div id="container">
        <div id="sidebar">aa</div>
        
        <div id="content">bb</div>
    </div>
    
    
</div>

    
    <div id="footer">
        dd
    </div>
    
    
</body>
</html>