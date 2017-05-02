<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<html xmlns="http://www.w3.org/1999/xhtml" lang="en-IN" >

<head>
<link rel="icon" type="image/png" href="<%=request.getContextPath()%>/images/shop.png">
<title><tiles:insertAttribute name="title" /></title>
<meta http-equiv="content-language" content="en-IN">
<meta http-equiv="X-UA-Compatible" content="IE=9" />
<meta name="description" content="<tiles:insertAttribute name="metadesc" />" />
<meta name="keywords" content="<tiles:insertAttribute name="metakey" />" />
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Language" content="en" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="<%=request.getContextPath()%>/images/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

<link href="<%=request.getContextPath()%>/css/style.css" rel="stylesheet" type="text/css" media="all" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/jquery-ui.css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrap.css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrap.min.css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/fontello.css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/font-awesome.css">

<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery-2.1.1.min.js"></script>
<script src="<%=request.getContextPath()%>/js/jquery-ui.js"></script>
<script src="<%=request.getContextPath()%>/js/validate.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap.min.js"></script>

<script type="text/javascript">
	var contextJsPath = "<%=request.getContextPath()%>";
</script> 

</head>
<body class="front_page">
	<div class="overlay"></div>
	<div class="wide_layout">
		<!-- Header -->
<%-- 		<tiles:insertAttribute name="header" /> --%>
		
		<!-- Body Page -->
		<tiles:insertAttribute name="body" />
		
		<!-- Footer Page -->
<%-- 		<tiles:insertAttribute name="footer" /> --%>
	</div>
	<div class="modal"><!-- Place at bottom of page --></div>
	<div class="modalplain"><!-- Place at bottom of page --></div>
	<div class="modalempty"><!-- Place at bottom of page --></div>
	<div class="modalelearn">
		
	</div>
</body>
</html>