$(document).ready(function(){
	$("#submit").click(function(){
	var firstname=$("#firstname").val();
	var lastname=$("#lastname").val();
	var phone=$("#phone").val();
	var office=$("#office").val();
	var email=$("#email").val();
	var password=$("#password").val();
	var cpassword=$("#cpassword").val();
	var month=$("#month").val();
	var day=$("#day").val();
	var year=$("#year1").val();
	// var genders = $("#radio").val();
	var emailRegex=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	// alert($("input[name=radio]:checked").length);
	if(firstname=="")
	{
		alert("Enter Your  First Name");
		$("#firstname").focus();
		return false;

	}
	else if(!/^[a-zA-Z]*$/g.test(firstname))
	{
		alert("Invalid Characters!!");
		$("#firstname").focus();
		return false;
	}
	else if(lastname=="")
	{
		alert("Enter Your  Last Name");
		$("#lastname").focus();
		return false;
	}
	else if(!/^[a-zA-Z]*$/g.test(lastname))
	{
		alert("Invalid Characters!!");
		$("#lastname").focus();
		return false;
	}
	else if(phone=="" || phone.length!=10 || isNaN(phone))
	{
		alert("Phone number is required* \n Must contain 10 Numbers Only");
		$("#phone").focus();
		return false;
	}
	else if(!/^[0-9]+$/g.test(office))
	{
		alert("Only Numbers Allowed!!");
		$("#office").focus();
		return false;
	} 
	else if(email=="" || !emailRegex.test(email))
	{
		alert("Invalid Email Address!!");
		$("#email").focus();
		return false;
	}
	else if(password=="" || password.length>12 ||password.length<8 || !/^[a-zA-Z0-9]+$/g.test(password))
	{
		alert("1)This field is mandotory \n 2)Password must contain 8-12 characters \n 3) Only alphanumeric values allowed(no special character)");
		$("#password").focus();
		return false;

	}
	else if( cpassword=="" || password!=cpassword)
	{
		alert("1)This field is mandotory \n 2)Passord did not matched!!");
		$("#cpassword").focus();
		return false;
	}
	else if(month=="0")
	{
		alert("Select Month");
		$("#month").focus();
		return false;
	}
	else if(day=="0")
	{
	
		alert("Select day");
		document.frm.day.focus();
		return false;
	}
	else if(year=="0")
	{
		alert("Select Year");
		$("#year1").focus();
		return false;
	}
	// else if($("#residence1:checked").val()==false && $("#residence2:checked").val()==false )
	// {
	// 	alert("Select Gender");
	// 	$("#radio").focus();
	// 	return false;
	// }
	else if($("input[name=radio]:checked").length==0)
	{
		alert("select gender");
		$("#residence1").focus();
		return false;
	}
	// else if($("#checkbox_sample18:checked").val()==false && 
	//  		$("#checkbox_sample19:checked").val()==false && 
	// 		 $("#checkbox_sample20:checked").val()==false)
	// 		{
	// 				alert("Select atleast one interest");
	// 				$("#checkbox_sample18").focus();
	// 				return false;

	// 		}\
else if($("input[name=check]:checked").length==0)
	{
		alert("select atleast one interest");
		$("#checkbox_sample18").focus();
		return false;
	}
	else if($("#aboutyou").val()=="")
		{
			alert("This field is mandotory!")
			$("#aboutyou").focus();
			return false;
		}

	});
	

});

$(document).ready(function(){
$(year1).change(function(){
		var month=$("#month").val();
		var day=$("#day").val();
		var year=$("#year1").val();
		var d=new Date();
		var currentYear=d.getFullYear();
		var ageyear=currentYear-year;
		var currentMonth=d.getMonth()+1;
		var months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
		var m=months.indexOf(month.toUpperCase())+1;
		var agemonth;
		if(m > currentMonth)
		{
			agemonth+currentMonth;

		}
		else{
			agemonth=currentMonth-m;

		}
		var age=ageyear.toString()+"."+agemonth.toString();
		$("#age").val(age);
});
});
$(document).ready(function(){
	$("#aboutyou").blur(function(){
		if($("#aboutyou").val().length==0)
		{
			$("#s").text("comment removed");

		}
		else{
			$("#s").text("comment added");

		}
	});
});