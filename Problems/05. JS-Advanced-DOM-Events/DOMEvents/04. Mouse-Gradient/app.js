function attachGradientEvents() {
    const grad = document.getElementById('gradient')
    grad.addEventListener('mousemove', onMove);
    const output = document.getElementById('result');

    function onMove(ev) {
        const box = ev.target;
        let offset = Math.floor(ev.offsetX / box.clientWidth * 100);

        output.textContent = `${offset}%`
    }
}