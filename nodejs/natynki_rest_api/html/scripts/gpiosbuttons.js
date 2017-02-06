let pin21high = document.getElementById("pin21high").addEventListener("click", pin21High);
let pin21low = document.getElementById("pin21low").addEventListener("click", pin21Low);
let pin21toggle = document.getElementById("pin21toggle").addEventListener("click", pin21Toggle);

function pin21High()
{
    var options = 
    {
        type: "GET",
        dataType: "JSON",
        url: "pin21high"
    };
    $.ajax(options);
}

function pin21Low()
{
    $.get("pin21low");
}

function pin21Toggle()
{
    $.get("pin21toggle");
}