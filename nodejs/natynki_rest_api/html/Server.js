const cp = require('child_process'); 	// For executing files and programs
const fs = require("fs");				// For accessing files on the Raspberry Pi
var http = require("http");				// For sending requests
console.log("Starting up...");

function pin21High(response)
{
    console.log("Setting pin 21 to high!");
    cp.execFile("./c_programs/pinControl", ["21", "1"], function(err, stdout, stderr)
		{
		    if(err)
		    {
				return;
		    }
		    
		    console.log(stdout);
		});
		response.writeHead(200);
		response.end();
}

function pin21Low(response)
{
	console.log("Setting pin 21 to low!");
    cp.execFile("./c_programs/pinControl", ["21", "0"], function(err, stdout, stderr)
		{
		    if(err)
		    {
				return;
		    }
		    
		    console.log(stdout);
		});
		response.writeHead(200);
		response.end();
}

function pin21Toggle(response)
{
	console.log("Toggling pin 21");
    fs.readFile("/sys/class/gpio/gpio21/value",  function(err, data)
		{
			if(data.toString("utf8") == 1)
			{
			    cp.execFile("./c_programs/pinControl", ["21","0"], function(err, stdout, stderr)
													{
														if(err)
														{
															return;
														}
														
														console.log(stdout);
													});
			}
			else
			{
			    cp.execFile("./c_programs/pinControl", ["21","1"], function(err, stdout, stderr)
													{
														if(err)
														{
															return;
														}
														
														console.log(stdout);
													});
			}
		});
	

	response.writeHead(200);
	response.end();
}

function initServer()
{
	console.log("Creating server...");
	// Creates the server and assings onResponse as the callback function. OnResponse will be called everytime the server
	// gets a request
	var server = http.createServer(onRequest);	

	console.log("Initializing GPIO pins...");
	// initializing and setting up pins for using
	cp.execFile("sudo ./c_programs/opengpios", function(err, stdout, stderr)
		{		
			if(err)
			{
				return;
			}		    
			console.log(stdout);
		});

    console.log("Setting up ports to listen to...");
    server.listen(8000);
    console.log("Server initialized at http://natynki.net");
};

// Handle response(s)
function onRequest(request, response)
{
    console.log("Handling request to: ", request.url);
    // #######################################################################################################################
	// Default web page, the front page
    if(request.method == "GET" && request.url == "/")
    {
		console.log("Front page");
		// create a readable stream of html text, then pipe it into the reponse
		fs.createReadStream("./Front_Page.html").pipe(response);
		return;
    }

	else if(request.url == "/pin21low")
	{
		pin21Low(response);
		return;
	}

	else if(request.url == "/pin21high")
	{
		pin21High(response);
		return;
	}

	else if(request.url == "/pin21toggle")
	{
		pin21Toggle(response);
		return;
	}

	// General requests for a file of the same name as the request
    else if(request.method == "GET")
    {
		// Checks if that kind of a file exists, if not, then goes into error handling
		fs.readFile("./" + request.url, function(err, data)
		{
		    if(err)
		    {
				console.log("No such file as (" + request.url + ") in the working directory.");
				return;
		    }
			else
			{
				// Read a file of the same name and pipe its content back into the client
				fs.createReadStream("./" + request.url).pipe(response);
			}
		});
		return;
    }
    else
    {
		send404Response(response, request);
		return;
    }
    // #######################################################################################################################
	console.log("No handling for request found!");
};

// Handle 404 error
function send404Response(response, request)
{
    response.writeHead(404, {"Content-Type":"text/plain"});
    response.write("404: nothing was found.");
    response.end();
    console.log("404 response on request url " , request.url);
};

initServer();
