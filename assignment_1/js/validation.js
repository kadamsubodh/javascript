function validateForm(){
	
	var firstname=document.forms["frm"]["firstname"].value;
	var lastname=document.forms["frm"]["lastname"].value;
	var phone=document.forms["frm"]["phone"].value;
	var office=document.forms["frm"]["office"].value;
	var email=document.forms["frm"]["email"].value;
	var password=document.forms["frm"]["password"].value;
	var cpassword=document.forms["frm"]["cpassword"].value;
	var month=document.forms["frm"]["month"].value;
	var day=document.forms["frm"]["day"].value;
	var year=document.forms["frm"]["year"].value;
	var emailRegex=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
	if(firstname=="")
	{
		alert("Enter Your  First Name");
		document.frm.firstname.focus();
		return false;

	}
	else if(!/^[a-zA-Z]*$/g.test(firstname))
	{
		alert("Invalid Characters!!");
		document.frm.firstname.focus();
		return false;
	}
	else if(lastname=="")
	{
		alert("Enter Your  Last Name");
		document.frm.lastname.focus();
		return false;
	}
	else if(!/^[a-zA-Z]*$/g.test(lastname))
	{
		alert("Invalid Characters!!");
		document.frm.lastname.focus();
		return false;
	}
	else if(phone=="" || phone.length!=10 || isNaN(phone))
	{
		alert("Phone number is required* \n Must contain 10 Numbers Only");
		document.frm.phone.focus();
		return false;
	}
	else if(!/^[0-9]+$/g.test(office))
	{
		alert("Only Numbers Allowed!!");
		document.frm.office.focus();
		return false;
	} 
	else if(email=="" || !emailRegex.test(email))
	{
		alert("Invalid Email Address!!");
		document.frm.email.focus();
		return false;
	}
	else if(password=="" || password.length>12 ||password.length<8 || !/^[a-zA-Z0-9]+$/g.test(password))
	{
		alert("1)This field is mandotory \n 2)Password must contain 8-12 characters \n 3) Only alphanumeric values allowed(no special character)");
		document.frm.password.focus();
		return false;

	}
	else if( cpassword=="" || password!=cpassword)
	{
		alert("1)This field is mandotory \n 2)Passord did not matched!!");
		document.frm.cpassword.focus();
		return false;
	}
	else if(month=="0")
	{
		alert("Select Month");
		document.frm.month.focus();
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
		document.frm.year.focus();
		return false;
	}
	else if(month!=0 && day!=0 && year!=0)
	{
		var d=new Date();
		var y=d.getFullYear();
		var ageyear=y-year;
		var m=d.

	}
};