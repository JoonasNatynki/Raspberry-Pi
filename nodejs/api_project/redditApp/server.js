var path = require("path");
var express = require("express");
//var fileSystem = require("fs");
var app = express();
var portnumber = 8000;
var cp = require("child_process");
var $ = require('jquery');

console.log("Initialization done.");

app.listen(portnumber);

console.log("Server running at natynki.net.");

// Default front page
app.get("/", function(request, response)
	{
	    response.sendFile(__dirname + "/frontPage.html");
	});

app.get("/authorize_callback*", function(request, response)
	{
		console.log(request.query.code);

		 
		var tokendata = 
		{
			grant_type: "authorization_code",
			code: request.query.code,
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
