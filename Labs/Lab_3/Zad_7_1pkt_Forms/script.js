/* JavaScript */

let nameEl = document.getElementById("name");
let surnameEl = document.getElementById("surname");
let phoneEl = document.getElementById("phone");
let dateEl = document.getElementById("date");
let rok_emeryturaEl = document.getElementById("rok_emerytura");
let submit_buttonEl = document.getElementById("submit_button");

submit_buttonEl.addEventListener("click", validateAll);

function showError(el_id, err_message) {
    document.getElementById(el_id).style.display = "block";
    document.getElementById(el_id).innerHTML = err_message;
}

function clearError(el_id) {
    document.getElementById(el_id).style.display = "none";
}

function validateAll() {
    validateName();
    validateSurname();
    validatePhone();
    validateRok_emerytura();
    validateDate();
    validatePossibilityOfDates();
}

function validateName() {
    text = nameEl.value;
    clearError("mistake-name");
    for (letter of text) {
        if (!(/[a-zA-Z]/).test(letter))
            showError("mistake-name", "Name needs to conatain only letters")
    }
    if (text.length < 1) {
        showError("mistake-name", "Name can't be empty")
    }
}

function validateSurname() {
    text = surnameEl.value;
    clearError("mistake-surname");
    for (letter of text) {
        if (!(/[a-zA-Z]/).test(letter))
            showError("mistake-surname", "Surname needs to conatain only letters")
    }
    if (text.length < 1) {
        showError("mistake-surname", "Surname can't be empty")
    }
}
function validatePhone() {
    text = phoneEl.value;
    clearError("mistake-phone");
    for (letter of text) {
        if (!(/[0-9+]/).test(letter))
            showError("mistake-phone", "Phone needs to conatain only numbers (or +)")
    }
    if (text.length < 5) {
        showError("mistake-phone", "Phone is not long enough")
    }
}

function validateRok_emerytura() {
    text = rok_emeryturaEl.value;
    clearError("mistake-rok_emerytura");
    for (letter of text) {
        if (!(/[0-9]/).test(letter))
            showError("mistake-rok_emerytura", "Year should contain only numbers")
    }
    if (text.length != 4) {
        showError("mistake-rok_emerytura", "Not correct length or provided not only numbers")
    }
}

function validateDate() {
    dateOfBirth = dateEl.valueAsDate;
    clearError("mistake-dateEl");
    if (dateOfBirth == null) {
        showError("mistake-dateEl", "Date can't be empty")
    }

}

function validatePossibilityOfDates() {
    dateOfBirth = dateEl.valueAsDate;
    if (dateOfBirth > Date.now()) {
        showError("mistake-rok_emerytura", "You need to check dates (date of birth and emeryture) one more time")
    }
    if (document.getElementById("male").checked) {
        if (dateOfBirth.getFullYear() + 65 != parseInt(rok_emeryturaEl.value))
            showError("mistake-rok_emerytura", "You need to check dates (date of birth and emeryture) one more time")

    }
    else {
        if (dateOfBirth.getFullYear() + 60 != parseInt(rok_emeryturaEl.value))
            showError("mistake-rok_emerytura", "You need to check dates (date of birth and emeryture) one more time")
    }
}