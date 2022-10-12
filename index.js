import { validateEmail } from "./lib/utils.js"

function submitFormData(event) {
    event.preventDefault();

    let resultValidate = isValidInputEmail();
    showOrHiddeValidationItems(resultValidate);
}

function isValidInputEmail() {
    let inputText = document.getElementById("email").value;
    return validateEmail(inputText);
}

function showOrHiddeValidationItems (resultValidate) {
    let iconError = document.getElementsByClassName("iconError")[0];
    let textError = document.getElementsByClassName("textError")[0];
    if (resultValidate === false) {
        iconError.classList.add("show");
        textError.classList.add("show");
    } else {
        iconError.classList.add("hidden");
        textError.classList.add("hidden");
        alert("Su correo ha sido enviado exitosamente. Gracias.");
    }
}

const submit = document.getElementById("submit");
submit.addEventListener("click", submitFormData);