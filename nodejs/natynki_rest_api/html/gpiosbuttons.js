let openbutton = document.getElementById("opengpios").addEventListener("click", openGPIOs);
let closebutton = document.getElementById("closegpios").addEventListener("click", closeGPIOs);


function openGPIOs()
{
    var options = 
    {
        type: "GET",
        dataType: "JSON",
        url: "opengpios"
    };
    $.ajax(options);
}

function closeGPIOs()
{
    $.get("closegpios");
}