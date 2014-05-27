<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
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

    <jsp:include page="common/top.jsp">
        <jsp:param name="activePage" value="home" />
    </jsp:include>

    <!-- context begin-->
    <div class="w100">

        <jsp:include page="common/left.jsp" />
    
        <jsp:include page="common/menu.jsp" />

        <!-- 二级菜单 -->
        <div class="secondMenu">
            <ul class="clearfix">
                <li><a href="#" class="checked">客户来店登记</a></li>
                <li><a href="#">来店信息确认</a></li>
                <li><a href="#">来店信息查询</a></li>
            </ul>
        </div>
        <!-- 二级菜单 -->
        
        <!-- 正文 -->
        <div class="right">
            <div class="name-tb  mt10">
                <span class="pl20 fb">Ajax Sample(返回纯字符串类型)</span>
            </div>
            <div class="dbsx">
                <ul>
                    <li>
                        <div id="result1"></div>
                    </li>
                </ul>
            </div>


            <div class="name-tb  mt10">
                <span class="pl20 fb">Ajax Sample(返回对象类型)</span>
            </div>
            <div class="dbsx">
                <ul>
                    <li>
                        <div id="result2"></div>
                    </li>
                </ul>
            </div>
            
            
            <div class="name-tb  mt10">
                <span class="pl20 fb">传递参数(返回Map)</span>
            </div>
            <div class="dbsx">
                <input type="text" id="test3" name="param3">
                <div id="result3"></div>
            </div>     

            
            
            <div class="name-tb  mt10">
                <span class="pl20 fb">传递参数(返回List)</span>
            </div>
            <div class="dbsx">
                <input type="text" id="test4" name="param4">
                <div id="result4"></div>
            </div>     
            
            
            
            
            
            
            

        </div>
        <!-- 正文 -->

    </div>



</body>
</html>