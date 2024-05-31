const emailInput = document.querySelector('input[type=email]');
const submitBtn = document.querySelector('button[type=submit]');
const emailDiv = document.querySelector('.email');
const errorMessageSpan = document.querySelector('.error');
let clicked = false;



emailInput.addEventListener("input", (e) => {
    
    if (clicked) {
        e.currentTarget.classList.toggle("email-error", !emailInput.checkValidity() );
        emailDiv.classList.toggle("email-error-border", !emailInput.checkValidity());
        errorMessageSpan.classList.toggle('error-hide', emailInput.checkValidity());
        
    }
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clicked = true;

    // console.log(emailInput.checkValidity())
    emailInput.classList.toggle("email-error", !emailInput.checkValidity() || emailInput.value == "");
    emailDiv.classList.toggle("email-error-border", !emailInput.checkValidity()|| emailInput.value == "");
    errorMessageSpan.classList.toggle('error-hide', emailInput.checkValidity() || emailInput.value == "");

})