
$(window).on('load',()=>{
    if(sessionStorage.getItem("usrId")=="admin")
    {
        $('.admin').show();
        $('#user').html("Admin");
        navbar(0);
    }

    else if(sessionStorage.getItem("usrId")=="normal" || $('#flag').val()== "sign")
    {
        $('.admin').hide();
        if(sessionStorage.getItem("usrId")!="normal")
            $('#user').html("Visitor");
        else
            $('#user').html("Normal");
 
        navbar(2);
        
    }

    else {
        alert("You are just a vistor . Not logged in")
        open("/sign/login","_SELF");

    }
    
});

function navbar(size){
    nav=$('#nav').val();

    obj=JSON.parse(nav);
    ul = $("<ul>").attr('class','nav navbar-nav');
    l = obj.length-size;
    for (var i = 0; i < l; ++i) {
        ul.append(`<li><a href="${obj[i].link}"> ${obj[i].title}</a></li>`);
    }
    $("#navbar").append(ul);
}



function access(){
    if(sessionStorage.getItem("usrId")=="normal" || sessionStorage.getItem("usrId")=="visitor" ){
        open("/","_SELF");
        alert("You are not an Admin!!  Access Restricted")

    }
};
  


$('#logout').on('click',()=>{
    if((sessionStorage.getItem("usrId")!="normal") && (sessionStorage.getItem("usrId")!="admin"))
    {
       alert("You are just a vistor . Please LogIn")

    }
    else{
        alert("Logging Out")
        sessionStorage.clear();
        open("/sign/login","_SELF");
    }
    
    });

  
    

