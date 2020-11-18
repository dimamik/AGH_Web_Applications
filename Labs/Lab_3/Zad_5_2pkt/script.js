/* JavaScript */
let biggerEl = document.getElementById("bigger");
let smallEl = document.getElementById("small");
let mediumEl = document.getElementById("medium");
let totalEl = document.querySelector("#totalCounts");
let stopStartPropagationEl = document.querySelector("#stopStartPropagation");
let getAlertsEl = document.querySelector("#getAlerts");
let resetButtonEl = document.getElementById("resetButton");

let total_value = 0
let MAX_CLICKS_SMALL = 30;
let MAX_CLICKES_MEDIUM = 50;
let MAX_CLICKS_BIG = 55;

biggerEl.addEventListener("click", clickedBigger);
smallEl.addEventListener("click", clickedSmallEl);
mediumEl.addEventListener("click", clickedMediumEl);
resetButtonEl.addEventListener("click", reset);

function shouldPropagate(e) {
    if (!stopStartPropagation.checked) {
        e.stopPropagation();
    }
}

function alertIfShould(message) {
    if (getAlertsEl.checked)
        alert(message);
}

function updateTotal() {
    totalEl.innerHTML = total_value;
}

function reset() {
    total_value = 0;
    updateTotal();
    mediumEl.style.backgroundColor = "red";
    smallEl.style.backgroundColor = "yellow";
    biggerEl.style.backgroundColor = "blue";
}

function checkIfShouldDisable() {
    if (total_value >= MAX_CLICKS_SMALL) {
        mediumEl.style.backgroundColor = "gray";
    }
    if (total_value >= MAX_CLICKES_MEDIUM) {
        smallEl.style.backgroundColor = "gray";
    }
    if (total_value > MAX_CLICKS_BIG) {
        biggerEl.style.backgroundColor = "gray";
    }
}

function update(e, message) {
    shouldPropagate(e);
    updateTotal();
    alertIfShould(message);
    checkIfShouldDisable();

}

function clickedBigger(e) {

    if (total_value <= MAX_CLICKS_BIG)
        total_value += 1;

    update(e, "Clicked Blue of Value 1");
}

function clickedMediumEl(e) {

    if (total_value <= MAX_CLICKS_SMALL)
        total_value += 2;

    update(e, "Clicked Red of Value 2");
}

function clickedSmallEl(e) {
    if (total_value <= MAX_CLICKES_MEDIUM)
        total_value += 5;

    update(e, "Clicked Yellow of Value 5");
}
