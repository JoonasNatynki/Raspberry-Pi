var path = require("path");
var express = require("express");
//var fileSystem = require("fs");
var app = express();
var portnumber = 8000;
var cp = require("child_process");

console.log("Initialization done.");

app.listen(portnumber);

var CLIENTID = "oz4I-8h8nyfXcg";	// client id
var CLIENTSECRET = "Nzf6R_2jbnHd59fS8-v4V1UDrNc";	// client secret

console.log("Server running at natynki.net.");

// Default front page
app.get("/", function(request, response)
	{
	    response.sendFile(__dirname + "/frontPage.html");
	});

app.get("/reddit/authenticate", function(request, response)
	{
		response.redirect("https://www.reddit.com/api/v1/authorize?client_id=" + CLIENTID + "&response_type=code&state=tissit&redirect_uri=http://natynki.net/authorize_callback&duration=temporary&scope=identity")
	});

app.get("/authorize_callback*", function(request, response)
	{
		console.log(request.query.code);
	});

app.get("/*", function(request, response)
	{
	    console.log("Handling request to: " + request.url);
	    if(path.extname(request.url) == ".js")
	    {
			response.sendFile(__dirname + request.url);
	    }
		else
	    {
			response.sendFile(__dirname + request.url);
	    }
	});
