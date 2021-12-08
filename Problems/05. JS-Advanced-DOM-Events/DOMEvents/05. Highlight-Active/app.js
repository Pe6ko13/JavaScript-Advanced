function focused() {
    const fields = Array.from(document.getElementsByTagName('input'));

    for (let field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onFocus(evt) {
        // evt.target.parentNode.className = 'focused';
        evt.target.parentNode.classList.add('focused')
    }

    function onBlur(evt) {
        // evt.target.parentNode.className = '';
        evt.target.parentNode.classList.remove('focused')
    }
}