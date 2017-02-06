var http = require('http');

let openbutton = document.getElementById("opengpios").addEventListener("click", openGPIOs);
let closebutton = document.getElementById("closegpios").addEventListener("click", closeGPIOs);


function openGPIOs()
{
    var options = 
    {
        host: 'natynki.net',
        path: '/opengpios'
    };

}

function closeGPIOs()
{
    var options = 
    {
        host: 'natynki.net',
        path: '/closegpios'
    };
    http.request(options).end();
}