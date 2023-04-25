const moreText = [7];
const textBtn = [7];
const learnMore = document.getElementById("more");
const list = document.querySelector(".savjeti");

learnMore.onclick = function() 
{
    if (list.style.maxHeight)
    {
        list.style.maxHeight = null;
        list.style.opacity = 0.5;
    } 
    else
    {
        list.style.maxHeight = list.scrollHeight + "px";
        list.style.opacity = 1;
    }
}

document.getElementById("samed").onclick = function(){ open("https://www.instagram.com/ssameddd_/"); }
document.getElementById("alma").onclick = function(){ open("https://www.instagram.com/alma.msc_/"); }

for(let i = 1; i < 9; i++)
{
    moreText[i] = document.getElementById("more" + i);
    textBtn[i] = document.getElementById("btn" + i);

    textBtn[i].onclick = function() 
    {
        if(moreText[i].style.display === "none")
        {
            moreText[i].style.display = "inline";
            textBtn[i].innerHTML = "<";
        }
        else {
            moreText[i].style.display = "none";
            textBtn[i].innerHTML = "...";
        }
        list.style.maxHeight = list.scrollHeight + "px";
    }
}
