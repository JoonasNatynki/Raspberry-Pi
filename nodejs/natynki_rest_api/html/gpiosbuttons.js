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
    $.ajax(
    {
        url: 'http://natynki.net/closegpios',
        datatype: 'json'
    });
}