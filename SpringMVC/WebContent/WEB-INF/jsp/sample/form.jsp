<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<TITLE>Sample Page</TITLE>

<jsp:include page="../common/header.jsp"></jsp:include>

<script type="text/javascript">
$(document).ready(function() {


})
</script>

</head>

<body>

    <jsp:include page="../common/top.jsp" />

    <!-- context begin-->
    <div class="w100">

        <jsp:include page="../common/left.jsp" />
    
        <jsp:include page="../common/menu.jsp" >
            <jsp:param name="menu" value="sample" />
        </jsp:include>
        
		<!-- 二级菜单 -->
		<div class="secondMenu">
		    <ul class="clearfix">
		       <li><a href="<%=request.getContextPath()%>/sample/form.do" class="checked">表单</a></li>
		       <li><a href="<%=request.getContextPath()%>/sample/table.do">表格</a></li>
		       <li><a href="<%=request.getContextPath()%>/sample/search.do">查询</a></li>
		       <li><a href="<%=request.getContextPath()%>/sample/index.do">Other Style</a></li>
		    </ul>
		</div>
		<!-- 二级菜单 -->
        
        
        <!-- right begin -->
        <div class="right">
            <div class="name-tb  mt10">
                <span class="pl20 fb">表单示例</span>
            </div>
            <div class="dbsx">

            </div>
            
            <div class="customer">
                <p><span class="pl20">客户基本信息</span></p>
                <div class="customerDiv">
                    <ul>
                        <div class="clearfix">
                            <li class="li_w100">
                                <span class="w110">姓名：</span>
                                <input type="text" name="customerNm" maxlength="30" value="" class="textbox" placeholder="姓名" />
                            </li>
                        </div>
                        <div class="clearfix">
                            <li class="li_w100">
                                <span class="w110">性别：</span>
                                <input type="radio" name="sex" value="0" checked="checked" id="sex_1"><label for="sex_1" class="vm">男</label>
                                <input type="radio" name="sex" value="0" checked="checked" id="sex_2"><label for="sex_2" class="vm">女</label>
                            </li>
                            <li>
                                <span class="w110">出生年月日：</span>
                                <select class="textbox has-error">
                                  <option value="">----</option>
                                  <option value="1970">1970</option>
                                  <option value="1980">1980</option>
                                  <option value="1990">1990</option>
                                  <option value="2000">2000</option>
                                </select>年
                                <select class="textbox has-error">
                                  <option value="">---</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </select>月
                                <select class="textbox has-error">
                                  <option value="">---</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </select>日
                            </li>
                        </div>
                        <div class="clearfix">
                            <li>
                                <span class="w110">电话1：</span>
                                <input type="text" id="telephone1" name="telephone1" maxlength="13" value="" class="textbox" placeholder="电话号码" />
                            </li>
                            <li>
                                <span class="w110">电话2：</span>
                                <input type="text" id="telephone2" name="telephone2" maxlength="13" value="" class="textbox" placeholder="电话号码" />
                            </li>
                        </div>
                        <div class="clearfix">
                            <li>
                               <span class="w110">通讯地址：</span>
                               <input type="text" id="address" name="address" maxlength="50" value="" class="textbox" placeholder="通讯地址" size="48" />
                           </li>
                            <li>
                               <span class="w110">来店类型：</span>
                                <select class="textbox has-warning">
                                  <option value="0">----------</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </select>
                           </li>
                       </div>
                       <div class="clearfix">
                           <li class="li_w100">
                              <span class="w110">来店进出时间：</span>
                              <input type="text" id="starttime" name="starttime" value="" class="textbox" placeholder="开始时间" />
                              <span>～</span>
                              <input type="text" id="endtime" name="endtime" value="" class="textbox" placeholder="结束时间" />
                           </li>
                        </div>
                        <div class="clearfix">
                            <li>
                               <span class="w110">备注：</span>
                               <textarea class="textbox" rows="3" cols="50"></textarea>
                            </li>
                        </div>
                    </ul>
                </div>

                <p><span class="pl20">客户基本信息</span></p>
                <div class="customerDiv">
                    <ul>
                        <div class="clearfix">
                            <li class="li_w100">
                                <span class="w110">兴趣爱好：</span>
                                <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> 电子游戏
                                </label> 
                                <label class="checkbox-inline"> 
                                    <input type="checkbox" id="inlineCheckbox2" value="option2"> 登山
                                </label> 
                                <label class="checkbox-inline"> 
                                    <input type="checkbox" id="inlineCheckbox3" value="option3"> 电影
                                </label>
                            </li>
                            <li>
                                <span class="w110">电话2：</span>
                                <input type="text" id="telephone2" name="telephone2" maxlength="13" value="" class="textbox has-error" placeholder="电话号码" />
                            </li>
                        </div>
                        <div class="clearfix">
                            <li>
                               <span class="w110">通讯地址：</span>
                               <input type="text" id="address" name="address" maxlength="50" value="" class="textbox" placeholder="通讯地址" size="48" />
                           </li>
                            <li>
                               <span class="w110">来店类型：</span>
                                <select class="textbox has-warning">
                                  <option value="0">----------</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </select>
                           </li>
                       </div>
                       <div class="clearfix">
                           <li  class="li_w100">
                              <span class="w110">来店进出时间：</span>
                              <input type="text" id="starttime" name="starttime" value="" class="textbox" placeholder="开始时间" />
                              <span>～</span>
                              <input type="text" id="endtime" name="endtime" value="" class="textbox" placeholder="结束时间" />
                           </li>
                      </div>
                    </ul>
                </div>

                <div class="button">
                    <span>
                        <input type="button" name="" value="返回" id="back" class="btn btn-default" />
                    </span>
                    <span>
                        <input type="button" name="" value="确认" id="confirm" class="btn btn-primary" />
                    </span>
                </div>

        </div>
        <!-- right end -->


    </div>

    </div>

    
    <jsp:include page="../common/footer.jsp" />


</body>
</html>