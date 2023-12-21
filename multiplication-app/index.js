const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const score1 = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));

if(score<0){
    score=0
}

score1.innerText = `score: ${score}`
const form1 = document.getElementById("form");
const input1 = document.getElementById("input")
const quest1 = document.getElementById("question");

quest1.innerText =`what is ${num1} multiply by ${num2}?`; //use backtick
const ans = num1*num2;

form1.addEventListener("submit", ()=>{
    const userAns = +input1.value //convert string to int by adding +
    if (userAns ===ans){
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }
})


function updateLocalStorage(){ //store score into local storage whenever refresh
    localStorage.setItem("score", JSON.stringify(score)) //convert int to string
}
