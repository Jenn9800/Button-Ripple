const navbar1 = document.querySelector(".navbar");
const bc1 = document.querySelector(".bottom-container");

window.addEventListener("scroll", ()=>{
    if(window.screenY>bc1.offsetTop-navbar1.offsetHeight - 25){
        navbar1.classList.add("active");
    }else{
        navbar1.classList.remove("active");
    }
});