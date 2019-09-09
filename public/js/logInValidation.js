
function valid()
{
	var name = document.forms["LogInForm"]["username"]; 
    var password = document.forms["LogInForm"]["pwd"];




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
	if(sessionStorage.getItem("usrId")=="normal" || sessionStorage.getItem("usrId")=="admin" ){
		sessionStorage.clear();

    }
	 return true;
	}
// alert box

function message(data) {
		alert(data)
  }




