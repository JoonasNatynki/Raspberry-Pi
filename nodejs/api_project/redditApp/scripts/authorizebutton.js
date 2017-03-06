var authorizebutton = document.getElementById("authorizebutton");

authorizebutton.addEventListener("click", onButtonClick);

function onButtonClick()
{
    
    var codes = 
    {
        error: function(){console.log("error");},
        code: "tissit",
        state: "tissit",
    }
/*
    var tokendata = 
    {
        grant_type: "authorization_code",
        code: codes,
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
    })

    console.log(token);*/
    window.open("https://www.reddit.com/api/v1/authorize?client_id=oz4I-8h8nyfXcg&response_type=code&state=tissit&redirect_uri=http://88.112.159.13:999/authorize_callback&duration=temporary&scope=identity");
}