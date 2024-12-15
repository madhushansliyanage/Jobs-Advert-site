
$(document).ready(function(){
	$("#srchBtn").click(function(){
		$("#srchBox").show();
		$("#srchBox").animate({width:'200px'},"slow");
		$("#srchInput").show();
	});
	$("#cat").click(function(){
		$(".dropdownmenu").slideToggle();
		$("#active").css("color","white");
	});
});

function logCheck(){
	
	var logUname=document.getElementById("logUname").value;
	var logPassword=document.getElementById("logPassword").value;
	
	if((logUname != null && logUname != "")&&(logPassword != null && logPassword != "")){
		alert("Logging Successfull");
	}
	else{
		alert("Logging Unsuccessfull");
	}
}

