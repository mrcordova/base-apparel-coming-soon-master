const emailInput = document.querySelector('input[type=email]');
const submitBtn = document.querySelector('button[type=submit]');
const emailDiv = document.querySelector('.email');
const errorMessageSpan = document.querySelector('.error');
let clicked = false;



emailInput.addEventListener("input", (e) => {
    
    if (clicked) {
        e.currentTarget.classList.toggle("email-error", !emailInput.checkValidity() );
        emailDiv.classList.toggle("email-error-border", !emailInput.checkValidity());
        errorMessageSpan.classList.toggle('error-hide', !emailDiv.classList.contains('email-error-border'));
        
    }
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clicked = true;

    
    emailInput.classList.toggle("email-error", !emailInput.checkValidity() || emailInput.value == "");
    emailDiv.classList.toggle("email-error-border", !emailInput.checkValidity()|| emailInput.value == "");
    errorMessageSpan.classList.toggle('error-hide',!emailDiv.classList.contains('email-error-border'));

})