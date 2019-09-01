
function valid()
{
<<<<<<< HEAD
	var name = document.forms["LogInForm"]["username"]; 
    var password = document.forms["LogInForm"]["pwd"];
=======
	var name = document.forms["RegForm"]["username"]; 
    var password = document.forms["RegForm"]["pwd"];
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8



	 if((name.value).length<4)
	
	{
		data="Username Error (length<4)";
		message(data);
		name.focus();
		return false;
	}
	if(password.value.length<8)
	{
		data="Password Error (length<8)";
		message(data);
		password.focus();
    	return false;
	}
<<<<<<< HEAD
	return true;
=======
	
	
	 
	 data="Welcome to library!";
	 message(data);

	 document.getElementById('RegForm').submit();
	 return true;
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
}
// alert box

function message(data) {
		alert(data)
  }




