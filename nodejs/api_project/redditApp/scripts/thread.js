var threadghostsArray = [];
var threadsArray = [];
var iterationTime = 85;
var threadsMoving = 0;



function rearrangeThreads(threadsArray, index)
{
     setTimeout(function()
        {
            var elem = threadsArray[index]; // Element to animate
            var rect = document.getElementById("threadghost " + index).getBoundingClientRect(); // Current position of said element
            var bodyRect = document.body.getBoundingClientRect();
            var threadfield = document.getElementById("threadfield").getBoundingClientRect();
            var coordx = rect.left - bodyRect.left - threadfield.left;
            var coordy = rect.top - bodyRect.top - threadfield.top;

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

    }, iterationTime * (Math.random() * (5 - 1) + 1));
}

function threadAnimationStart()
{
    threadsMoving++;
    this.style.WebkitAnimationPlayState  = "running";
}

function fetchthreads()
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
    test();
}

function test()
{
    for(i = 0; i < threadsArray.length; i++)
    {
        rearrangeThreads(threadsArray, i);
    }
}

// Already existing threads...""
for(i = 0; i < 5; i++)
{
    fetchthreads();
    test();
}

setInterval(makeNewThread, 2000);