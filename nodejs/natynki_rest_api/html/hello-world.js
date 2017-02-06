console.log("Starting up...");

const cp = require('child_process');
const fs = require("fs");


var http = require("http");

console.log("Creating server...");
var server = http.createServer(onResponse);

function openGPIOs()
{
    cp.execFile("./opengpios", function(err, stdout, stderr)
		{
		    if(err)
		    {
			throw error;
			return;
		    }
		    
		    console.log(stdout);
		});
}

function closeGPIOs()
{
	console.log("HERE2");
    cp.execFile("./closegpios", function(err, stdout, stderr)
		{
		    if(err)
		    {
			throw error;
			return;
		    }
		    
		    console.log(stdout);
		});
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
		console.log("joojoj");
		// create a readable stream of html text, then pipe it into the reponse
		fs.createReadStream("./Front_Page.html").pipe(response);
    }

	else if(request.method == "GET" && request.url == "/closegpios")
	{
		console.log("HERE");
		closeGPIOs();
	}

    else if(request.method == "GET")
    {
		console.log("TMTM");
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
    }
    else
    {
	send404Response(response, request);
    }
    
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
