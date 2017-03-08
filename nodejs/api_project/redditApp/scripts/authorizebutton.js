var authorizebutton = document.getElementById("authorizebutton");

authorizebutton.addEventListener("click", onButtonClick);

function onButtonClick()
{
    
    window.open("https://www.reddit.com/api/v1/authorize?client_id=oz4I-8h8nyfXcg&response_type=code&state=tissit&redirect_uri=http://88.112.159.13:999/authorize_callback&duration=temporary&scope=identity");
        
}

function getToken(codex)
{    
    var tokendata = 
    {
        grant_type: "authorization_code",
        code: codex,
        redirect_uri: "http://natynki.net/authorize_callback"	
    }

    var token = $.ajax(
    {
        type: "POST",
        url: "https://www.reddit.com/api/v1/access_token",
        beforeSend: function (xhr) 
        {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa("oz4I-8h8nyfXcg" + ":" + "Nzf6R_2jbnHd59fS8-v4V1UDrNc"));
        },
        data: tokendata
    });

    console.log(token);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("code");
    if (user == "") 
    {
        console.log("no code");
    }
    else 
    {
       //user = prompt("Please enter your name:","");
       if (user != "" && user != null)
       {
           console.log(getCookie("code"));
           getToken(getCookie("code"));
       }
    }
}

checkCookie();