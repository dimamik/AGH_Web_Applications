/* JavaScript */
let biggerEl = document.querySelector("#bigger");
let smallEl = document.querySelector("#small");
let mediumEl = document.querySelector("#medium");
let totalEl = document.querySelector("#totalCounts");
let stopStartPropagationEl = document.querySelector("#stopStartPropagation");

let total_value = 0


biggerEl.addEventListener("click",clickedBigger);
smallEl.addEventListener("click",clickedSmallEl);
mediumEl.addEventListener("click",clickedMediumEl);

function shouldPropagate(e){
    if (! stopStartPropagation.checked){
        e.stopPropagation(); 
    }
}

function clickedBigger(e){
    alert("Clicked Blue of Value 1");
    total_value+=1;
    shouldPropagate(e);
    updateTotal();
}
function clickedMediumEl(e){
    alert("Clicked Red of Value 2");
    if (total_value<=30)
        total_value+=2;
    shouldPropagate(e);
    updateTotal();
}
function clickedSmallEl(e){

    alert("Clicked Yellow of Value 5");
    if (total_value<=50)
        total_value+=5;
    shouldPropagate(e);
    updateTotal();
}
function updateTotal(){
    totalEl.innerHTML = total_value;
}
function reset(){
    total_value = 0;
    updateTotal();
}