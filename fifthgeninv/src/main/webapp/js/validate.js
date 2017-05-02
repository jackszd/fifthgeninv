/**
 * Author - Karthic
 */

var lengthValMap = {};

/*Register Member Page*/
lengthValMap["memberfirstname"] = "50";
lengthValMap["memberemailid"] = "50";
lengthValMap["memberpassword"] = "20";
lengthValMap["memberaddress1"] = "500";
lengthValMap["city"] = "30";
lengthValMap["memberpincode"] = "7";
lengthValMap["membercontactno"] = "20";


/*Register Merchant Page*/
lengthValMap["orgname"] = "50";
lengthValMap["merchantaddress1"] = "500";
lengthValMap["merchantpincode"] = "20";
lengthValMap["merchantcontactno"] = "20";
lengthValMap["accountNo"] = "20";
lengthValMap["merchanttan"] = "50";
lengthValMap["merchantpan"] = "20";
lengthValMap["merchantvat"] = "20";
lengthValMap["merchantservicetax"] = "50";
lengthValMap["merchantfname"] = "50";
lengthValMap["merchantpassword"] = "20";
lengthValMap["mobNum"] = "20";


/*Reset password Page*/
lengthValMap["password"] = "20";
lengthValMap["confirmpassword"] = "20";
lengthValMap["newConfirmpassword"] = "20";

/*Join group*/
lengthValMap["deliveryPincode"] = "7";

/*Create Product Page*/

lengthValMap["product_Name"] = "60";
lengthValMap["product_price"] = "10";
lengthValMap["product_stock"] = "5";
lengthValMap["product_desc"] = "1500";



/*Create Scheme Page*/
lengthValMap["scheme_name"] = "60";
lengthValMap["scheme_desc"] = "256";
lengthValMap["scheme_offer_desc"] = "256";

/*Account Setting Page */
lengthValMap["branch"] = "100";
lengthValMap["accountholdername"] = "50";
lengthValMap["accountnumber"] = "20";
lengthValMap["ifsc"] = "15";

var scrollFlg = false;
var initValidateFlg = true;
function validate(names, types, preferedErrMsg) {
	scrollFlg = true;
	initValidateFlg = true;
	var len = names.length;
	var successFlg = true;
	
	for ( var i = 0; i < len; i++) {
		var elem = names[i];
		var nameVal = $(elem).val();
		var typeVal = types[i];
		var status = validateElem(elem, nameVal, typeVal);
		if(status != '' && status != 'success' && successFlg == true) {
			successFlg = false;
		}
	}
	
	if (successFlg == true) {
		return "success";
	} else {
//		if(preferedErrMsg == undefined) {
//			$('.errorMsgDivCls').html('Please enter valid information');
//		} else {
//			$('.errorMsgDivCls').html(preferedErrMsg);
//		}
//		$('.coomonCls').hide();
//		$('.errorDiv').show();
		
		return "Problem In Input";
	}

}

function validateWithoutScroll(names, types) {
	scrollFlg = false;
	initValidateFlg = true;
	var len = names.length;
	var successFlg = true;
	for ( var i = 0; i < len; i++) {
		var elem = names[i];
		var nameVal = $(elem).val();
		var typeVal = types[i];
		var status = validateElem(elem, nameVal, typeVal);
		if(status != '' && status != 'success' && successFlg == true) {
			successFlg = false;
		}
	}
	
	if (successFlg == true) {
		return "success";
	} else {
//		if(preferedErrMsg == undefined) {
//			$('.errorMsgDivCls').html('Please enter valid information');
//		} else {
//			$('.errorMsgDivCls').html(preferedErrMsg);
//		}
//		$('.coomonCls').hide();
//		$('.errorDiv').show();
		
		return "Problem In Input";
	}

}

function validateSpecialCharacters(myPassword){
	var password=myPassword.val();
	var hasSpecials = /[~!,@#%&_\$\^\*\?\-]/.test(password);
	if(hasSpecials==true){
		bindHoverEvent(myPassword, "Special Characters Not Allowed");
		status = "Special Characters Not Allowed";
		(myPassword).css('background-color', '#FFDEDE');
		return "failure";
		}
	else{
		return "success";
		}
}

function validateSpace(myPassword){
	var password=myPassword.val();
	var hasSpace = /\s/g.test(password);
	 if(hasSpace==true){
		bindHoverEvent(myPassword, "Fields cannot have space");
		status = "Fields cannot have space";
		(myPassword).css('background-color', '#FFDEDE');
		return "failure";
	 }
	 else
		 {
		 return "success";
		 }
	
}



function validatePasswordCheck(myPassword){
	var password=myPassword.val();
	var validLength = /.{8}/.test(password);
	var hasCaps = /[A-Z]/.test(password);
	var hasNums = /\d/.test(password);
	var hasSpecials = /[~!,@#%&_\$\^\*\?\-]/.test(password);
	var hasSpace = /\s/g.test(password);

	if(validLength==false){
	bindHoverEvent(myPassword, "Length Too-Short");
	status = "Length Too-Short";
	(myPassword).css('background-color', '#FFDEDE');
	return "failure";
	}else if(hasCaps==false){
	bindHoverEvent(myPassword, "No Capital Letters");
	status = "No Capital Letters";
	(myPassword).css('background-color', '#FFDEDE');
	return "failure";
	}else if(hasNums==false){
	bindHoverEvent(myPassword, "No Numbers");
	status = "No Numbers";
	(myPassword).css('background-color', '#FFDEDE');
	return "failure";
	}else if(hasSpecials==false){
	bindHoverEvent(myPassword, "No special Characters");
	status = "No special Characters";
	(myPassword).css('background-color', '#FFDEDE');
	return "failure";
	}else if(hasSpace==true){
	bindHoverEvent(myPassword, "Password Cannot have space");
	status = "Password Cannot have space";
	(myPassword).css('background-color', '#FFDEDE');
	return "failure";
	}else{
	return "success";
	}
}

function confirmPasswordCheck(password,confirmpassword){
	if(password.val()==confirmpassword.val()){
		return "success";
	}else{
		bindHoverEvent(confirmpassword, "Password does not match");
		status = "Please enter same password";
		(confirmpassword).css('background-color', '#FFDEDE');
		return "failure";
	}
}

function validateByClass(names, types, preferedErrMsg) {
	initValidateFlg = true;
	var len = names.length;
	var successFlg = true;
	for ( var i = 0; i < len; i++) {
		var className = names[i];
		
		$.each($('.' + className), function(key, value) {
			var elem = $(this);
			var nameVal = $(elem).val();
			var typeVal = types[i];
			var status = validateElem(elem, nameVal, typeVal);
			
			if(status != '' && status != 'success' && successFlg == true) {
				successFlg = false;
			}
		});
		
	}
	
	if (successFlg == true) {
		return "success";
	} else {
//		if(preferedErrMsg == undefined) {
//			$('.errorMsgDivCls').html('Please enter valid information');
//		} else {
//			$('.errorMsgDivCls').html(preferedErrMsg);
//		}
//		$('.coomonCls').hide();
//		$('.errorDiv').show();
		
		return "Problem In Input";
	}

}




function validateElem(elem, nameVal, typeVal) {
	
	var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var numberRegex = /^[0-9]+$/;
	var alphaRegex = /^[A-Za-z]+$/;
	var alphaWithSpaceRegex = /^[ A-Za-z]+$/;
	var dateRegex = /^(0[1-9]|[12][0-9]|3[01])([\/-])(0[1-9]|1[012])\2(\d{4})$/;
	var urlRegex =/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
	var positiveNumberRegex=/(^[0-9]*[1-9]+[0-9]*\.[0-9]*$)|(^[0-9]*\.[0-9]*[1-9]+[0-9]*$)|(^[0-9]*[1-9]+[0-9]*$)/;
	var pancardRegex = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
    var panCharRegex = /([C,P,H,F,A,T,B,L,J,G])/;
	var status = '';
	$(elem).css('background-color', '');
	unBindHoverEvent(elem);
	if (typeVal == "alpha") {
		if (alphaRegex.test(nameVal) == false) {
			bindHoverEvent(elem, "Numbers, special characters and space not allowed");
			status = "Please enter a valid information";
			$(elem).css('background-color', '#FFDEDE');
		}
	} else if (typeVal == "alphaWithSpace") {
		if (alphaWithSpaceRegex.test(nameVal) == false) {
			bindHoverEvent(elem, "Numbers and special characters not allowed");
			status = "Please enter a valid information";
			$(elem).css('background-color', '#FFDEDE');
		}
	} else if (typeVal == "email") {
		if (emailRegex.test(nameVal) == false) {
			bindHoverEvent(elem, "Invalid emailid");
			status = "Please enter a valid emailid";
			$(elem).css('background-color', '#FFDEDE');
		}
	} else if (typeVal == "number") {
		if (numberRegex.test(nameVal) == false) {
			bindHoverEvent(elem, "Invalid number");
			status = "Please enter a valid number";
			$(elem).css('background-color', '#FFDEDE');
		}
	} else if (typeVal == "required") {
		if($(elem).is('select')) {
			if (  nameVal == "" || nameVal == null || nameVal == "0") {
				bindHoverEvent(elem, "Required Field");
				status = "Please fill the mandatory information";
				$(elem).css('background-color', '#FFDEDE');
			}
		} else {
			var a=nameVal.trim();
			if (a==""||a==null  || nameVal == "" || nameVal == null) {
				bindHoverEvent(elem, "Required Field");
				status = "Please fill the mandatory information";
				$(elem).css('background-color', '#FFDEDE');
			}
		}
	} else if (typeVal == "date") {
		if(dateRegex.test(nameVal) == false) {
			bindHoverEvent(elem, "Invalid Date");
			status = "Please enter a date in the format dd/mm/yyyy";
			$(elem).css('background-color', '#FFDEDE');
		}
	}  else if (typeVal == "url") {
		if(urlRegex.test(nameVal) == false) {
			bindHoverEvent(elem, "Invalid URL");
			status = "Please enter a valid URL";
			$(elem).css('background-color', '#FFDEDE');
		}
	} else if (typeVal == "pincodelength") {
		if(numberRegex.test(nameVal) == false || nameVal.length != 6) {
			bindHoverEvent(elem, "Invalid number Or Length is not 6");
			status = "Please enter a valid PIN code";
			$(elem).css('background-color', '#FFDEDE');
		}
	} else if (typeVal == "contactnolength") {
		if(numberRegex.test(nameVal) == false || nameVal.length != 10) {
			bindHoverEvent(elem, "Invalid number Or Length is not 10");
			status = "Please enter a valid Contact Number";
			$(elem).css('background-color', '#FFDEDE');
		}
	} else if (typeVal == "validPhone") {
		var phoneNoCountry = nameVal.trim();
		if(phoneNoCountry == "" || !$(elem).intlTelInput('isValidNumber')) {
			console.log($(elem).intlTelInput('getValidationError'));
			bindHoverEvent(elem, "Invalid Contact Number");
			status = "Please enter a valid Contact Number";
			$(elem).css('background-color', '#FFDEDE');
		}
	} else if (typeVal == "validPhoneNonRequire") {
		var phoneNoCountry = nameVal.trim();
		if(phoneNoCountry != "" && !$(elem).intlTelInput('isValidNumber')) {
			console.log($(elem).intlTelInput('getValidationError'));
			bindHoverEvent(elem, "Invalid Contact Number");
			status = "Please enter a valid Contact Number";
			$(elem).css('background-color', '#FFDEDE');
		}
	} else if (typeVal == "positiveNumber") {
		if (positiveNumberRegex.test(nameVal) == false) {
			bindHoverEvent(elem, "Invalid price");
			status = "Please enter a valid price";
			$(elem).css('background-color', '#FFDEDE');
		}
	} else if(typeVal == "dateAndAge"){
		if(dateRegex.test(nameVal) == false) {
			bindHoverEvent(elem, "Invalid Date");
			status = "Please enter a date in the format dd/mm/yyyy";
			$(elem).css('background-color', '#FFDEDE');
		} 
		else {
			 currDate = new Date();
			 currDay= currDate.getDate();
		     currMonth= currDate.getMonth()+1;
		     currYr = currDate.getFullYear();
		     
			 dob = nameVal.split('/');
		     dobDay = dob[0];
		     dobMonth = dob[1];
		     dobYr = dob[2];
		                
		     if(currMonth==dobMonth && currDay >= dobDay)
		         age = currYr - dobYr;
		     if(currMonth==dobMonth && currDay<dobDay)
		         age = currYr - dobYr-1;
		     if(currMonth>dobMonth)
		         age = currYr - dobYr;
		     if(currMonth<dobMonth)
		         age = currYr - dobYr -1;
		     if(age<18) {
		    	 bindHoverEvent(elem, "You should be 18 years and above to register");
				 status = "above 18 years";
				 $(elem).css('background-color', '#FFDEDE');
		     }
		}
	}else if(typeVal == "profilePicture"){
		var ext = nameVal.split('.').pop().toLowerCase();
		if(ext != ''){
			if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
				bindHoverEvent(elem, "Invalid file format");
				status = "Please upload a valid ImagememberProfilePhoto";
				$(elem).css('background-color', '#FFDEDE');
			}
		}
	} else if(typeVal == "stockval"){
		if (numberRegex.test(nameVal) == false) {
			bindHoverEvent(elem, "Invalid number");
			status = "Please enter a valid number";
			$(elem).css('background-color', '#FFDEDE');
		} else {
			var priceQty = $(elem).parent().find('.productQuantity').val();
			if (nameVal == 0 || nameVal % priceQty != 0) {
				bindHoverEvent(elem, "Quantity Does Not Match Stock");
				status = "Quantity No Match Stock";
				$(elem).css('background-color', '#FFDEDE');
			}
		}
	}else if(typeVal == "pan"){
          ObjVal = nameVal;
          var checkPanHolder = ObjVal.substring(3,4);
	      if (ObjVal.search(pancardRegex) == -1 || panCharRegex.test(checkPanHolder) == false) {
	        bindHoverEvent(elem, "Invalid Pan Card Details");
	  		 status = "Please enter Valid Pan Card Details";
	  		 $(elem).css('background-color', '#FFDEDE');
        }
	}else if(typeVal == "CST"){
		if(nameVal != ""){
			if (numberRegex.test(nameVal) == false) {
				bindHoverEvent(elem, "Invalid number");
				status = "Please enter a valid number";
				$(elem).css('background-color', '#FFDEDE');
			}
		}
		
	}else {
		status = "success";
	}
	
	if(status == "") {
		var elemId = $(elem).attr('id');
		var elemLengthVal = lengthValMap[elemId];
		if(!$(elem).is('select') && elemLengthVal != null && nameVal.length > elemLengthVal) {
			bindHoverEvent(elem, "Max Length Is : " + elemLengthVal);
			status = "Invalid Length";
			$(elem).css('background-color', '#FFDEDE');
		}
	}
	
	if(scrollFlg == true && status != "" && status != "success" && initValidateFlg == true) {
		$('html, body').animate({scrollTop: ($(elem).offset().top - 200)}, 500);
		initValidateFlg = false;
	}
	
	return status;
}

function bindHoverEvent(elem, showMessage) {
	
	$(elem).bind({
	    mouseover: function() {
	        $('<p class="customTooltip"></p>').text(showMessage).appendTo('body').fadeIn('slow');
	    },
	    mousemove: function(e) {
	    	var mousex = e.pageX + 20; //Get X coordinates
	        var mousey = e.pageY + 10; //Get Y coordinates
	        $('.customTooltip').css({ top: mousey, left: mousex });
	    },
	    mouseout: function() {
	        $('.customTooltip').remove();
	    }
	});
	
	$(elem).keypress(function(){
		$(this).css("background-color","");
	});
	
}

function unBindHoverEvent(elem) {
	$(elem).unbind('hover mousemove mouseout');
}

//URL FINDER
function urlParser() {
	$('.schemeDesc').each(function(index, elem) {
		var status_text = $(elem).html();
		var reg = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?", "g");
		if(reg.test(status_text)) {
	       var url = status_text.match(reg);
	       var splitLength = status_text.match(reg).length;
	       $('#urlHidden').val(url);
	       var str = '';
	       if(splitLength > 1){
	    	   var valSplit = $('#urlHidden').val();
	    	   var textSplit = valSplit.split(',');
	    	   for(var i=0; i<splitLength; i++){
					var multiply = i*2;
					var splitedVal = textSplit[i];
					var splited =  status_text.split(splitedVal);
					if(i<=0){
						str += splited[0];				    	   
						str += '<a href="'+splitedVal+'" target="_new" style="color: #FC7C5E;">'+splitedVal+'</a>';
						str += splited[1];
						$('#urlHidden').val(str);
					} else {
						var multiVal = $('#urlHidden').val();
						var newDesc = multiVal.match(reg);
						$('#descHidden').val(newDesc);
						var newDescTaken = $('#descHidden').val();
						var multiSplit = newDescTaken.split(",");
						var nextUrl = multiSplit[multiply];
						var nextDesc = $('#urlHidden').val();
						var nextSplit = nextDesc.split(nextUrl);
						var str = '';
						str += nextSplit[0];
						if(nextSplit[1] != '' || nextSplit[1] != null){
							str += '<a href="'+nextUrl+'" target="_new" style="color: #FC7C5E;">'+nextUrl+'</a>';
							str += nextSplit[1];
						} else {
							str += '<a href="'+nextUrl+'" target="_new" style="color: #FC7C5E;">'+nextUrl+'</a>';
						}
						$('#urlHidden').val(str);
					}
	    	   }
	       } else {
	    	   var valSplit = $('#urlHidden').val();
	    	   var textSplit = valSplit.split(',');
	    	   var splited = status_text.split(textSplit);
	    	   str = '';
	    	   str += splited[0];
	    	   str += '<a href="'+textSplit+'" target="_new" style="color: #FC7C5E;">'+textSplit+'</a>';
	    	   str += splited[1];
	       }
	       $(elem).html(str);
		}
	});
}

function setCookie(cname, cvalue, exdays) {
	var expires = '';
	if(exdays != '' && exdays != undefined) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    expires = "expires="+d.toUTCString();
	}
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function getCookieFromParent(cname) {
    var name = cname + "=";
    var ca = parent.document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function deleteCookie(cname) {
	document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function alert(output_msg, title_msg) {
	var defer = $.Deferred(); 
    if (!title_msg)
                    title_msg = 'ALERT BOX';

    if (!output_msg)
                    output_msg = 'No Message to Display.';
    
    var output = '<span style="font-size: 20px;font-weight: bold;color: #595959;font-style: italic;margin-left: 32px;">'+output_msg+'</span>';
    
    $('.header-top').css("z-index", "1");
    $('.topCls').hide();
    
	$('<div class="divtoalert" checkStatus="1" style="display: none;background-color:#e6f9ff;"></div>').appendTo('body');
	
	$('.divtoalert').html(output).dialog({
        title : title_msg,
        resizable : false,
        modal : true,
        width: '400px',
        height: 'auto',
        bgiframe: false,
        draggable: false,
        show: {effect: 'bounce', duration: 400},
        hide: {effect: 'fadeOut', duration: 400},
        dialogClass: 'myPosition',
        close: function () { 
            $(this).dialog('destroy');
            $('.divtoalert').remove();
            $('.header-top').html("sfgds");
            $('.header-top').css("z-index", "1999");
            $('.topCls').show();
            defer.resolve("ok");
        },
        buttons : {
            "ok" : function() {
                $(this).dialog("close");
                $('.divtoalert').remove();
                $('.header-top').css("z-index", "1999");
                $('.topCls').show();
                defer.resolve("ok");
            }
        }
    });
    	
    return defer.promise(); //important to return the deferred promise
}

function confirm(output_msg, title_msg) {
	var defer = $.Deferred(); 
    if (!title_msg)
                    title_msg = 'Confirm';

    if (!output_msg)
                    output_msg = 'No Message to Display.';
    
    var output = '<span style="font-size: 15px;font-weight: bold;color: #2F4F4F;text-transform: capitalize;">'+output_msg+'</span>';
    
    $('.header-top').css("z-index", "1");
    $('.topCls').hide();
    
	$('<div class="divtoalert" checkStatus="1" style="display: none;"></div>').appendTo('body');
	
	$('.divtoalert').html(output).dialog({
        title : title_msg,
        resizable : false,
        modal : true,
        width: '400px',
        height: 'auto',
        bgiframe: false,
        draggable: false,
        show: {effect: 'bounce', duration: 400},
        hide: {effect: 'fadeOut', duration: 400},
        dialogClass: 'myPosition',
        close: function () { 
            $(this).dialog('destroy');
            $('.divtoalert').remove();
            $('.header-top').css("z-index", "1999");
            $('.topCls').show();
//            defer.resolve("no");
        },
        buttons: {
            "Yes": function() {
            	$(this).dialog("close");
                $('.divtoalert').remove();
                $('.header-top').css("z-index", "1999");
                $('.topCls').show();
                defer.resolve("yes"); //on Yes click, end deferred state successfully with yes value
            },
            "No": function() {
            	$(this).dialog("close");
                $('.divtoalert').remove();
                $('.header-top').css("z-index", "1999");
                $('.topCls').show();
                defer.resolve("no"); //on No click end deferred successfully with no value
            }
        }
    });
    	
    return defer.promise(); //important to return the deferred promise
}

function confirm1(msg) {
    var defer = $.Deferred(); 
    $('<div>'+msg+'</div>').dialog({
            resizable: false,
            title: 'Confirm!',
            modal: true,
            width: '400px',
            height: 'auto',
            bgiframe: false,
            hide: { effect: 'scale', duration: 400 },
            close: function () { 
                $(this).dialog('destroy');
            },
            buttons: {
                "Yes": function() {
                    defer.resolve("yes"); //on Yes click, end deferred state successfully with yes value
                    $(this).dialog("close");
                },
                "No": function() {
                    defer.resolve("no"); //on No click end deferred successfully with no value
                    $(this).dialog("close");
                }
            }
        });
    return defer.promise(); //important to return the deferred promise
}

function alert1(msg) {
    var defer = $.Deferred(); 
    $('<div>'+msg+'</div>').dialog({
            resizable: false,
            title: 'Info',
            modal: true,
            width: '400px',
            height: 'auto',
            bgiframe: false,
            show: {effect: 'bounce', duration: 400},
            hide: { effect: 'fadeOut', duration: 400 },
            close: function () { 
                $(this).dialog('destroy');
            },
            draggable: true,
            overlay: 
            {
                backgroundColor: 'red',
                opacity: 0.65
            },
            buttons: {
                "Ok": function() {
                    defer.resolve("ok");
                    $(this).dialog("close");
                }
            }
        });
    return defer.promise(); //important to return the deferred promise
}

$(document).ready(function() {
	
	var fields = document.querySelectorAll('input[type="text"]');
	for (var i = 0; i < fields.length; i++) {
		if(fields[i].autocomplete != 'off') {
			fields[i].autocomplete="on";
		}
	}
	
	$("form").submit(function() {
		if(!$(this).hasClass('noload')) {
			$('.header-top').css('z-index', 1);
			$body = $("body");
			$body.addClass("loading");
		}
	});
	
	var wndHeight = window.innerHeight;
	var wndHeight = wndHeight - 86;
	$('.secondary_page_wrapper').css('min-height', wndHeight);
	
	$(document.body).on('click', '.menuIconCls .filterIconCls', function() {
		$body = $("body");
		$body.addClass("loadingempty");
	});
	
	$('.menuDivCls, .filtersCls').on({
		mouseenter: function() {
	    },
	    mouseleave: function() {
	    	$body = $("body");
			$body.removeClass("loadingempty");
		}
	});
	
	$('.modalempty').click(function() {
		$('.menuDivCls, .filtersCls').fadeOut(500);
		$body = $("body");
		$body.removeClass("loadingempty");
	});
	
	
	$('.tooltipCls').bind({
		mouseenter: function() {
	    	var messageVar = $(this).attr('message');
	    	var messageArr = messageVar.split("|");
	    	var htmlStr = '';
	    	for ( var idx = 0; idx < messageArr.length; idx++) {
	    		htmlStr += messageArr[idx] + "<BR>";
			}
	    	
	        $('<p class="tooltip-help"></p>').html(htmlStr).appendTo('body').fadeIn('slow');
	    },
	    mousemove: function(e) {
	    	var mousex = e.pageX - 10; //Get X coordinates
	        var mousey = e.pageY + 40; //Get Y coordinates
	        $('.tooltip-help').css({ top: mousey, left: (mousex-150) });
	    },
	    mouseout: function() {
	        $('.tooltip-help').remove();
	    }
	});
	
	$('.closeImg').click(function() {
		$(this).parent().fadeOut();
	});
	
	setTimeout(function() {
		$(".coomonCls").fadeOut("slow");
	}, 10000);
	
	paginationDiv();
	
//	var token = $("meta[name='_csrf']").attr("content");
//	if(token == undefined) {
//		token = $("meta[name='_csrf']", window.parent.document).attr("content");
//	}
//	
//	var header = $("meta[name='_csrf_header']").attr("content");
//	if(header == undefined) {
//		header = $("meta[name='_csrf_header']", window.parent.document).attr("content");
//	}
	
//	$(document).ajaxSend(function(e, xhr, options) {
//		xhr.setRequestHeader(header, token);
//	});
	
	$("form").submit(function(event) {
		var csrfFormToken = $('#gnpcsrftok').val();
		var csrfFormName = $('#gnpcsrftok').attr('name');
		
		var htmlStr = '<input type="hidden" name="'+csrfFormName+'" value="'+csrfFormToken+'" />'
		$(this).append(htmlStr);
	});
	
	$(document.body).on('click', '.dealProdCls', function() {
		var schemeId = $(this).attr('scm-data');
		var schemeName = $(this).attr('scm-data-nm');
		
		loadSchemeProdPage(schemeId, schemeName);
	});
	
	$(document.body).on('click', '.dealsSrchCls', function() {
		var categoryId = $(this).attr('cat-data');
		var categoryName = $(this).attr('cat-data-nm');
		
		loadDealsPage('', '', categoryId, categoryName);
	});
	
	loadMainMenu();
	
	$(window).resize(function () {
		loadMainMenu();
	});
	
});

String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'ig'), replace);
};

function loadDealsPage(pageNumber, schemeProductName, categoryId, categoryName) {
	
	var encodedCatName = "";
	if(categoryName != '' && categoryName != undefined) {
		encodedCatName = encodeURIComponent(categoryName);
		encodedCatName = categoryName;
		encodedCatName = encodedCatName.replaceAll(" ", "-").replaceAll("--", "-").replaceAll("%20", "-").replaceAll("--", "-").replaceAll("/", "-or-").replaceAll("--", "-").replaceAll("&", "-and-").replaceAll("--", "-").toLowerCase();
		
		encodedCatName = '/' + encodedCatName + '/dls';
	} else {
		encodedCatName = '/dls';
	}
	
	var initFlg = true;
	
	if(pageNumber != '' && pageNumber != undefined)	{
		encodedCatName += '?pageNumber=' + pageNumber;
		initFlg = false;
	}
	
	if(categoryId != '' && categoryId != undefined) {
		if(initFlg)
			encodedCatName += '?categoryId=' + categoryId;
		else
			encodedCatName += '&categoryId=' + categoryId;
		initFlg = false;
	}
	
	if(schemeProductName != '' && schemeProductName != undefined) {
		if(initFlg)
			encodedCatName += '?schemeProductName=' + schemeProductName;
		else
			encodedCatName += '&schemeProductName=' + schemeProductName;
		initFlg = false;
	}
	
	//	newForm.append(jQuery('<input>', { 'name': 'pageNumber', 'value': pageNumber, 'type': 'hidden' }));
	//	newForm.append(jQuery('<input>', { 'name': 'schemeProductName', 'value': schemeProductName, 'type': 'hidden' }));
	//	newForm.append(jQuery('<input>', { 'name': 'categoryId', 'value': categoryId, 'type': 'hidden' }));
	//	newForm.append(jQuery('<input>', { 'name': 'categoryName', 'value': categoryName, 'type': 'hidden' }));
	
	var newForm = jQuery('<form>', { 'action': contextJsPath + encodedCatName, 'target': '_top', 'method': 'post' });
	var csrfFormToken = $('#gnpcsrftok').val();
	var csrfFormName = $('#gnpcsrftok').attr('name');
	newForm.append(jQuery('<input>', { 'name': csrfFormName, 'value': csrfFormToken, 'type': 'hidden' }));
	
    newForm.appendTo('body').submit();
}

function loadSchemeProdPage(schemeId, schemeName) {
	
	var encodedScmName = getSchemeProdUrl(schemeId, schemeName);
	
	var newForm = jQuery('<form>', { 'action': contextJsPath + encodedScmName, 'target': '_top', 'method': 'post' });
	var csrfFormToken = $('#gnpcsrftok').val();
	var csrfFormName = $('#gnpcsrftok').attr('name');
	newForm.append(jQuery('<input>', { 'name': csrfFormName, 'value': csrfFormToken, 'type': 'hidden' }));
	
    newForm.appendTo('body').submit();
}

function getSchemeProdUrl(schemeId, schemeName) {
	var encodedScmName = "";
	if(schemeName != '' && schemeName != undefined) {
		encodedScmName = encodeURIComponent(schemeName);
		encodedScmName = schemeName;
	}
	encodedScmName = encodedScmName.replaceAll(" ", "-").replaceAll("--", "-").replaceAll("%20", "-").replaceAll("--", "-").replaceAll("/", "-or-").replaceAll("--", "-").replaceAll("&", "-and-").replaceAll("--", "-").toLowerCase();
	encodedScmName = '/' + encodedScmName + '/dl';
	
	if(schemeId != '' && schemeId != undefined)	{
		encodedScmName += '?schemeId=' + schemeId;
	}
	
	return encodedScmName;
}


function loadMainMenu() {
	var menuHtmlVar = '';
	var isOverlapMenu = 0;
	$('#mainMenuDiv ul:first > li').each(function(index, elem) {
		$(elem).show();
		
		if(($(elem).offset().top - $('#mainMenuDiv').offset().top) > 0) {
			menuHtmlVar += '<li class="has_submenu">' + $(elem).html() + '</li>';
			$(elem).hide();
			isOverlapMenu++;
		}
	});
	
	if(isOverlapMenu > 0) {
		$('.moremenu').show();
		$('.moresubmenu').html('');
		$('.moresubmenu').append(menuHtmlVar);
	} else {
		$('.moremenu').hide();
	}
	$('.menuHideDiv').css('visibility', 'visible');
}

function loadSlider() {
}

function paginationDiv() {
	var screenWidth = screen.width;
	if(screenWidth > 480){
		
		$('.paginationRoot').mouseenter(function(){
			var firstChild = $(this).parent().find('.pagination').find('li').first();
			var firstPositionleft = parseInt($(firstChild).offset().left);
			
			var lastChild = $(this).parent().find('.pagination').find('li').last();
			var lastPositionRight = parseInt($(lastChild).offset().left + $(lastChild).width());
			
			var parentDiv = $(this).parent();
			var parentDivPositionRight = parseInt($(parentDiv).offset().left + $(parentDiv).width());
			var parentDivPositionLeft = parseInt($(parentDiv).offset().left);
			
			if(lastPositionRight > parentDivPositionRight || firstPositionleft < parentDivPositionLeft) {
				if($(this).find('.moveLeft').length == '') {
					var moveLeftDiv = '<div class="moveLeft" style="left: -5px; background-color: #F5F5F5;"><img src="' + contextJsPath + '/images/prenexticon.png"></div>';
					$(this).append(moveLeftDiv);
				}
				
				if($(this).find('.moveRight').length == '') {
					var moveRightDiv = '<div class="moveRight" style="right: -5px; background-color: #F5F5F5;"><img src="' + contextJsPath + '/images/prenexticon.png"></div>';
					$(this).append(moveRightDiv);
				}
				
				var arrowHeight = parseInt($(this).find('.moveRight').css('height').replace('px', ''));
				var parentContWidth = parseInt($(this).css('width').replace('px', ''));
				var containerLength = parseInt($(this).find('.pagination').css('width').replace('px', ''));
				var containerHeight = parseInt($(this).find('.pagination').css('height').replace('px', ''));
				var topVar = '-' + ((parseInt(containerHeight) + arrowHeight)/2) + 'px';
				
				if(containerLength > parentContWidth){
					$(this).find('.moveRight').stop(true).animate({
						top: topVar,
						opacity: '1'
					}, 200);
					
					$(this).find('.moveLeft').stop(true).animate({
						top: topVar,
						opacity: '1'
					}, 200);				
				}
			}
		});
		
		$('.paginationRoot').mouseleave(function(){
			$(this).find('.moveRight').stop(true).animate({
				top: '0px',
				opacity: '0.01'
			}, 200);
			
			$(this).find('.moveLeft').stop(true).animate({
				top: '0px',
				opacity: '0.01'
			}, 200);
		});
		
	} else {
		$('.paginationRoot').each(function(){
			
//			var moveLeftDiv = '<div class="moveLeft" style="left: -5px; top: -45px; background-color: #F5F5F5; opacity: 1;"><img src="' + contextJsPath + '/images/prenexticon.png"></div>';
//			$(this).append(moveLeftDiv);
//			var moveRightDiv = '<div class="moveRight" style="right: -5px; top: -45px; background-color: #F5F5F5; opacity: 1;"><img src="' + contextJsPath + '/images/prenexticon.png"></div>';
//			$(this).append(moveRightDiv);
			
			var firstChild = $(this).parent().find('.pagination').find('li').first();
			var firstPositionleft = parseInt($(firstChild).offset().left);
			
			var lastChild = $(this).parent().find('.pagination').find('li').last();
			var lastPositionRight = parseInt($(lastChild).offset().left + $(lastChild).width());
			
			var parentDiv = $(this).parent();
			var parentDivPositionRight = parseInt($(parentDiv).offset().left + $(parentDiv).width());
			var parentDivPositionLeft = parseInt($(parentDiv).offset().left);
			
			if(lastPositionRight > parentDivPositionRight || firstPositionleft < parentDivPositionLeft) {
				var parentContWidth = parseInt($(this).css('width').replace('px', ''));
				var containerLength = parseInt($(this).find('.pagination').css('width').replace('px', ''));
				
				if(containerLength > parentContWidth){
					
					if($(this).find('.moveLeft').length == '') {
						var moveLeftDiv = '<div class="moveLeft" style="left: -5px; background-color: #F5F5F5;"><img src="' + contextJsPath + '/images/prenexticon.png"></div>';
						$(this).append(moveLeftDiv);
					}
					
					if($(this).find('.moveRight').length == '') {
						var moveRightDiv = '<div class="moveRight" style="right: -5px; background-color: #F5F5F5;"><img src="' + contextJsPath + '/images/prenexticon.png"></div>';
						$(this).append(moveRightDiv);
					}
					
				}
			}
			
			
		});
	}
		
	$(document.body).on('click', '.moveRight', function(){
		var container = $(this).parent().find('.pagination');
		var containerWidth = $(this).parent().find('.pagination').find('li').css('width');
		var x = $(container).position();
		var position = x.left - containerWidth.replace('px', '');
		
		var lastChild = $(this).parent().find('.pagination').find('li').last();
		var lastPositionRight = parseInt($(lastChild).offset().left + $(lastChild).width());
		
		var parentDiv = $(this).parent();
		var parentDivPositionRight = parseInt($(parentDiv).offset().left + $(parentDiv).width());
		
		if(lastPositionRight > parentDivPositionRight) {
			$(container).stop(true).animate({
				left: position
			}, 200);
		}
	});
	
	$(document.body).on('click', '.moveLeft', function(){
		var container = $(this).parent().find('.pagination');
		var containerWidth = $(this).parent().find('.pagination').find('li').css('width');
		var x = $(container).position();
		var slideWidth = parseInt(x.left) + parseInt(containerWidth.replace('px', ''));
		
		if(slideWidth > 0) {
			slideWidth = 0;
		}
		var position = slideWidth;
		$(container).stop(true).animate({
			left: position
		}, 200);
	});
		
}