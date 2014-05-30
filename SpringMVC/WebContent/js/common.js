// Ajax调用全局处理
$(function(){
    // 设置jQuery Ajax全局的参数
    $.ajaxSetup({
        type: "POST",
        error: function(jqXHR, textStatus, errorThrown){
            switch (jqXHR.status){
                case(500):
                    alert("服务器系统内部错误");
                    break;
                case(401):
                    alert("未登录");
                    break;
                case(403):
                    alert("无权限执行此操作");
                    break;
                case(408):
                    alert("请求超时");
                    break;
                default:
                	console.log("未知错误");
            }
        }, 
        success: function(data){

        }
    });
});



var isFirstTime = true;

/*
 * 多重送信防止(ダブルクリックなど)用処理
 * 初回実行時のみ true を返す。
 * 使用例:
 * <html:submit property="submit" value="登録ボタン" onclick="return(processSubmit())" />     ->一般画面遷移
 * <html:submit property="submit" value="登録ボタン" onclick="return(processSubmit(true))" /> ->SubWindow画面遷移
 * 修正内訳
 * 2006年6月26日-グォンウンチョル(サブウィンドウフラグもセットするように修正する。)
 */
function submitOnlyOnce(isSubWindow) {
	if(isFirstTime) {
		try{
			var obj = document.getElementById("SUB_WINDOW_MODE");
	  		if(isSubWindow){
  				obj.value = isSubWindow;
  				document.forms[0].target='_blank';
  				isFirstTime = true;
  			}else{
  				obj.value = false;
  				document.forms[0].target='_self';
  				isFirstTime = false;
  			}
  		}catch(e){}
		return true;
	}else return false;
}



/************************************************************
 * 函数名：browseFolder
 * 作  用：选择图片，在画面上显示图片
 * 参  数：无
 * 实用例：onClick="browseFolder();"
 ************************************************************/
function browseFolder() {

    var prams = document.getElementById("employeeNo").value;

    var uploadUrl = window.showModalDialog('../common/portraitUpload?exe_showDialog', prams,'status:no;scroll:no;');
    var head = document.getElementById("head");
    if (uploadUrl != "") {
        head.src = uploadUrl + "?" + parseInt(Math.random() * 100000);
    }
}

/******************************************************************************
 * 関数名：navi
 * 引　数：img … 画像(imgタグ)のオブジェクト
 *         work … 表示する画像の名称
 *         flg … マウスポインタが画像の上に乗ったのか、離れたのか。(true…乗った)
 * 役　割：マウスポインタが乗った際に画像を強調表示する。
 * 使用例：onMouseOver="javascript:navi(this,'Home','true');" onMouseOut="javascript:navi(this,'Home','false');"
 *****************************************************************************/
function navi( img, work, flg ) {
  if ( flg == "true" ) {
    img.src = "../../../.reference/images/Menu_" + work + "_R.gif";
  } else {
    img.src = "../../../.reference/images/Menu_" + work + ".gif";
  }
}

/******************************************************************************
 * 関数名：Anchor
 * 引　数：anchor … 飛び先のアンカー名。
 * 役　割：指定されたアンカー先へ移動する。
 * 使用例：<a href="javascript:Anchor( '#tatemono' )">
 *****************************************************************************/
function Anchor( anchor ) {
    location.hash = anchor;
}

/******************************************************************************
 * 関数名：TraceEnter
 * 引　数：なし
 * 役　割：テキストボックス内でenterキーが押された場合でもサブミットしない、backspaceキーが押された。
 * 使用例：<BODY onkeydown="TraceEnter()">
 *****************************************************************************/
function TraceEnter() {

    if (window.event.srcElement.type != 'textarea'
      && window.event.srcElement.type != 'password') {
      if(window.event.keyCode=="13"){
          event.returnValue = false;
        }
    }

    if (window.event.srcElement.type != 'text'
        && window.event.srcElement.type != 'password'
        && window.event.srcElement.type != 'textarea') {
        if (window.event.keyCode == "8") {
            event.returnValue = false;
        }
    }
}

/******************************************************************************
 * 関数名：setUpdateMode
 * 引　数：画面が変更モードかどうか。
 * 役　割：画面が変更モードかどうかのフラグを設定する。
 * 使用例：<body onLoad="setUpdateMode( true );" ....>
 *         updateMode = falseの場合は、設定する必要なし。(default = false)
 *****************************************************************************/
var updateMode = false;
function setUpdateMode( updateModeFlag ) {
  updateMode = updateModeFlag;
}

/******************************************************************************
 * 関数名：textValueChange
 * 引　数：対象のINPUT項目
 * 役　割：テキストの内容が変更された場合に、値の色を変更する。
 * 使用例：<input type="text" name="hoge" onKeyDown="textValueChange(this)">
 *****************************************************************************/
function textValueChange( obj ) {
  var eventId = window.event.keyCode;
  if ( ( eventId > 47 && eventId < 91 ) ||
       ( eventId > 95 && eventId < 112 ) ||
       ( eventId > 185 && eventId < 193 ) ||
       ( eventId > 218 && eventId < 227 ) ||
       eventId == 8 || eventId == 32 || eventId == 46 ) {
    if ( updateMode == true ) {
      obj.style.color = '#FF0000';
    }
  }
}

/******************************************************************************
 * 関数名：selectValueChange
 * 引　数：対象のSELECT項目
 * 役　割：選択項目の内容が変更された場合に、値の色を変更する。
 * 使用例：<select name="hoge" onChange="selectValueChange(this)">
 *****************************************************************************/
function selectValueChange(obj) {
  if ( updateMode == true ) {
    obj.style.color = '#FF0000';
  }
}
// AXT-080319-002：ID J.Watanabe ここまで //

/******************************************************************************
 * 関数名：getXMLHttp
 * 引　数：なし
 * 役　割：XMLHttpRequestオブジェクト(XMLHTTPオブジェクト)を取得する。
 * 使用例：var xmlHttp = getXMLHttp(); ※JavaScript内で使用する
 *****************************************************************************/
function getXMLHttp(){
  var A=null;
  try{
    A=new ActiveXObject("Msxml2.XMLHTTP")
  }catch(e){
    try{
      A=new ActiveXObject("Microsoft.XMLHTTP")
    } catch(oc){
      A=null
    }
  }
  if(!A && typeof XMLHttpRequest != "undefined") {
    A=new XMLHttpRequest()
  }
  return A
}

/******************************************************************************
 * 関数名：execute
 * 引　数：uri：実行するURI
 *         callBackFunction：実行した後に処理を行いたい関数
 * 役　割：指定されたURIへサブミットを行い、処理結果のHTMLを指定された関数へ
 *         渡します。
 * 使用例：execute( '/ajax/reference/emloyee', setEmployeeName );
 *****************************************************************************/
function execute( uri, callBackFunction ) {
    var xmlHttp = getXMLHttp();
    if ( xmlHttp ) {
        // Open XMLHttp Connection
        xmlHttp.open( "GET", uri );
        xmlHttp.onreadystatechange = function() {
            if ( xmlHttp.readyState == 4 && xmlHttp.responseText ) {
                callBackFunction( xmlHttp.responseText );
            }
        }
        ;
        xmlHttp.send(null);
    }
}

/******************************************************************************
 * 関数名：setHTML
 * 引　数：text：設定するテキスト(HTML文字列)
 * 役　割：ブラウザを判断し、指定されたspanオブジェクトにHTML文字列を設定する。
 *         IE4以上のブラウザ以外は対応していないため、特に何も行わない。
 * 使用例：setHTML( 'mySpan', 'AAAAAAA' );
 *****************************************************************************/
function setHTML( spanObjectName, text ) {

    if ( document.all ) {
        // IE4以上のブラウザ ⇒ OK
        document.all( spanObjectName ).innerHTML = text;
    } else {
        // IE以外のブラウザ ⇒ NG
    }

}

/******************************************************************************
 * 関数名：codeToName
 * 引　数：uri：実行するURI(パラメータ無し)
 *         paramName：コードのパラメータ名
 *         paramValue：コードのパラメータ値
 *         nameId：取得した名称の設定するSpanタグのID
 * 役　割：指定されたコードに一致する名称を取得し、指定されたSpanタグに設定します。
 * 使用例：codeToName( '/ajax/reference/emloyee', 'employeeNumber', '0001', setEmployeeName );
 *****************************************************************************/
function codeToName( uri, paramName, paramValue, nameId ) {
    if ( paramValue == "" ) {
        return;
    }
    var callBackFunction = function( text ) {
        setHTML( nameId, text );
    }
    execute( uri + '?' + paramName + '=' + paramValue, callBackFunction );
}

/******************************************************************************
 * 関数名：twoParamsSearch
 * 引　数：uri：実行するURI(パラメータ無し)
 *         paramName1 ：コードのパラメータ名1
 *         paramValue1：コードのパラメータ値1
 *         paramName2 ：コードのパラメータ名2
 *         paramValue2：コードのパラメータ値2
 *         nameId：取得した名称の設定するSpanタグのID
 * 役　割：指定された二つの引数に一致する名称を取得し、指定されたSpanタグに設定します。
 * 使用例：twoParamsSearch( '/ajax/reference/emloyee', 'employeeNumber', '0001', 'password', 'pass', setEmployeeName );
 *****************************************************************************/
function twoParamsSearch( uri, paramName1, paramValue1, paramName2, paramValue2, nameId ) {
    if ( paramValue1 == "" || paramValue2 == "" ) {
        return;
    }
    var callBackFunction = function( text ) {
        setHTML( nameId, text );
    }
    execute( uri + '?' + paramName1 + '=' + paramValue1 + '&' + paramName2 + '=' + paramValue2 , callBackFunction );
}

/******************************************************************************
 * 関数名：codeToSelect
 * 引　数：uri：実行するURI(パラメータ無し)
 *         paramName：コードのパラメータ名
 *         paramValue：コードのパラメータ値
 *         select：検索結果により選択済みにさせたいセレクトボックスオブジェクト
 * 役　割：指定されたパラメタに一致する値を取得し、その値に対応するセレクトボックスの項目があれば選択済みにする。
 * 使用例：codeToSelect( '/ajax/reference/emloyee', 'employeeNumber', '0001', employeeSelection );
 *****************************************************************************/
function codeToSelect( uri, paramName, paramValue, select ) {
    if ( paramValue == "" ) {
        return;
    }
    var callBackFunction = function( result ) {
        var i = 0;
        while(i < select.length){
            if(select[i].value == result){
                break;
            }
            i++;
        }
        if(select.length != i){
            select[i].selected = true;
        }
    }
    execute( uri + '?' + paramName + '=' + paramValue, callBackFunction );
}

/******************************************************************************
 * 関数名：checkSubWindowAndDoubleClick
 * 引　数：isSubWindow: サブウィンドウかどうか
 *         trueならばサブウィドウと判断され、
 *         それ以外ならば、そのままのウィンドウと判断だれる
 * 役　割：trueならばサブウィンドウが展開する
 *         falseならばそのままのウィンドウで処理を行う
 *         また、falseの場合のみダブルクリック制御を行う
 * 使用例：checkSubWindowAndDoubleClick(true),checkSubWindowAndDoubleClick(false)
 *****************************************************************************/
function checkSubWindowAndDoubleClick(isSubWindow) {
    var obj = document.getElementById("SUB_WINDOW_MODE");
    if(isSubWindow){
        obj.value = isSubWindow;
        document.forms[0].target='_blank';
    }else{
        obj.value = false;
        document.forms[0].target='_self';
        return doubleClickCheck();
    }
    return true;
}
/******************************************************************************
 * 関数名：doubleClickCheck
 * 役　割：ダブルクリックの制御を行い多重Submitが起こらないように制御する
 * 使用例：doubleClickCheck()
 *****************************************************************************/
var isFirstTime = true;
function doubleClickCheck(){
    if(isFirstTime){
        isFirstTime = false;
        return true;
    }else{
        return false;
    }
}

/******************************************************************************
 * 関数名：checkUploadSubmission
 * 引　数：form: ボタンが押されたForm
 *         method: 呼び出すActionのメソッド
 * 役　割：アップロード機能にて多重送信制御およびSubmitの送信を行う
 * 使用例：checkUploadSubmission(this.form, "exe_back"),
 *           checkUploadSubmission(this.form, "exe_upload")
 *****************************************************************************/
function checkUploadSubmission(form, method) {
    var beforeAction = form.action;
    var prefix = '?';
    if ( form.action.indexOf('?') != -1 ) {
        prefix = '&';
    }
    form.action += prefix + method + '=';
    try {
        if(isFirstTime) {
            form.submit();
            isFirstTime = false;
        }
    } catch (e) {
        alert( "不正なファイル名が指定されています。正しいファイル名を参照するか空にしてください。" );
        form.action = beforeAction;
    }
}

/******************************************************************************
 * 関数名：positionInfo
 * 引　数：object：位置を取得する対象
 * 役　割：渡された対象の座標や大きさを取得します。
 * 使用例：positionInfo( object );
 *****************************************************************************/
function positionInfo(object) {

  var p_elm = object;

  /******************************************************************************
  * 関数名：getElementLeft
  * 引　数：なし
  * 役　割：対象のx座標を取得します。
  * 使用例：var x = obj.getElementLeft();
  *****************************************************************************/
  this.getElementLeft = getElementLeft;
  function getElementLeft() {
    var x = 0;
    var elm;
    if(typeof(p_elm) == "object"){
      elm = p_elm;
    } else {
      elm = document.getElementById(p_elm);
    }
    while (elm != null) {
      x+= elm.offsetLeft;
      elm = elm.offsetParent;
    }
    return parseInt(x);
  }

  /******************************************************************************
  * 関数名：getElementWidth
  * 引　数：なし
  * 役　割：対象の幅を取得します。
  * 使用例：var width = obj.getElementWidth();
  *****************************************************************************/
  this.getElementWidth = getElementWidth;
  function getElementWidth(){
    var elm;
    if(typeof(p_elm) == "object"){
      elm = p_elm;
    } else {
      elm = document.getElementById(p_elm);
    }
    return parseInt(elm.offsetWidth);
  }

  this.getElementRight = getElementRight;
  function getElementRight(){
    return getElementLeft(p_elm) + getElementWidth(p_elm);
  }

  /******************************************************************************
  * 関数名：getElementTop
  * 引　数：なし
  * 役　割：対象のy座標を取得します。
  * 使用例：var y = obj.getElementTop();
  *****************************************************************************/
  this.getElementTop = getElementTop;
  function getElementTop() {
    var y = 0;
    var elm;
    if(typeof(p_elm) == "object"){
      elm = p_elm;
    } else {
      elm = document.getElementById(p_elm);
    }
    while (elm != null) {
      y+= elm.offsetTop;
      elm = elm.offsetParent;
    }
    return parseInt(y);
  }

  /******************************************************************************
  * 関数名：getElementHeight
  * 引　数：なし
  * 役　割：対象の高さを取得します。
  * 使用例：var height = obj.getElementHeight();
  *****************************************************************************/
  this.getElementHeight = getElementHeight;
  function getElementHeight(){
    var elm;
    if(typeof(p_elm) == "object"){
      elm = p_elm;
    } else {
      elm = document.getElementById(p_elm);
    }
    return parseInt(elm.offsetHeight);
  }

  /******************************************************************************
  * 関数名：getElementBottom
  * 引　数：なし
  * 役　割：対象の下端のy座標を取得します。
  * 使用例：ver bottom = obj.getElementBottom();
  *****************************************************************************/
  this.getElementBottom = getElementBottom;function getElementBottom(){
    return getElementTop(p_elm) + getElementHeight(p_elm);
  }
}

/******************************************************************************
 * 関数名：CalendarControl
 * 引　数：なし
 * 役　割：カレンダー関係の処理を行うメソッド群です。
 *****************************************************************************/
function CalendarControl() {
  var calendarId = 'CalendarControl';
  var currentYear = 0;
  var currentMonth = 0;
  var currentDay = 0;

  var selectedYear = 0;
  var selectedMonth = 0;
  var selectedDay = 0;
  var months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  var dateField = null;
  var originalDate = null;
  /******************************************************************************
  * 関数名：getProperty
  * 引　数：p_property：属性名
  * 役　割：id属性値がcalendarIdの値と一致する要素の
  *         p_propertyで指定した属性名を取得します。
  * 使用例：getProperty();
  *****************************************************************************/
  function getProperty(p_property){

    var p_elm = calendarId;
    var elm = null;

    if(typeof(p_elm) == "object"){
      elm = p_elm;
    } else {
      elm = document.getElementById(p_elm);
    }
    if (elm != null){
      if(elm.style){
        elm = elm.style;
        if(elm[p_property]){
          return elm[p_property];
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  }

  /******************************************************************************
  * 関数名：setElementProperty
  * 引　数：p_property：属性名
  *       ：p_value：設定する値
  *       ：p_elmId：対象のid属性値
  * 役　割：p_elmIdで指定したid属性値をもつ要素に、
  *         p_valueの値を持つp_property属性を追加します。
  * 使用例：setElementProperty('size', '10', 'id');
  *****************************************************************************/
  function setElementProperty(p_property, p_value, p_elmId){

    var p_elm = p_elmId;
    var elm = null;

    if(typeof(p_elm) == "object"){
      elm = p_elm;
    } else {
      elm = document.getElementById(p_elm);
    }
    if((elm != null) && (elm.style != null)){
      elm = elm.style;
      elm[ p_property ] = p_value;
    }
  }

  /******************************************************************************
  * 関数名：setProperty
  * 引　数：p_property：追加する属性名
  *       ：p_value：追加する属性の属性値
  * 役　割：idの属性値がcalendarIdの値と一致する要素に、
  *         p_valueの値を持つp_property属性を追加します。
  * 使用例：setProperty('size', '10');
  *****************************************************************************/
  function setProperty(p_property, p_value) {

      setElementProperty(p_property, p_value, calendarId);
  }

  /******************************************************************************
  * 関数名：getDaysInMonth
  * 引　数：year：対象の年
  *       ：month：対象の月
  * 役　割：指定した年・月の日数を取得します。
  * 使用例：var days = getDaysInMonth(2007,8)
  *****************************************************************************/
  function getDaysInMonth(year, month) {

    return [31,((!(year % 4 ) && ( (year % 100 ) || !( year % 400 ) ))?29:28),31,30,31,30,31,31,30,31,30,31][month-1];
  }

  /******************************************************************************
  * 関数名：getDayOfWeek
  * 引　数：year：対象の年
  *       ：month：対象の月
  *       ：day：対象の日にち
  * 役　割：指定した日付の曜日を取得します。
  * 使用例：var weekDay = getDayOfWeek(2007, 3, 3);
  *****************************************************************************/
  function getDayOfWeek(year, month, day) {

    var date = new Date(year,month-1,day)
    return date.getDay();
  }

  /******************************************************************************
  * 関数名：clearDate
  * 引　数：なし
  * 役　割：テキストボックスの内容を消去します。
  * 使用例：clearDate();
  *****************************************************************************/
  this.clearDate = clearDate;
  function clearDate() {
    dateField.value = '';
    hide();
  }

  /******************************************************************************
  * 関数名：setDate
  * 引　数：year：対象の年
  *       ：month：対象の月
  *       ：day：対象の日にち
  * 役　割：渡された日付を整形し、テキストボックスに表示します。
  * 使用例：setDate(2007, 3, 3);
  *****************************************************************************/
  this.setDate = setDate;
  function setDate(year, month, day) {

    if (dateField) {
          var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
          var selMonth = Number(month)-1;
        var monthStr = months[selMonth].toString();
        var dateString = year + padding0(monthStr) + padding0(day);
        dateField.value = dateString;
        hide();
    }
    return;
  }

  /******************************************************************************
  * 関数名：padding0
  * 引　数：date：対象の値
  * 役　割：渡された値が１桁だった場合、0をパディングします。
  * 使用例：var day = padding0('8');
  *****************************************************************************/
  function padding0(date) {
    if(date < 10) {
      date = "0" + date;
    }
    return date;
  }

  /******************************************************************************
  * 関数名：changeMonth
  * 引　数：change：増分
  * 役　割：現在カレンダーに表示している月を
  *         changeの数だけ進めたり戻したりします。
  * 使用例：changeMonth(1);
  *****************************************************************************/
  this.changeMonth = changeMonth;
  function changeMonth(change) {
    currentMonth += change;
    currentDay = 0;
    if(currentMonth > 12) {
      currentMonth = 1;
      currentYear++;
    } else if(currentMonth < 1) {
      currentMonth = 12;
      currentYear--;
    }

    calendar = document.getElementById(calendarId);
    calendar.innerHTML = calendarDrawTable();
  }

  /******************************************************************************
  * 関数名：changeYear
  * 引　数：change：増分
  * 役　割：現在カレンダーに表示している年を
  *         changeの数だけ進めたり戻したりします。
  * 使用例：changeYear(1);
  *****************************************************************************/
  this.changeYear = changeYear;
  function changeYear(change) {
    currentYear += change;
    currentDay = 0;
    calendar = document.getElementById(calendarId);
    calendar.innerHTML = calendarDrawTable();
  }

  /******************************************************************************
  * 関数名：getCurrentYear
  * 引　数：なし
  * 役　割：本メソッド実行時点の年を取得します。
  * 使用例：var year = getCurrentYear();
  *****************************************************************************/
  function getCurrentYear() {
    var year = new Date().getYear();
    if(year < 1900) year += 1900;
    return year;
  }

  /******************************************************************************
  * 関数名：getCurrentMonth
  * 引　数：なし
  * 役　割：本メソッド実行時点の月を取得します。
  * 使用例：var month = getCurrentMonth();
  *****************************************************************************/
  function getCurrentMonth() {
    return new Date().getMonth() + 1;
  }

  /******************************************************************************
  * 関数名：getCurrentDay
  * 引　数：なし
  * 役　割：本メソッド実行時点の日にちを取得します。
  * 使用例：var day = getCurrentDay();
  *****************************************************************************/
  function getCurrentDay() {
    return new Date().getDate();
  }
  /******************************************************************************
  * 関数名：calendarDrawTable
  * 引　数：なし
  * 役　割：カレンダーを生成します。
  * 使用例：calendarDrawTable();
  *****************************************************************************/
  function calendarDrawTable() {

    var dayOfMonth = 1;
    var validDay = 0;
    var startDayOfWeek = getDayOfWeek(currentYear, currentMonth, dayOfMonth);
    var daysInMonth = getDaysInMonth(currentYear, currentMonth);
    var css_class = null; //CSS class for each day

    var table = "<table cellspacing='0' cellpadding='0' border='0'>";
    table = table + "<tr class='header'>";
    table = table + "  <td colspan='2' class='previous'><a onMouseDown='calendarControl.checkIn();' href='javascript:changeCalendarControlMonth(-1);'>&lt;</a> <a onMouseDown='calendarControl.checkIn();' href='javascript:changeCalendarControlYear(-1);'>&laquo;</a></td>";
    table = table + "  <td colspan='3' class='Calendartitle'>" + currentYear + "年" + months[currentMonth-1] + "</td>";
    table = table + "  <td colspan='2' class='next'><a onMouseDown='calendarControl.checkIn();' href='javascript:changeCalendarControlYear(1);'>&raquo;</a> <a onMouseDown='calendarControl.checkIn();' href='javascript:changeCalendarControlMonth(1);'>&gt;</a></td>";
    table = table + "</tr>";
    table = table + "<tr><th><font color='red'>日</font></th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th><font color='blue'>土</font></th></tr>";

    for(var week=0; week < 6; week++) {
      table = table + "<tr>";
      for(var dayOfWeek=0; dayOfWeek < 7; dayOfWeek++) {
        if(week == 0 && startDayOfWeek == dayOfWeek) {
          validDay = 1;
        } else if (validDay == 1 && dayOfMonth > daysInMonth) {
          validDay = 0;
        }

        if(validDay) {

          if (dayOfMonth == selectedDay && currentYear == selectedYear && currentMonth == selectedMonth) {
            css_class = 'current';
          } else if (dayOfWeek == 0 || dayOfWeek == 6) {
              if (dayOfWeek == 0) {
                  css_class = 'weekendend';
              } else {
                  css_class = 'weekend';
            }
          } else {
            css_class = 'weekday';
          }

          table = table + "<td><a class='"+css_class+"' onMouseDown='calendarControl.checkIn();' href='javascript:setCalendarControlDate("+currentYear+","+currentMonth+","+dayOfMonth+");'>"+dayOfMonth+"</a></td>";
          dayOfMonth++;
        } else {
          table = table + "<td class='empty'>&nbsp;</td>";
        }
      }
      table = table + "</tr>";
    }

    table = table + "<tr class='header'><th colspan='7' style='padding: 3px;'><a onMouseDown='calendarControl.checkIn();' href='javascript:clearCalendarControl();'>Clear</a> | <a href='javascript:calendarControl.hide();'>Close</a> | <a onMouseDown='calendarControl.checkIn();' href='javascript:setCalendarControlDate("+getCurrentYear()+","+getCurrentMonth()+","+getCurrentDay()+");'>Today</a></td></tr>";
    table = table + "</table>";

    return table;
  }



  /***************************************************
   * 関数名：setCurrentDate
   * 引　数：iYear：対象の年
   *         iMonth：対処の月
   *         iDay：対処の日にち
   * 役　割：指定した日は存在するのかチェックを行う
   * 使用例：checkDate(2007, 10, 10);
   ****************************************************/
  this.checkDate = checkDate;
  function checkDate( iYear, iMonth, iDay ) {

    // 月の正当性をチェックします。
    if ( ( iMonth > 0 ) && ( iMonth < 13 ) ) {
      var iMaxDay = 31;
      // 日の正当性をチェックします。
      switch ( iMonth ) {
        case 4 :
        case 6 :
        case 9 :
        case 11 : iMaxDay = 30;
                  break;
        case 2 :
                  // 4 で割り切れたら閏年
                  if ( ( iYear % 4 ) == 0 ) {
                    // ただし 100 で割り切れたら閏年ではない
                    if ( ( iYear % 100 ) == 0 ) {
                      // ただし 400 で割り切れたらうるう年
                      if ( ( iYear % 400 ) == 0 ) {
                        iMaxDay = 29;
                      } else {
                        iMaxDay = 28;
                      }
                    } else {
                      // 4 で割り切れて 100 で割り切れなければうるう年
                      iMaxDay = 29;
                    }
                  } else {
                    // 4 で割り切れなかったらうるう年では無し
                    iMaxDay = 28;
                  }
              break;
        default :
              break;
      }
      if ( ( iDay > 0 ) && ( iDay < iMaxDay + 1 ) ) {
        // 日付は正しい
        return true;
      }
    }
    return false;
  }

  /******************************************************************************
  * 関数名：show
  * 引　数：field：対象の値
  * 役　割：渡された値により、ハイライトする部分を変えます。
  *          ・fieldに値が入力されていた場合：その日付部分をハイライトします。
  *          ・値が入力されていなかった場合：現在の日付をハイライトします。
  * 使用例：show(field);
  *****************************************************************************/
  this.show = show;
  function show(field) {

    var can_hide = 0;

    if (dateField == field) {
      return;
    } else {
      dateField = field;
    }

    if(dateField) {
      try {
        checkFlag = false;
        if ( field.value.length == 8 ) {
            originalDate = new String(dateField.value);
            selectedDay = parseInt(originalDate.substring(8, 6), 10);
            selectedMonth = parseInt(originalDate.substring(6, 4), 10);
            selectedYear = parseInt(originalDate.substring(4, 0), 10);
            checkFlag = checkDate(selectedYear, selectedMonth, selectedDay);
        }
      }catch(e) {
      }
    }

    if (!(selectedYear && selectedMonth && selectedDay && checkFlag)) {

      selectedMonth = getCurrentMonth();
      selectedDay = getCurrentDay();
      selectedYear = getCurrentYear();

    } else {
        var strMonth = selectedMonth;
        var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
        selectedMonth = 0;

        for (var i = 0; i < 12 ; i++) {
          if (months[i] == strMonth) {
            selectedMonth = i;
            break;
          }
        }

        selectedMonth++;

    }

    currentMonth = selectedMonth;
    currentDay = selectedDay;
    currentYear = selectedYear;

    if(document.getElementById) {

      calendar = document.getElementById(calendarId);
      calendar.innerHTML = calendarDrawTable(currentYear, currentMonth);

      setProperty('display', 'block');

      var fieldPos = new positionInfo(dateField);
      var calendarPos = new positionInfo(calendarId);

      var x = fieldPos.getElementLeft();
      var y = fieldPos.getElementBottom();

      setProperty('left', x + "px");
      setProperty('top', y + "px");

      if (document.all) {
        setElementProperty('display', 'block', 'CalendarControlIFrame');
        setElementProperty('left', x + "px", 'CalendarControlIFrame');
        setElementProperty('top', y + "px", 'CalendarControlIFrame');
        setElementProperty('width', calendarPos.getElementWidth() + "px", 'CalendarControlIFrame');
        setElementProperty('height', calendarPos.getElementHeight() + "px", 'CalendarControlIFrame');
      }
    }
  }


  /***************************************************************************
   * 関数名：moveFocus
   * 引　数：なし
   * 役　割：カレンダーのポップアップ元テキストボックスにフォーカスを移します。
   *         これは、テキストボックスのonblurを再利用可能にし、
   *         カレンダーを非表示にする動作を正常に行うためのものです。
   * 使用例：moveFocus();
  ***************************************************************************/
  this.moveFocus = moveFocus;
  function moveFocus() {
    dateField.focus();
  }

  /******************************************************************************
  * 関数名：hide
  * 引　数：なし
  * 役　割：表示されているカレンダーを非表示にします。
  * 使用例：hide();
  *****************************************************************************/
  this.hide = hide;
  function hide() {
    if(dateField) {
      setProperty('display', 'none');
      setElementProperty('display', 'none', 'CalendarControlIFrame');
      if ( originalDate != dateField.value ) {
        if ( dateField.onkeydown ) {
          selectValueChange(dateField);
        }
      }
      dateField = null;
      originalDate = null;
    }
  }

  /*************************************************************************
  * 関数名：checkIn
  * 引　数：なし
  * 役　割：変数checkをオンにします。
  *         これは、カレンダー上で日付や年月変更が選択された際、
  *         カレンダーを非表示にしないことをhhide()に伝えるためのものです。
  * 使用例：checkIn();
  ************************************************************************/
  this.checkIn = checkIn;
  var check = null;
  function checkIn() {
    check = "chk";
  }

  /*************************************************************************
  * 関数名：checkOut
  * 引　数：なし
  * 役　割：変数checkをオフにします。
  *         これは、年月変更が選択された際にcheckしたフラグを再びオフに戻し、
  *         その後のイベント判定の妨げにならないようにするためのものです。
  * 使用例：checkIn();
  ************************************************************************/
  this.checkOut = checkOut;
  function checkOut() {
    check = null;
  }

  /*****************************************************************
  * 関数名：hhide
  * 引　数：なし
  * 役　割：フラグをチェックし、チェックがない場合は
  *         表示されているカレンダーを非表示にします。
  *         （hide()呼び出し。）
  *         チェックがある場合は、何も行いません。
  * 使用例：hhide();
  ******************************************************************/
  this.hhide = hhide;
  function hhide() {
    if( check != null) {
      return;
    } else {
      hide();
    }
  }

  /******************************************************************************
  * 関数名：visible
  * 引　数：なし
  * 役　割：テキストボックスの日付を取得し、返す。
  * 使用例：visible();
  *****************************************************************************/
  this.visible = visible;
  function visible() {
    return dateField;
  }

  this.can_hide = can_hide;
  var can_hide = 0;
}

/******************************************************************************
 * 関数名：showCalendarControl
 * 引　数：textField：テキストボックスの値
 * 役　割：テキストボックスの値をカレンダーに渡し、
 *       ：カレンダーを表示します。
 * 使用例：showCalendarControl('20070303');, showCalendarControl('');
 *****************************************************************************/
var calendarControl = new CalendarControl();
function showCalendarControl(textField) {
  calendarControl.checkOut();
  calendarControl.show(textField);
}

/****************************************************************************
 * 関数名：clearCalendarControl
 * 引　数：なし
 * 役　割：テキストボックスの内容を消去します。
 * 使用例：<a href="javascript:clearCalendarControl();">消去</a>
*****************************************************************************/
function clearCalendarControl() {
  calendarControl.clearDate();
}

/********************************************************
 * 関数名：hideCalendarControl
 * 引　数：なし
 * 役　割：カレンダーが表示されているとき、それを閉じます。
 * 使用例：<a href="javascript:hideCalendarControl();">閉じる</a>
*********************************************************/
function hideCalendarControl() {

  if (calendarControl.visible()) {
    calendarControl.hhide();
  }
}

/******************************************************************************
 * 関数名：setCalendarControlDate
 * 引　数：year：対象の年
 *       ：month：対象の月
 *       ：day：対象の日にち
 * 役　割：渡された日付を整形し、テキストボックスに表示します。
 * 使用例：<a href="javascript:setCalendarControlDate(2007, 3, 3)">日付</a>;
 *****************************************************************************/
function setCalendarControlDate(year, month, day) {
  calendarControl.setDate(year, month, day);
}

/******************************************************************************
 * 関数名：changeCalendarControlYear
 * 引　数：change：増分
 * 役　割：現在カレンダーに表示している年を
 *         changeの数だけ進めたり戻したりします。
 * 使用例：<a href="javascript:changeCalendarControlYear(1)">次の年へ</a>;
 *****************************************************************************/
function changeCalendarControlYear(change) {
  calendarControl.checkOut();
  calendarControl.moveFocus();
  calendarControl.changeYear(change);
}

/******************************************************************************
 * 関数名：changeCalendarControlMonth
 * 引　数：change：増分
 * 役　割：現在カレンダーに表示している月を
 *         changeの数だけ進めたり戻したりします。
 * 使用例：<a href="javascript:changeCalendarControlMonth(1)">次の月へ</a>;
 *****************************************************************************/
function changeCalendarControlMonth(change) {
  calendarControl.checkOut();
  calendarControl.moveFocus();
  calendarControl.changeMonth(change);
}

//document.write("<iframe id='CalendarControlIFrame' frameBorder='0' scrolling='no'></iframe>");
//document.write("<div id='CalendarControl'></div>");
/***************************************************
 * 関数名：setCurrentDate
 * 引　数：year：対象の年
 *         month：対処の月
 *         day：対処の日にち
 * 役　割：渡された日付を整形し、8桁の文字列として返します。
 * 使用例：setCurrentDate(2007, 10, 10);
 ****************************************************/
function setCurrentDate(year, month, day) {

      if (day<10) {
        day = '0' + day;
      }
      var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
      var selMonth = Number(month)-1;
      var monthStr = months[selMonth].toString();
      var dateString = year + monthStr + day;

    return dateString;
}

/*******************************************************************************
 * 関数名：selectToBind 引 数：uri：実行するURI(パラメータ無し) paramName：コードのパラメータ名
 * paramValue：コードのパラメータ値 nameId: 選択されたセレクトボックスオブジェクト 役
 * 割：指定されたパラメタに一致する値を取得し、その値に対応するセレクトボックスの項目をバインドする。 使用例：selectToBind(
 * '/ajax/reference/company', 'companySelect', companyId, groupId );
 ******************************************************************************/
function selectToBind(uri, paramName, paramValue, paramName2, nameId) {

    // 判断提交的值是否为空，或空格，若是则转换其为一具体的值，否则在uri中不会被识别
    if (paramValue == "" || paramValue == null || paramValue == " ") {
        paramValue = "0";
    }

    var callBackFunction = function(text) {
        var xDoc = new ActiveXObject("MSxml2.DOMDocument");

        xDoc.loadXML(text);

        var hideValue = xDoc.getElementsByTagName('value');
        var showText = xDoc.getElementsByTagName('text');

        if (nameId != "") {
            var select_root = document.getElementsByName(nameId)[0];
            select_root.options.length = 1;
            for ( var i = 1; i < hideValue.length; i++) {
                select_root.options[i] = new Option(
                        showText[i].firstChild.data,
                        hideValue[i].firstChild.data);
            }
            select_root.fireEvent('onchange');
        }
    }

    execute(uri + '?' + paramName + '=' + paramValue + '&' + paramName2 + '='
            + nameId, callBackFunction);
}

/*******************************************************************************
 * 函数名：refClear 参 数：elm： flg： 役 割： 使用例：<html:button property=""
 * styleId="eraser01" onclick="refClear('2', '1');"/>;
 ******************************************************************************/
function refClear(elm, flg) {
      if(flg == '1')
      {
        document.getElementById("familyName" + elm).value = "";
        document.getElementById("familyRelationship" + elm).value = "";
        document.getElementById("familyWorkPlace" + elm).value = "";
        document.getElementById("familyTel" + elm).value = "";
      }
      else if(flg == '2') {
        document.getElementById("insurancePlace" + elm).value = "";
        document.getElementById("insuranceStartDate" + elm).value = "";
        document.getElementById("insuranceEndDate" + elm).value = "";
        document.getElementById("insuranceMedicareCardFlag" + elm).checked = "";
        document.getElementById("insuranceProvidentFundNo" + elm).value = "";
      }
      else if(flg == '3')
      {
        document.getElementById("schoolName" + elm).value = "";
        document.getElementById("specialized" + elm).value = "";
        document.getElementById("intoSchoolDate" + elm).value = "";
        document.getElementById("leaveSchoolDate" + elm).value = "";
      }
      else if(flg == '4')
      {
        document.getElementById("companyName" + elm).value = "";
        document.getElementById("intoCompanyDate" + elm).value = "";
        document.getElementById("leaveCompanyDate" + elm).value = "";
        document.getElementById("departmentName" + elm).value = "";
        document.getElementById("postName" + elm).value = "";
      }
}


/******************************************************************************
 * 函数名：chgDisp
 * 参  数：tbodyId：
 * 役　割：
 * 使用例：<tbody id="addRowTable" style="display: inline;">
 *****************************************************************************/
function chgDisp(tbodyId){
    var styleObj = eval('document.all["tbody' + tbodyId + '"].style');
    var disp = styleObj.display;
    if( disp == 'inline'){
        disp = 'none';
    }else{
        disp = 'inline';
    }
    styleObj.display = disp;
    }


function chgButton(tbodyId){
    var buttonStyleObj = eval('document.all["button' + tbodyId + '"].style');
    var disp = buttonStyleObj.display;
    if( disp == 'inline'){
      disp = 'none';
    }else{
      disp = 'inline';
    }
    buttonStyleObj.display = disp;
  }

function showDate(){
    var date = new Date();
    var now = "日期：";
    now = now + date.getFullYear()+"年";
    now = now + (date.getMonth()+1)+"月";
    now = now + date.getDate()+"日 ";
    document.getElementById("nowDate").innerHTML = now;
    }
