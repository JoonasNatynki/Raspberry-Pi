var threads = document.getElementsByClassName("thread");
var iterationTime = 85;


function loopThreadsAndAnimate(threads)
{
    for(i = 0; i < threads.length; i++)
    {
        threadAnimationInit(threads, i);
    }
}

function threadAnimationInit(threads, index)
{
    setTimeout(function()
        {
            if(threads[index].style.WebkitAnimationPlayState != "running")
            {
                threads[index].style.WebkitAnimationPlayState  = "running";
            }
    }, 500 + iterationTime * (Math.random() * (5 - 1) + 1));
}

function newThread()
{
    loopThreadsAndAnimate(threads);
    var thread = document.createElement("div");
    var threadfield = document.getElementById("threadfield");
    var i = threadfield.children.length;
    if(i > 20) return;
    thread.appendChild(document.createTextNode("Message "+(i - 1)));
    thread.className = "thread";
    threadfield.insertBefore(thread, threadfield.firstChild);
    setTimeout(newThread, 200);
}
loopThreadsAndAnimate(threads);
