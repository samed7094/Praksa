const moreText = [7];
const textBtn = [7];

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
    }
}
