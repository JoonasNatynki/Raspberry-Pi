let openbutton = document.getElementById("opengpios").addEventListener("click", openGPIOs);
let closebutton = document.getElementById("closegpios").addEventListener("click", closeGPIOs);


function openGPIOs()
{
    window.location.href = "opengpios";
}

function closeGPIOs()
{
        window.location.href = "closegpios";
}