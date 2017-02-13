var threads = document.getElementsByClassName("thread");
var iterationTime = 85;

for(i = 0; i < threads.length; i++)
{
   threadAnimationInit(threads, i);
}

function threadAnimationInit(threads, index)
{
    setTimeout(function()
        {
            threads[index].style.WebkitAnimationPlayState  = "running";
        }, 500 + iterationTime * i);
}