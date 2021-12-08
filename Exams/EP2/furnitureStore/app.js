window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById('model');
    const yearField = document.getElementById('year');
    const descriptionField = document.getElementById('description');
    const priceField = document.getElementById('price');
    const buttonAdd = document.getElementById('add');

    const totalPrice = document.querySelector('.total-price');
    const furnitureList = document.getElementById('furniture-list');

    buttonAdd.addEventListener('click', addFurn);

    function addFurn(ev) {
        ev.preventDefault();

        if (modelField.value != '' && descriptionField.value != '' && Number(yearField.value) > 0 && Number(priceField.value) > 0) {
            const tableRow = document.createElement('tr');
            tableRow.classList.add('info');
            tableRow.innerHTML = `<td>${modelField.value}</td>
                                <td>${Number(priceField.value).toFixed(2)}</td>
                                <td><button class="moreBtn">More Info</button>
                                    <button class="buyBtn">Buy it</button>
                                </td>`;
            const hideIt = document.createElement('tr');
            hideIt.classList.add('hide');
            hideIt.innerHTML = `<td>Year: ${Number(yearField.value)}</td>
                                <td colspan="3">Description: ${descriptionField.value}</td>`;
            
            const moreInfoBtn = tableRow.querySelectorAll('button');
            moreInfoBtn[0].addEventListener('click', showMore);
            moreInfoBtn[1].addEventListener('click', buyFurn);

            furnitureList.appendChild(tableRow);
            furnitureList.appendChild(hideIt);

            modelField.value = '';
            yearField.value = '';
            descriptionField.value = '';
            priceField.value = '';
        }
    };

    function showMore(ev) {
        const moreInfoTr = ev.target.parentElement.parentElement.nextElementSibling;
        if (ev.target.textContent == 'More Info') {
            ev.target.textContent = 'Less Info';
            moreInfoTr.style.display = 'contents';
        } else {
            ev.target.textContent = 'More Info';
            moreInfoTr.style.display = 'none';
        }
    };

    function buyFurn(ev) {
        const tr = ev.target.parentElement.parentElement;
        const hideTr = tr.nextElementSibling;

        hideTr.parentElement.removeChild(hideTr);

        const price = tr.querySelectorAll('td')[1].textContent;
        totalPrice.textContent = (Number(totalPrice.textContent) + Number(price)).toFixed(2);

        tr.parentElement.removeChild(tr);
    };    
    
}
