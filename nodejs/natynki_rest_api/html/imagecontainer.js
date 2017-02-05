/* global  $ */


let currentImage;
const imageContainer = document.getElementById("imagecontainer");
var index = 0;

document.getElementById("nextbutton").addEventListener('click', nextClick);
document.getElementById("previousbutton").addEventListener('click', previousClick);

function nextClick (value)
{
    var slideContainer = $("#imagecontainer");
    var listItem = slideContainer.children("img");
    var listLenght = listItem.length;

    listItem.eq(index).fadeOut(300, function()
                                            {
                                                index++;
                                                if (index === listLenght)
                                                {
                                                    index = 0;
                                                }
                                                listItem.eq(index).fadeIn(300);
                                            });
}

function previousClick (value)
{
    var slideContainer = $("#imagecontainer");
    var listItem = slideContainer.children("img");
    var listLenght = listItem.length;

    listItem.eq(index).fadeOut(300, function()
                                            {
                                                index--;
                                                if (index === listLenght)
                                                {
                                                    index = 0;
                                                }
                                                listItem.eq(index).fadeIn(300);
                                            });
}

addImage("1.png");
addImage("2.jpg");
addImage("1.png");

function addImage(urli)
{
    var element = $('<img>');
    element.text('First image');

    $(element).appendTo("#imagecontainer");
    $(element).attr(
    {
        src: urli
    });

    if(element.is(':first-child'))
    {
        currentImage = element;
    }
    else
    {
        element.hide();
    }
}

function showImage(imgObject)
{
    if(imageContainer.has(imgObject).length > 0)
    {
        currentImage.hide();
        currentImage = imgObject;
        currentImage.show();
    }
    else
    {
        console.log("There are no such objects!");
    }
}