function addItem() {
    const input = document.getElementById('newItemText');
    console.log(input);

    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    document.getElementById('items').appendChild(liElement);
    input.value = '';
}