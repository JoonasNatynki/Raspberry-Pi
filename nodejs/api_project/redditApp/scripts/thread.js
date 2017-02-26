var threadghostsArray = [];
var threadsArray = [];
var iterationTime = 85;
var threadsMoving = 0;

const socket = io('http://88.112.159.13:3000');
var appid = "696969";

// Updates thread positions
function rearrangeThread(element, index)
{
    var threadlen = threadsArray.length;
    var itertime = iterationTime;

    if(index == threadlen - 1){itertime = 0;}

    setTimeout(function ()
    {
        // Offset the thread coordinates based on where they are relative to the page
        var offsetcoords = getCoords(threadghostsArray[index]);
        element.style.top = 0;
        
        var elem = element; // Element to animate
        var rect = document.getElementById("threadghost " + index).getBoundingClientRect(); // Current position of said element
        var bodyRect = document.body.getBoundingClientRect();
        var threadfield = document.getElementById("threadfield").getBoundingClientRect();
        var coordx = rect.left - bodyRect.left - threadfield.left;
        var coordy = offsetcoords.top;

        var trans = Morf.transition(elem, {
                // New CSS state
                                            '-webkit-transform': 'translate3d(' + coordx + 'px, ' + coordy + 'px, 0)',
                                        }, {
                                            duration: '500ms',
                                            timingFunction: 'ease',
                                            increment: 0.4,
                                            callback: function (elem) {
                                                // You can optionally add a callback option for when the animation completes.
                                            }
                                        });
    }, itertime * (Math.random() * 3) + 1);

    itertime = iterationTime;
}

function fetchthreads()
{
    // TODO
    var newthreadghost = document.createElement("div");
    var newthread = document.createElement("div");
    var threadfield = document.getElementById("threadfield");

    newthread.id = "thread " + threadsArray.length;
    newthreadghost.id = "threadghost " + threadghostsArray.length;
    threadsArray.push(newthread);
    threadghostsArray.push(newthreadghost);
    newthreadghost.appendChild(document.createTextNode("Thread ghost "+ threadghostsArray.length));
    newthread.appendChild(document.createTextNode("Thread " + threadsArray.length));
    newthreadghost.className = "threadghost";
    newthread.className = "thread";

    threadfield.insertBefore(newthreadghost, threadfield.firstChild);
    threadfield.insertBefore(newthread, threadfield.firstChild);
    $(newthread).fadeIn(10);
}

function makeNewThread(threadtext)
{
    var newthreadghost = document.createElement("div");
    var newthread = document.createElement("div");
    var threadfield = document.getElementById("threadfield");
    var text = threadtext;

    newthread.id = "thread " + threadsArray.length;
    newthreadghost.id = "threadghost " + threadghostsArray.length;

    threadsArray.push(newthread);
    threadghostsArray.push(newthreadghost);

    newthreadghost.appendChild(document.createTextNode(text));
    newthread.appendChild(document.createTextNode(text));

    newthreadghost.className = "threadghost";
    newthread.className = "thread";

    threadfield.insertBefore(newthreadghost, threadfield.firstChild);
    threadfield.insertBefore(newthread, threadfield.firstChild);
    rearrangeThreadsInit();

    $(newthread).fadeIn();
}

// Get element coordinates in relation to the page
function getCoords(elem) 
{ 
    // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

// The loopty loop for the thread arranger
function rearrangeThreadsInit()
{
    // Slightly faster loopty loop than anything else
    var i = 0;
    var e = threadsArray.length;
    while(e--)
    {
        rearrangeThread(threadsArray[i], i);
        i++;
    }
}

function initSocket()
{
    socket.on('connect', function() 
    {
        socket.emit('app_id', appid);
    });
    socket.on("message", function(data)
    {
        // When someone makes a new thread, do this on your client
        makeNewThread(data.text);
    })
}

// Start the page here
function initPage()
{

    // Already existing threads...""############
    for(i = 0; i < 10; i++)
    {
        //fetchthreads();
    }
    //##########################################


    //##############################################################
    $("#threadsubmitfield").keypress(function(event)
    {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == "13")
        {
            event.preventDefault();
            //makeNewThread(message);
            var msg = {};
            msg.app_id = appid;
            msg.text = $("#inputmessage").val();
            socket.json.emit("message", msg);
            $("#inputmessage").val("");
        }
    });
    //##############################################################

    rearrangeThreadsInit();
    initSocket();
}

initPage();