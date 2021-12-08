function encodeAndDecodeMessages() {

    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', function(e) {
        const massage = textareas[0].value
            .split('').map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

        textareas[0].value = '';
        textareas[1].value = massage;
    })

    buttons[1].addEventListener('click', function(e) {
        const massage = textareas[1].value
            .split('').map((char) => String.fromCharCode(char.charCodeAt(0) - 1)).join('');

        textareas[1].value = massage;
    })
    // const textareas = document.querySelectorAll('textarea');
    // const buttons = document.querySelectorAll('button');

    // const elems = {
    //     encode: {
    //         textAr: textareas[0],
    //         btn: buttons[0],
    //         func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
    //     },
    //     decode: {
    //         textAr: textareas[1],
    //         btn: buttons[1],
    //         func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
    //     }
    // }

    // document.getElementById('main').addEventListener('click', onClick);

    // function onClick(ev) {
    //     if (ev.target.tagName !== "BUTTON") {
    //         return;
    //     }

    //     const type = ev.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';
    //     const massage = elems[type].text.value.split('').map(elems[type].func).join('');

    //     elems.encode.text.value = '';
    //     elems.decode.text.value = massage;
    // }
}

