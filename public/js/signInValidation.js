
<<<<<<< HEAD
function regValidation()
{

	var name = document.forms["SignUp"]["name"];
	var uType = document.forms["SignUp"]["userType"];			 			 
	var email = document.forms["SignUp"]["email"]; 
	var phone = document.forms["SignUp"]["phone"]; 
    var password = document.forms["SignUp"]["password"];    
    var cpassword= document.forms["SignUp"]["cpassword"]; 
=======
function valid()
{
	var name = document.forms["RegForm"]["name"];			 
	var email = document.forms["RegForm"]["email"]; 
	var phone = document.forms["RegForm"]["phn"]; 
    var password = document.forms["RegForm"]["pwd"];
    var rpassword= document.forms["RegForm"]["rpwd"]; 
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8

	var emailPat =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var emailid=email.value;
	var matchArray = emailid.match(emailPat);

	var phnPat=/^\+?([0-9]{2})\)?[-. ]?([0-9]{5})([0-9]{5})$/;
	var phn=phone.value;
	var matchPhn = phn.match(phnPat);

<<<<<<< HEAD
	userType=uType.value.toLowerCase();

	if((name.value).length<4)
	{
		data="Name should contain atleast 4 character";
        alert(data);
        name.focus();
		return false;
	}
	else if(/[^a-z\s]/gi.test(name.value))
	{
		data="Special characters are not allowed in name";
		alert(data);
=======


	 if((name.value).length<4)
	
	{
		data="Atleast 4 character";
		message(data);
		name.focus();
		return false;
	}
	if(/[^a-z\s]/gi.test(name.value))
	{
		data="Special characters are not allowed in name";
		message(data);
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
		name.focus();
		return false;
	}
	
<<<<<<< HEAD
	else if(userType != "admin" && userType != "normal"){
		data="please enter admin / normal";
		alert(data);
		uType.focus();
		return false;
	}
	
	else if (matchArray == null)
	{
		data="Email format error. Enter Correct Email ID. ";
		alert(data);
=======
	
	if (matchArray == null)
	{
		data="Email format error. Enter Correct Email ID. ";
		message(data);
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
		email.focus();
		return false;
	}
	
	
<<<<<<< HEAD
	else if( matchPhn==null)  
	{
		data="Phone No. format  should be +91-xxxxxxxxx (x should be a number)";
		alert(data);
		phone.focus();
		return false;
	}
	else if((phone.value).length<14)
	
	{
		data="Phone number is not valid (length<10)";
		alert(data);
		phone.focus();
		return false;
	}
	else if((phone.value).length>15)
	
	{
		data="Phone number is not valid (length limit exceeded)";
		alert(data);
=======
	if( matchPhn==null)  
	{
		data="Phone No. format  should be +91-xxxxxxxxx (x should be a number)";
		message(data);
		phone.focus();
		return false;
	}
	if((phone.value).length<14)
	
	{
		data="Phone number is not valid (length<10)";
		message(data);
		phone.focus();
		return false;
	}
	if((phone.value).length>15)
	
	{
		data="Phone number is not valid (length limit exceeded)";
		message(data);
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
		phone.focus();
		return false;
	}
	
	
	
<<<<<<< HEAD
	else if(password.value.length<8)
	{
		data="Password is too short..(minimum 8 characters)";
		alert(data);
=======
	if(password.value.length<8)
	{
		data="Password is too short..(minimum 8 characters)";
		message(data);
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
		password.focus();
    	return false;
	}
	
<<<<<<< HEAD
	else if((cpassword.value)!=(password.value))
	{
		data="Passwords missmatch!";
		alert(data);
		cpassword.focus();
    	return false;
	 }
	 else{
        sessionStorage.setItem("usrId",userType);
        data="Welcome to library!";
        alert(data);
        return true;
     }
	 
}
=======
	if((rpassword.value)!=(password.value))
	{
		data="Passwords missmatch!";
		message(data);
		rpassword.focus();
    	return false;
	 }
	 
	 data="Welcome to library!";
	 message(data);

	 document.getElementById('RegForm').submit();
	 return true;
}
// alert box

function message(data) {
		alert(data)
  }
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8




