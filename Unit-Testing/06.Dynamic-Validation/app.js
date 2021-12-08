function validate() {
    const inputEmail = document.getElementById('email');
    const regPattern = /(^[a-z]+@[a-z]+\.[a-z]+$)/;
    inputEmail.addEventListener('change', () => {
        if(!regPattern.test(inputEmail.value)) {
            inputEmail.classList.add('error');
        } else {
            inputEmail.classList.remove('error');
        }
    })
}