function validate() {
    const userReg = /(^[A-Za-z0-9]{3,20}$)/;
    const passReg = /(^[\w]{5,15}$)/;
    const emailReg = /^.*@.*\..*$/;

    let isValidInput =  true;
    let isChecked = false; 

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const inputUser = document.getElementById('username')
        if(!userReg.test(inputUser.value)) {
            isValidInput = false;
            inputUser.style.borderColor = 'red';
        } else {
            inputUser.style.borderColor = 'none';
        }

        const inputEmail = document.getElementById('email');
        if (!emailReg.test(inputEmail.value)) {
            isValidInput = false;
            inputEmail.style.borderColor = 'red';
        } else {
            inputEmail.style.borderColor = 'none';
        }

        const passwordField = document.getElementById('password');
        const confPassField = document.getElementById('confirm-password');

        if (!passReg.test(passwordField.value)) {
            isValidInput = false;
            passwordField.style.borderColor = 'red';
        } else {
            passwordField.style.borderColor = 'none';
        }

        if (!passReg.test(confPassField.value) 
            || passwordField.value != confPassField.value) {
            isValidInput = false;
            confPassField.style.borderColor = 'red';
        } else {
            confPassField.style.borderColor = 'none';
        }

        if (isChecked) {
            const cNumber = document.getElementById('companyNumber');
            if (Number(cNumber.value) < 1000 || Number(cNumber.value) > 9999) {
                cNumber.style.borderColor = 'red';
                isValidInput = false;
            } else {
                cNumber.style.borderColor = 'none';
            }
        }

        const validDiv = document.getElementById('valid');
        if (isValidInput) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    })

    document.getElementById('company').addEventListener('change', (e) => {
        const compField = document.getElementById('companyInfo');
        if (e.target.checked == true) {
            isChecked = true;
            compField.style.display = 'block';
            
        } else {
            isChecked = false;
            compField.style.display = 'none';
        }
    })
}
