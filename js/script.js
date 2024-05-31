const emailInput = document.querySelector('input[type=email]');



emailInput.addEventListener("input", (e) => {
    console.log(e.currentTarget.value);
})