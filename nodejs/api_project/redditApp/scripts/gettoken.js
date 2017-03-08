var authorizationcode;
var authorizationtoken;
var test;

function getAccessToken(codex)
{    
    var tokendata = 
    {
        grant_type: "authorization_code",
        code: codex,
        redirect_uri: "http://88.112.159.13:999/authorize_callback"	
    }

    authorizationtoken = $.ajax(
    {
        type: "POST",
        url: "https://www.reddit.com/api/v1/access_token",
        dataType: "json",
        beforeSend: function (xhr) 
        {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa("oz4I-8h8nyfXcg" + ":" + "Nzf6R_2jbnHd59fS8-v4V1UDrNc"));
        },
        data: tokendata
    });
}

//  Get cookie parameter and output it
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

// Check if there is an authorization code in the cookie
function checkCookie() {
    authorizationcode = getCookie("code");
    if (authorizationcode == "") 
    {
        console.log("no code");
    }
    else 
    {
       //user = prompt("Please enter your name:","");
       if (authorizationcode != "" && authorizationcode != null)
       {
           //console.log("Authorization token: " + getCookie("code"));
           getAccessToken(authorizationcode);
       }
    }
}

checkCookie();