console.log("Starting up...");

const cp = require('child_process');
const fs = require("fs");


var http = require("http");

console.log("Creating server...");
var server = http.createServer(onResponse);

console.log("OPENING GPIO pins...");

// initializing pins
cp.execFile("sudo ./c_programs/opengpios", function(err, stdout, stderr)
	    {		
		if(err)
		  {
		      return;
		  }
		    
		console.log(stdout);
	    });

function pin21High(response)
{
    console.log("Setting pin 21 to high!");
    cp.execFile("./c_programs/pin21high", function(err, stdout, stderr)
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
    cp.execFile("./c_programs/pin21low", function(err, stdout, stderr)
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
				cp.execFile("./c_programs/pin21low", function(err, stdout, stderr)
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
				cp.execFile("./c_programs/pin21high", function(err, stdout, stderr)
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
    console.log("Setting up ports to listen to...");
    server.listen(8000);
    console.log("Server running at http://88.112.159.13:999/");
};

// Handle response(s)
function onResponse(request, response)
{
    console.log("Setting up the response to: ", request.url);
    // If default homepage, send index.html
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

    else if(request.method == "GET")
    {
		fs.readFile("./" + request.url, function(err, data)
		{
		    if(err)
		    {
			console.log("No such file as " + request.url);
			return;
		    }

		    var streamOfData = fs.createReadStream("./" + request.url);
		    streamOfData.pipe(response);
		});
		return;
    }
    else
    {
		send404Response(response, request);
		return;
    }    
	console.log("Nothing was triggered");
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
