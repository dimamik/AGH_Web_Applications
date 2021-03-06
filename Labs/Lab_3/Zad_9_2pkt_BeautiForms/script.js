/* JavaScript */
let add_name_inputEl = document.getElementById("add_name_input");
let add_phone_inputEl = document.getElementById("add_phone_input");
let add_buttonEl = document.getElementById("add_button");
let catalogEl = document.getElementsByClassName("catalog");
let templateEl = document.getElementById("template");

let DELETE_COUNTER = 0;

add_buttonEl.addEventListener("click", add_element);
function appendNewChild(name, phone) {
    let itemEl = templateEl.cloneNode(true);
    itemEl.style.display = "block";
    catalogEl[0].appendChild(itemEl);
    itemEl.querySelector(".name_surname_text").innerHTML = name;
    itemEl.querySelector(".phone_text").innerHTML = phone;
    itemEl.querySelector(".trash").addEventListener("click",
        function callback() {
            delete_el(itemEl);
        }, false
    );
}

function validateName(text) {

    for (letter of text) {
        if (!(/[a-zA-Z]/).test(letter)) {
            alert("Name should contain only letters")
            return false;
        }

    }
    if (text.length < 1) {
        alert("Name can't be empty")
        return false;
    }
    return true;
}

function validatePhone(text) {

    for (letter of text) {
        if (!(/[0-9+]/).test(letter)) {
            alert("Phone must contain only numbers or +")
            return false;
        }

    }
    if (text.length < 5) {
        alert("Phone_len jest za mala")
        return false;
    }
    return true;
}

function add_element() {
    let name = add_name_inputEl.value;
    let phone = add_phone_inputEl.value;
    if (validateName(name) && validatePhone(phone)) {
        appendNewChild(name, phone);
    }



}
function delete_el(itemEl) {
    catalogEl[0].removeChild(itemEl);

}