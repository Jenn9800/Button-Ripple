const textarea1 = document.getElementById("textarea");
const totalCounter1 = document.getElementById("total-counter");
const remainCounter1 = document.getElementById("remain-counter");

//keydown - trigger when press; keyup- trigger when release
textarea1.addEventListener("keyup", ()=>{
   updateCounter()
})

updateCounter() //call this function to set the total 0 and remain 50

function updateCounter(){
    totalCounter1.innerText = textarea1.value.length;
    remainCounter1.innerText = textarea1.getAttribute("maxlength") - textarea1.value.length;

}