const button1 = document.querySelector(".button");

button1.addEventListener("mouseover", (event)=>{
    const x = event.pageX - button1.offsetLeft; //start from left (left-small num, right-bigger num)
    const y = event.pageY - button1.offsetTop; //start from top (top-small num, right-bigger num)

    button1.style.setProperty("--xPos", x + "px");
    button1.style.setProperty("--yPos", y + "px");

});