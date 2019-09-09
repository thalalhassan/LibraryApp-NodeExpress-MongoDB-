
function regValidation()
{

	var name = document.forms["SignUp"]["name"];
	var uType = document.forms["SignUp"]["userType"];			 			 
	var email = document.forms["SignUp"]["email"]; 
	var phone = document.forms["SignUp"]["phone"]; 
    var password = document.forms["SignUp"]["password"];    
    var cpassword= document.forms["SignUp"]["cpassword"]; 


	var emailPat =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var emailid=email.value;
	var matchArray = emailid.match(emailPat);

	var phnPat=/^\+?([0-9]{2})\)?[-. ]?([0-9]{5})([0-9]{5})$/;
	var phn=phone.value;
	var matchPhn = phn.match(phnPat);

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
		name.focus();
		return false;
	}
	
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

		email.focus();
		return false;
	}
	

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

		phone.focus();
		return false;
	}
	
	
	else if(password.value.length<8)
	{
		data="Password is too short..(minimum 8 characters)";
		alert(data);

		password.focus();
    	return false;
	}

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




