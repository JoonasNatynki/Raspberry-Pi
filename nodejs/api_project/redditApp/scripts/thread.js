var threadghostsArray = [];
var threadsArray = [];
var iterationTime = 85;
var threadsMoving = 0;



function rearrangeThreads(threadsArray, index)
{
    var threadlen = threadsArray.length;

        console.log(iterationTime * (Math.random() * 5) + 1);
        setTimeout(function ()
        {
            var offsetcoords = getCoords(threadghostsArray[index]);
            threadsArray[index].style.top = 0;
            
            var elem = threadsArray[index]; // Element to animate
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
                                                timingFunction: 'swingFromTo',
                                                callback: function (elem) {
                                                    // You can optionally add a callback option for when the animation completes.
                                                }
                                            });
        }, iterationTime * (Math.random() * 3) + 1);
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
}

function makeNewThread()
{
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
    rearrangeThreadsInit();
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
    for(var index = 0; index < threadsArray.length; index++)
    {
        rearrangeThreads(threadsArray, index);
    }
}

// Already existing threads...""
for(i = 0; i < 10; i++)
{
    fetchthreads();
}

//setInterval(makeNewThread, 8000);
setInterval(makeNewThread, 1000);