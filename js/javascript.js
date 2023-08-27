// We want to see some non-trivial Javascript code
// At a minimum, you should demonstrate a few simple uses of event-driven JavaScript for DOM manipulation
// You should use ES6 syntax throughout: e.g. don't use "var", use the modern tools (template literals, arrow functions).
// There should be no JavaScript errors in the browser console

// For more marks, we like to see a bit more complex use of JavaScript, perhaps some looping and/or more complex DOM manipulation.
// Accessing APIs is a great option if it fits with your project, or you can work with your own, local data.
// Your code should be DRY, if you have repeated code, consider refactoring as a function with arguments for example.

const firstname = document.querySelector("#firstname");
const surname = document.querySelector("#surname");
const emailaddress = document.querySelector("#emailaddress");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


contactForm.addEventListener("submit", ev => {
    ev.preventDefault();
    if (validateForm()) {
        dialogbox.showModal();
}
});


function validateForm() {
    clearMessage();
    let errorFlag = false;

    if (firstname.value.length < 2) {
        errorNodes[0].innerText = "Please fill in the firstname";
        firstname.classList.add("error-border");
        errorFlag = true;
    }

    if (surname.value.length < 2) {
        errorNodes[1].innerText = "Please fill in the surname";
        surname.classList.add("error-border");
        errorFlag = true;
    }

    if (!emailaddressIsValid(emailaddress.value)) {
        errorNodes[2].innerText = "Please fill in the email address";
        emailaddress.classList.add("error-border");
        errorFlag = true;
    }

    if (message.value.length < 2) {
        errorNodes[3].innerText = "Please write a message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag) {
        success.innerText = "DETAILS SENT SUCCESSFULLY, THANK YOU";
    }

    function clearMessage() {
        for (let i = 0; i < errorNodes.length; i++) {
            errorNodes[i].innerText = "";
        }
        success.innerText = "";
        firstname.classList.remove("error-border");
        surname.classList.remove("error-border");
        emailaddress.classList.remove("error-border");
        message.classList.remove("error-border");

    }

    function emailaddressIsValid(emailaddress) {
        let pattern = /\S+@\S+\.\S+/;
        return pattern.test(emailaddress);
    }

    return !errorFlag;
    
    

}




