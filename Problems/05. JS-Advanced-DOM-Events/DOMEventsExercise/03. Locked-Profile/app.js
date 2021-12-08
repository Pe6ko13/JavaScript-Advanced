function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(proBut => proBut.addEventListener('click', onTog));

    function onTog(ev) {
        const prof = ev.target.parentElement;
        const isActiveButt = prof.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActiveButt) {
            const infoDiv = prof.querySelector('div');

        // const infoDiv = Array.from(ev.target.parentElement.querySelectorAll('div'))
        //     .find(d => d.id.includes('HiddenFields'));

            if (ev.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                ev.target.textContent = 'Hide it';
            } else {
                infoDiv.style.display = '';
                ev.target.textContent = 'Show more';
            }
        }
    }

    document.querySelectorAll('input[type="radio"]').forEach(r => r.addEventListener('click', onLockToggle));
    function onLockToggle(ev) {
        const button = ev.target.parentElement.querySelector('button');
        
        if (ev.target.value == 'lock') {
            button.disabled = true;
        } else {
            button.disabled = false;
        }


    }
}