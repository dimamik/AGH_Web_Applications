/* JavaScript */


let counterEl = document.getElementById("counter");
let add_tapEl = document.getElementById("add_tap");
let app_b_El = document.getElementById("app_b");
let remove_b_El = document.getElementById("remove_b");

app_b_El.addEventListener("click", appendListener);
remove_b_El.addEventListener("click", removeListener)

var prev_number = 0;
function increaseCounter() {
    prev_number += 1;
    counterEl.innerHTML = "Count of taps: " + prev_number;
}

function appendListener() {
    counterEl.innerHTML = "Listener Added";
    add_tapEl.addEventListener("click", increaseCounter);
}

function removeListener() {
    add_tapEl.removeEventListener("click", increaseCounter);
    counterEl.innerHTML = "Listener Removed";
    prev_number = 0;
}
