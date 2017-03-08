var authorizebutton = document.getElementById("authorizebutton");
authorizebutton.addEventListener("click", onButtonClick);

var authorizationcode; // The auth code

function onButtonClick()
{
    var scopes = "edit";
    console.log("Opening reddit");
    //window.open("https://www.reddit.com/api/v1/authorize?client_id=oz4I-8h8nyfXcg&response_type=code&state=tissit&redirect_uri=http://88.112.159.13:999/authorize_callback&duration=permanent&scope=" + scopes);
}