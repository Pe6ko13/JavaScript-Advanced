function addItem() {
    const input = document.getElementById('newItemText');
    console.log(input);

    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement);

    liElement.appendChild(button);

    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function removeElement(ev) {
        const parent = ev.target.parentNode;
        parent.remove();
    }
}