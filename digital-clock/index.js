const hourE1 = document.getElementById("hour");
const minE1 = document.getElementById("minutes");
const secE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM";

    if (hour>12){
        hour = hour - 12
        ampm = "PM"
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hourE1.innerText = hour;
    minE1.innerText = min;
    secE1.innerText = sec;
    ampmE1.innerText = ampm;

    setTimeout(() => {
        updateClock()
    }, 1000); //for every 1000millsec (1 sec), call updateClock function
}

updateClock()
