$(window).on('load',()=>{
    if( $('#flag').val() == 1 || (sessionStorage.getItem("usrId")=="admin"))
    {
        sessionStorage.setItem("usrId","admin")
        sessionStorage.setItem("access","admin")
        
        $('#user').html("Admin")
        $('#admin').show();
         navbar(0);


    }
    else if( $('#flag').val() == 0 || (sessionStorage.getItem("usrId")=="normal"))
    {
        sessionStorage.setItem("usrId","normal" );
        sessionStorage.setItem("access","normal");
        $('#admin').hide();
        $('#user').html("Normal")
         navbar(2);

    }
    else{
        $('#user').html("Vistor")
        sessionStorage.setItem("usrId","visitor" );
        sessionStorage.setItem("access","visitor");
         navbar(2);

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

$('#logout').on('click',()=>{
    if( $('#flag').val() == -1 && (sessionStorage.getItem("usrId")!="normal") && (sessionStorage.getItem("usrId")!="admin"))
    {
       alert("You are just a vistor . Please LogIn")

    }
    else{
        sessionStorage.clear();
        open("/sign/login","_SELF");
    }
    
});