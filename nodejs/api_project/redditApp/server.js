var path = require("path");
var express = require("express");
//var fileSystem = require("fs");
var app = express();
var portnumber = 8000;
var cp = require("child_process");
var cookieparser = require("cookie-parser");
var datum = require('datumbox').factory("oz4I-8h8nyfXcg");	// IS THAT THE "API KEY"??
var http = require('http');

console.log("Initialization done.");

app.listen(portnumber);
app.use(cookieparser());

var CLIENTID = "oz4I-8h8nyfXcg";	// client id
var CLIENTSECRET = "Nzf6R_2jbnHd59fS8-v4V1UDrNc";	// client secret

console.log("Server running at natynki.net.");

// Default front page
app.get("/", function(request, response)
	{
	    response.sendFile(__dirname + "/login.html");
	});

	// Default front page
app.get("/frontpage", function(request, response)
	{
	    response.sendFile(__dirname + "/frontPage.html");
	});

app.get("/authorize_callback*", function(request, response)
	{
		response.cookie("code", request.query.code);	// Throw the code into the client's cookie and then redirect the client to the front page where the cookie is used to get the access_token
		response.redirect("/frontpage");
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

app.post("/topic_search", function(request, response)
	 {
	     console.log(request.body);
		//var topic = request.body.topic;	// The topic the user searched
		//var text = request.body.text;	// The text to find the topic to
	    //console.log(topic + " and " + text);
	   
	   // datum.topicClassification(text, function(err, data) 
	//	{
	//		if ( err )
	//			return console.log(err);
//
	//		console.log(data);  // Remarks here.
	//	});
	     //response.redirect("/frontpage");
	     response.send(request.body);
	});





function getTopic(data)
{
	// TODO
}
