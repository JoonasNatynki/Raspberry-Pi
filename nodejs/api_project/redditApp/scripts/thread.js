var threadghostsArray = [];
var threadsArray = [];
var iterationTime = 85;
var threadsMoving = 0;



function rearrangeThread(element, index)
{
    var threadlen = threadsArray.length;
    var itertime = iterationTime;

    if(index == threadlen - 1){itertime = 0;}

    setTimeout(function ()
    {
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

function makeNewThread()
{
    var newthreadghost = document.createElement("div");
    var newthread = document.createElement("div");
    var threadfield = document.getElementById("threadfield");
    var text = "This is the text that goes into the thread view...";

    newthread.id = "thread " + threadsArray.length;
    newthreadghost.id = "threadghost " + threadghostsArray.length;

    threadsArray.push(newthread);
    threadghostsArray.push(newthreadghost);

    newthreadghost.appendChild(document.createTextNode(text + threadghostsArray.length));
    newthread.appendChild(document.createTextNode(text + threadsArray.length));

    newthreadghost.className = "threadghost";
    newthread.className = "thread";

    threadfield.insertBefore(newthreadghost, threadfield.firstChild);
    threadfield.insertBefore(newthread, threadfield.firstChild);
    rearrangeThreadsInit();

    $(newthread).fadeIn();
}

function getCoords(elem) { // crossbrowser version
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

function rearrangeThreadsInit()
{
    //threadsArray.forEach(rearrangeThread);
    // Slightly faster loop
    var i = 0;
    var e = threadsArray.length;
    while(e--)
    {
        rearrangeThread(threadsArray[i], i);
        i++;
    }
}

// Already existing threads...""
for(i = 0; i < 120; i++)
{
    fetchthreads();
}

rearrangeThreadsInit();

//setInterval(makeNewThread, 8000);
setInterval(makeNewThread, 5000);