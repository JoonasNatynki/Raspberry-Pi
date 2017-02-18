var threadghosts = document.getElementsByClassName("threadghost");
var threads = document.getElementsByClassName("thread");
var iterationTime = 85;
var threadsMoving = 0;


function pageInitAnimation()
{
    console.log("mmmm");
    for(i = 0; i < threadghosts.length; i++)
    {
        threadAnimationInit(threadghosts, i);
    }
}

// Runs only once when the page is loaded
function threadAnimationInit(elements, index)
{
    setTimeout(function()
        {
            if(elements[index].style.WebkitAnimationPlayState != "running")
            {
                elements[index].addEventListener("animationstart", threadAnimationStart);
                elements[index].addEventListener("animationend", threadAnimationEnd);
            }
            
        }, 500 + iterationTime * (Math.random() * (5 - 1) + 1));
}

function rearrangeThreads(threads, index)
{
     setTimeout(function()
        {
            if(threads[index].style.WebkitAnimationPlayState != "running")
            {
                threads[index].style.WebkitAnimationPlayState  = "running";
                threadsMoving++;
                threads[index].addEventListener("animationend", threadAnimationEnd);
            }
    }, 500 + iterationTime * (Math.random() * (5 - 1) + 1));
}

function threadAnimationEnd()
{
    threadsMoving--;
    this.style.WebkitAnimationPlayState  = "paused";
}

function threadAnimationStart()
{
    threadsMoving++;
    this.style.WebkitAnimationPlayState  = "running";
}

function makeNewThread()
{
    var newthreadghost = document.createElement("div");
    var newthread = document.createElement("div");
    var threadfield = document.getElementById("threadfield");

    newthread.id = "thread " + threads.length;
    newthreadghost.appendChild(document.createTextNode("Thread ghost "+ threadghosts.length));
    newthread.appendChild(document.createTextNode("Thread "+(i)));
    newthreadghost.className = "threadghost";
    newthread.className = "thread";

    threadfield.insertBefore(newthreadghost, threadfield.firstChild);
}

function test()
{
    var tween = new Tweenable();
    tween.tween(
                    {
                        from: { x: 0,  y: 50  },
                        to:   { x:510, y: 530 },
                        duration: 500,
                        easing: 'easeOutQuad',
                        start: function () { console.log('Off I go!'); },
                        finish: function () { console.log('And I\'m done!'); }
                    });
    console.log(tween);
    
    for(i = 0; i < threads.length; i++)
    {
        rearrangeThreads(threads, i);
    }
}

for(i = 0; i < 5; i++)
{
    makeNewThread();
}
pageInitAnimation();
setTimeout(makeNewThread, 1000);
setTimeout(test, 2000);