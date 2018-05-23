
    $("#login_form").submit(function(e){
        e.preventDefault();
        var username = $("#input_username").val();
        var pwd = $("#input_password").val();
        if(username == "produtor" && pwd == "produtor")
        {
    
    
            window.location = "manager-produtor/index.html";
        }
        else if(username == "tecnico" && pwd == "tecnico")
        {
            window.location = "manager-tecnico/index.html";
        }
        else if(username == "admin" && pwd == "admin")
        {
            window.location = "manager-admin/index.html";
        }
        else
        {
            alert("error!");
        }

        

    });


    $("#recovery").click(function(){
        alert("Em implementação!");
    });

