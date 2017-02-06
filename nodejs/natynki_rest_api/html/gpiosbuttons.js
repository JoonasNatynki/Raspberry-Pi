let openbutton = document.getElementById("opengpios").addEventListener("click", openGPIOs);
let closebutton = document.getElementById("closegpios").addEventListener("click", closeGPIOs);

function openGPIOs()
{
    xhttp.open("GET", "opengpios", true);
    xhttp.send();
}

function closeGPIOs()
{
    xhttp.open("GET", "closegpios", true);
    xhttp.send();
}