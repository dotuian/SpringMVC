<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<TITLE>Home Page</TITLE>

<jsp:include page="common/header.jsp"></jsp:include>

<script type="text/javascript">
$(document).ready(function() {

    crunchifyAjax = function crunchifyAjax() {
        $.ajax({
            url : 'ajax/ajaxtest1.json',
            type : "get", 
            success : function(data) {
                $('#result1').html(data);
            }
        });
        
        $.ajax({
            url : 'ajax/ajaxtest2.json',
            type : "get",
            dataType : 'json',
            success : function(data) {
                $('#result2').html(JSON.stringify(data.result));
            }
        });
    };

    crunchifyAjax();
    
    
    $("#test3").change(function(){
    	console.log($(this).val());
        $.ajax({
            url : 'ajax/ajaxtest3.json',
            data : {'param' : $(this).val()},
            dataType : 'json',
            success : function(data) {
                $('#result3').html(JSON.stringify(data.result));
            }
        });
    	
    });
    
    $("#test4").change(function(){
        console.log($(this).val());
        $.ajax({
            url : 'ajax/ajaxtest4.json',
            data : {'param' : $(this).val()},
            async : false,   //禁止ajax的异步操作，使之顺序执行。 
			dataType : 'json',
			success : function(data) {
				$('#result4').html(JSON.stringify(data));
			}
		});

	});

})
</script>

</head>

<body>

	<!-- 菜单栏 -->
	<jsp:include page="common/menu.jsp">
		<jsp:param name="activePage" value="home" />
	</jsp:include>


	<div class="container theme-showcase">
		Welcome ! this is home page .

        <div class="page-header">
            <h1>返回纯字符串类型</h1>
        </div>
        <div class="row">
            <div id="result1"></div>
        </div>
        
        
        <div class="page-header">
            <h1>返回对象类型</h1>
        </div>
        <div class="row">
            <div id="result2"></div>
        </div>        
		
        <div class="page-header">
            <h1>传递参数(返回Map)</h1>
        </div>
        <div class="row">
            <input type="text" id="test3" name="param3">
            <div id="result3"></div>
        </div>        

        <div class="page-header">
            <h1>传递参数(返回List)</h1>
        </div>
        <div class="row">
            <input type="text" id="test4" name="param4">
            <div id="result4"></div>
        </div>       






		<footer>
			<p>&copy; Company 2013</p>
		</footer>


	</div>


</body>
</html>