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
                <li><a href="<%=request.getContextPath()%>/sample/form.do">表单</a></li>
                <li><a href="<%=request.getContextPath()%>/sample/table.do" class="checked">表格</a></li>
                <li><a href="<%=request.getContextPath()%>/sample/search.do" >查询</a></li>
                <li><a href="<%=request.getContextPath()%>/sample/index.do">Other Style</a></li>
            </ul>
        </div>
        <!-- 二级菜单 -->
        
        <div class="right">
            <div class="name-tb mt10">
                <span class="pl20 fb">客户来店信息确认</span>
            </div>
            <form name="search" method="post" action="#"> 
                <div class="table-div">
                    <table cellpadding="0" cellspacing="0" class="tb-comm">
                        <thead>
                            <tr>
                                <td width="35px" nowrap="nowrap">序号</td>
                                <td width="120px" nowrap="nowrap">据点</td>
                                <td width="80px" nowrap="nowrap">发生日</td>
                                <td width="80px" nowrap="nowrap">客户姓名</td>
                                <td class="pd0" width="120px" nowrap="nowrap">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tb-bg-none">
                                        <tr>
                                            <td nowrap="nowrap">电话</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td nowrap="nowrap">通讯地址</td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="pd0" width="50px">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tb-bg-none">
                                        <tr>
                                            <td nowrap="nowrap">确度</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td nowrap="nowrap">试乘</td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="pd0">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tb-bg-none">
                                        <tr>
                                            <td nowrap="nowrap">来店类型</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td nowrap="nowrap">进出店时间</td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="pd0">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tb-bg-none">
                                        <tr>
                                            <td nowrap="nowrap">拟购车型</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td nowrap="nowrap">接待业代</td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="pd0">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tb-bg-none">
                                        <tr>
                                            <td nowrap="nowrap">报价</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td nowrap="nowrap">心理价位</td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="pd0">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tb-bg-none">
                                        <tr>
                                            <td nowrap="nowrap">对比车型</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td nowrap="nowrap">何时看车</td>
                                        </tr>
                                    </table>
                                </td>
                                <td width="100px" nowrap="nowrap">备注</td>
                                <td class="pd0">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tb-bg-none">
                                        <tr>
                                            <td nowrap="nowrap">追踪后有望确度</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td nowrap="nowrap">主管批阅</td>
                                        </tr>
                                    </table>
                                </td>
                                <td nowrap="nowrap">详细</td>
                            </tr>
                        </thead>
                        <tbody class="tb-comm-tbody">

                            <tr>
                                <td>1</td>
                                <input type="hidden" name="trackedDegreeDtoList[0].id" value="10000101">
                                <td>据点(北京市宸驰汽车贸易有限责任公司)</td>
                                <td>2013-12-05</td>
                                <td class="tdImportant">你好/</td>
                                <td class="pd0">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tbody-bg-none">
                                        <tr>
                                            <td>23668888888</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td>东城区</td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="pd0">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tbody-bg-none">
                                        <tr>
                                            <td>H</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td>N</td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="pd0">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tbody-bg-none">
                                        <tr>
                                            <td>介绍</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td>11:24- 11:24</td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="pd0">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tbody-bg-none">
                                        <tr>
                                            <td>N300</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td>你好</td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="pd0">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tbody-bg-none">
                                        <tr>
                                            <td>457.0</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td>457.0</td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="pd0">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tbody-bg-none">
                                        <tr>
                                            <td>-</td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td>2013-12-05</td>
                                        </tr>
                                    </table>
                                </td>
                                <td style="word-break: break-all;">-</td>
                                <td class="pd0">
                                    <table cellpadding="0" cellspacing="0" width="100%" class="tbody-bg-none">
                                        <tr>
                                            <td>
	                                            <select name="trackedDegreeDtoList[0].trackedDegreeId" ><option value="">--[请选择]--</option>
	                                                    <option value="1001001">H</option>
	                                                    <option value="1001002">A</option>
	                                                    <option value="1001003">B</option>
	                                                    <option value="1001004">C</option>
	                                                    <option value="1001005">OK</option>
	                                                    <option value="1001006">败</option>
	                                            </select>
                                            </td>
                                        </tr>
                                        <tr class="tr-bottom-none">
                                            <td>-</td>
                                        </tr>
                                    </table>
                                </td>
                                <td nowrap="nowrap">
                                    <a href="#" class="a_tb"> 详细 </a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="button">
                    <span>
                        <input type="button" name="" value="返回" id="back" class="btn btn-default" />
                    </span>
                    <span>
                        <input type="button" name="" value="确认" id="confirm" class="btn btn-primary" />
                    </span>
                </div>

            </form>
        </div>
        <!--right end-->

    </div>

    <jsp:include page="../common/footer.jsp" />

</body>
</html>