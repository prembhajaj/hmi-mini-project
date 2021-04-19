hideAll();
document.getElementById("login_div").style.display="block";


function hideAll(){
    var divs = document.getElementsByTagName("div");
    for(var i=1;i<divs.length;i++)
    {
        divs[i].style.display="none";
    }
}

function onLogin() {
    hideAll();
    document.getElementById("profile").style.display="block";
    document.getElementById("options_div").style.display="block";
    document.getElementById("user_name").innerText = document.getElementById("username").value.toUpperCase();
}

function onChange(showDiv){
    hideAll();
    document.getElementById("profile").style.display="block";
    
    document.getElementById("back_button").style.display="block";
    document.getElementById(showDiv).style.display="block";
}

