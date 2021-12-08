function addItem() {
    const elements = {
        inText: document.getElementById('newItemText'),
        inValue: document.getElementById('newItemValue'),
        selectMenu: document.getElementById('menu')
    };

    const $option = document.createElement('option');

    $option.textContent = elements.inText.value;
    $option.value = elements.inValue.value;

    elements.selectMenu.appendChild($option);

    elements.inText.value = '';
    elements.inValue.value = '';
}