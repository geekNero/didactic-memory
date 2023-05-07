document.addEventListener("DOMContentLoaded", function() {
    const myDiv = document.getElementsByClassName("ability");
    for(var i =0;i<myDiv.length;i++)
    {   const myImage = myDiv[i].getElementsByClassName("ability-img")[0];
        const myTitle = myDiv[i].getElementsByClassName("ability-title")[0];
        const myDisc = myDiv[i].getElementsByClassName("ability-description")[0];
        myDiv[i].addEventListener("mouseenter", () => {
            myImage.style.left = "-160px";
            myImage.style.top = "50px"
            myImage.style.height = "100px"
            myImage.style.transition = "left 0.8s ease, top 0.8s linear, height 0.8s linear";
            myTitle.style.opacity = "0";
            myDisc.style.opacity = "1";
            myTitle.style.transition = "opacity 0.6s ease";
            myDisc.style.transition = "opacity 0.8s linear"
        });
        myDiv[i].addEventListener("mouseleave", () => {
            myImage.style.left = "0";
            myImage.style.top = "20px";
            myImage.style.height = "140px"
            myTitle.style.opacity = "1";
            myDisc.style.opacity = "0";
        });
    }
});