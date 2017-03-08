var path = require("path");
var express = require("express");
//var fileSystem = require("fs");
var app = express();
var portnumber = 8000;
var cp = require("child_process");
var cookieparser = require("cookie-parser");

console.log("Initialization done.");

app.listen(portnumber);
app.use(cookieparser());

var CLIENTID = "oz4I-8h8nyfXcg";	// client id
var CLIENTSECRET = "Nzf6R_2jbnHd59fS8-v4V1UDrNc";	// client secret

console.log("Server running at natynki.net.");

// Default front page
app.get("/", function(request, response)
	{
	    response.sendFile(__dirname + "/frontPage.html");
	});

app.get("/authorize_callback*", function(request, response)
	{
		console.log("Authorization token: " + request.query.code);
		response.cookie("code", request.query.code);
		response.redirect("/");
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
