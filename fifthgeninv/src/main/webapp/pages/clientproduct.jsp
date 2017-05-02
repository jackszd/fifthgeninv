<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<style type=""></style>
<script>
$(document).ready(function() {
	
	$(".prouctcreate").hide();
	$(".searchdiv").hide();
	var productname = "";
	var productqty = "";
	var productno = "";
	var producttype = "";
	var productdescritpion = "";
	var productmanufacture = "";
	var productdate = new Date();
	var	productid = null;
	
	$.ajax({
		   
		// type:'GET',
		 url:'getproductlist.json', //get the list form the table
 		 contentType: false,
	     //dataType:'json' ,
		 success:function(data){
			 
			 var htmlStr = '';
			 htmlStr +='<tr><th>S.no</th><th>Product Name</th><th>Inventory</th><th>Product No</th><th>Product Category</th><th>product Date</th><th>Product Description</th><th>Product Vendors</th><th style="width:70px;">Edit</th></tr>'

			 for(var i=0;i< data.length;i++){
				 
				 var sno = i+1
				 var productid = data[i].product.id;
				 var productnme = data[i].product.productName;
				 var Stock = data[i].product.productQty;
				 var productnumber = data[i].product.productNo
				 var productcateory =data[i].product.category.categoryName;
				 var categoryid = data[i].product.category.categoryId
				 var prodctdate =  new Date(data[i].product.productDate)
				 var dateproduct = $.datepicker.formatDate("dd/mm/yy",new Date(prodctdate));
				 var productdescrption = data[i].product.productDescription;
				 var prodctvendrs = data[i].product.productVendor;
				 htmlStr += '<tr><td style="text-align:center;">'+sno+'</td><td class="prdctnme">'+productnme+'</td><td class="stk">'+Stock+'</td><td class="prdctnmbr">'+productnumber+'</td><td class="prdctctrgy" prdctcategry = '+categoryid+'>'+productcateory+'</td><td class="prdctdte">'+dateproduct+'</td><td class="prdctdescrptn">'+productdescrption+'</td><td class="prdctvndrs">'+prodctvendrs+'</td><td><input type="button" style="margin-left:8px;" prdctid = '+productid+' class="editbtn" value="Edit"</tr>'
// 				 htmlStr += '<tr><td>'+sno+'</td><td class="prdctnme">'+productnme+'</td><td class="stk">'+Stock+'</td><td class="prdctnmbr">'+productnumber+'</td><td class="prdctctrgy" prdctcategry = '+categoryid+'>'+productcateory+'</td><tdclass="prdctdte">'+prodctdate+'</td><td class="prdctdescrptn">'+productdescrption+'</td><td class="prdctvndrs">'+prodctvendrs+'</td><td><input type="button" prdctid = '+productid+' class="editbtn" value="Edit"</td></tr>'

					
			 }
			 $("#producttablediv").empty();
			 $("#producttablediv").append(htmlStr);
			 
			 
		 }
	
	})
	
	    

	$("#createprdct").click(function(){
		$(".prouctcreate").show();
		$("#createprdct").hide();
		$(".prodcttable").hide();
		$(".searchdiv").hide();
		$("#searchproduct").hide();
	});
	
	$("#bck").click(function(){
		$(".prouctcreate").hide();
		$("#createprdct").show();
		$(".prodcttable").show();
		$(".searchdiv").hide();
		$("#searchproduct").show();
		$("#searchbck").hide();
	});
	$("#searchbck").click(function(){
		$(".prouctcreate").hide();
		$("#createprdct").show();
		$(".prodcttable").show();
		$(".searchdiv").hide();
		$("#searchbck").hide()
		$("#searchproduct").show();
		
	})
	
		$("#saveprdct").click(function(){
			productmanufacture = $("#prdctmnfacture").val();
			productdescritpion = $("#prdctdescrption").val();
			producttype = parseInt($("#prdctctgry").val());
			productno= $("#prdctno").val();
			productqty= parseInt($("#prdctqty").val());
			productname= $("#prdctnme").val();
			productid = $("#productids").val();
			if(productid ==""){
				productid=null
			}
		
			if(productname == "" || productqty == "" || productno == "" || producttype == 0 || productdescritpion == "" || productmanufacture == ""){
				
				alert("please complete all the field")
			}
			
			else if($.isNumeric(productqty)){

				$.ajax({ //ave the new product,update the product
					'type' : 'post',
					'url' : 'saveproduct.json',
					'data':{
						
						id:productid,	
						 productName:productname,
						 productQty:productqty,
						 productNo:productno,
						 productDate: productdate,
						 productDescription :productdescritpion,
	 					 category :producttype,
						 productVendor :productmanufacture,
					},
					'success':function(data){
						if(data == true){
							var productstatus = 'ok' ;
							alert("product create successfully").then(function(productstatus){
								if(productstatus == 'ok'){
									location.reload();
								}
								
							})
							
						}
						else if(data == false){
							var productstatus = 'ok' ;
							alert("product update successfully").then(function(productstatus){
								if(productstatus == 'ok'){
									location.reload();
								}
								
							})
						}
					}
				})
				
				
			}
			else{
				alert("please give correct data");
			}
		
		
		})
		
$(document.body).on('click','.editbtn',function(){
	$(".prodcttable").hide();
	productmanufacture = $(this).parent().parent().find('.prdctvndrs').text();
	productdescritpion = $(this).parent().parent().find('.prdctdescrptn').text();
	producttype =$(this).parent().parent().find(".prdctctrgy").attr('prdctcategry');
	productno= $(this).parent().parent().find('.prdctnmbr').text();
	productqty= $(this).parent().parent().find('.stk').text();
	productname=$(this).parent().parent().find('.prdctnme').text();
	productid = $(this).attr('prdctid');
		
		$("#prdctmnfacture").val(productmanufacture);
		$("#prdctdescrption").val(productdescritpion);
		$("#prdctctgry").val(producttype);
		$("#prdctno").val(productno);
		$("#prdctqty").val(productqty);
		$("#prdctnme").val(productname);
		$("#productids").val(productid);
		$(".prouctcreate").show();
});
		$("#searchproduct").click(function(){
			$(".prouctcreate").hide();
			$(".prodcttable").hide();
			$(".searchdiv").show();
			$("#createprdct").hide();
			$("#searchproduct").hide();
			$("#searchbck").show();
		});
		
		$("#searchbtn").click(function(){
		
			var prodctnme = $("#productsearch").val();
			
			$.ajax({
				type:'post',
				url:'searchproduct.json',
				data:{
					productName :prodctnme
				},
				//contentType: "application/json",
			 //    dataType:"json" ,
				success:function(data){
					
					if(data.length == 0){
						$(".prdctsearch").hide();
						alert("No product Found or Please enter the correct name")
					}
					else{
						 var htmlStr = '';
						 htmlStr +='<tr><th>Product Name</th><th>Inventory</th><th>Product No</th><th>Product Category</th><th>product Date</th>Product Description<th></th><th>Product Vendors</th></tr>'
						for(var i = 0; i < data.length ; i++){
						var productid = data[i].id;
						 var productnme = data[i].productName;
						 var Stock = data[i].productQty;
						 var productnumber = data[i].productNo
						 var productcateory =data[i].category.categoryName;
						 var categoryid = data[i].category.categoryId;
						 var prodctdate =  new Date(data[i].productDate)
						 var dateproduct = $.datepicker.formatDate("dd/mm/yy",new Date(prodctdate));
						 var productdescrption = data[i].productDescription;
						 var prodctvendrs = data[i].productVendor;
						 htmlStr += '<tr><td class="prdctnme">'+productnme+'</td><td class="stk">'+Stock+'</td><td class="prdctnmbr">'+productnumber+'</td><td class="prdctctrgy" prdctcategry = '+categoryid+'>'+productcateory+'</td><td class="prdctdte">'+dateproduct+'</td><td class="prdctdescrptn">'+productdescrption+'</td><td class="prdctvndrs">'+prodctvendrs+'</td></tr>'
					}
						 $(".prdctsearch").empty();
						 $(".prdctsearch").append(htmlStr);
						 $(".prdctsearch").show();
					}
					
					
				}
			
			
			
			});
		
		
		});
});


</script>
<style>
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
</style>
</head>
<body>
	<div style="    margin-top: 40px;">
		<div class="createproduct" style="float: left;
    padding-right: 4px;    padding-left: 29px;">
			<button id="createprdct">Create Product</button>
		</div>
		<div>
		<button id="searchproduct">Search Product</button>
		</div>
		<div class="prouctcreate" style="    margin-top: 100px;
    margin-left: 300px;">
		<input type="hidden" id=productids value="">
			<div>
				<label>Product Name</label> <input type="text" id="prdctnme" value="" style="width: 250px;">
			</div>


			<div>
				<label> Product Quantity</label> <input type="text" id="prdctqty" value=""style="width: 250px;">
			</div>

			<div>
				<label> Product No</label> <input type="text" id="prdctno" value=""style="width: 250px;">
			</div>

			<div>
				<label>Product Type</label> <select id="prdctctgry" style="width: 250px;">
					<option value=0>please select category</option>
					<c:forEach items="${categorylist}" var="categorylists">
						<option value="${categorylists.id}">${categorylists.categoryName}</option>
					</c:forEach>
				</select>

			</div>

			<div>
				<label> Product Description</label>
				<textarea id="prdctdescrption" value=""style="width: 250px;"></textarea>
			</div>

			<div>
				<label>Product Manufacture</label> <input type="text" id="prdctmnfacture" value=""style="width: 250px;">
			</div>
			
			<div class="saveproduct" style="    margin-top: 10px;">
			<button id="saveprdct">Save Product</button>
			<button id="bck">Back</button>
		</div>
		</div>

	</div>
	<div class="prodcttable" style="width: 1034px;
    margin-left: 162px;margin-top: 50px;">
<table id ="producttablediv" >

</table>

</div>
<div class="searchdiv">
<div style="margin-top: 100px;
    margin-left: 130px;">
<label>Enter the product name</label>
<input type="text" id="productsearch" value="">
<button id="searchbtn">Search</button>
<button id="searchbck">Back</button></div>
<table class="prdctsearch" style="width: 1034px;
    margin-left: 162px;margin-top: 50px;">
</table>

</div>
</body>
</html>