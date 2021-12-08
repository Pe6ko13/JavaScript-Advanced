function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange({target}) {
        const patt = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (patt.test(target.value)) {
            target.classList.remove('error');
        } else {
            target.classList.add('error')
        }
    }
}