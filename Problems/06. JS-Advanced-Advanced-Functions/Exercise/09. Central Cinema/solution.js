function solve() {
    const [name, hall ,ticketPrice] = document.querySelectorAll('#container input');
    const addMovieBut = document.querySelector('#container button');
    const movieSection = document.querySelector('#movies ul')
    const archiveSection = document.querySelector('#archive ul')
    const clearButton = document.querySelector('#archive button');
    addMovieBut.addEventListener('click', addMovie);
    clearButton.addEventListener('click', () => {
        document.querySelector('#archive ul').innerHTML = '';
    })

    function addMovie(e) {
        e.preventDefault();
        if (name.value !== '' && hall.value != '' && ticketPrice.value != '' && !isNaN(Number(ticketPrice.value))) {
            const movie = document.createElement('li');
            movie.innerHTML = `<span>${name.value}</span>
                                <strong>Hall: ${hall.value}</strong>
                                <div>
                                    <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
                                    <input placeholder="Tickets Sold"/>
                                    <button>Archive</button>
                                </div>`
            movieSection.appendChild(movie);

            const button = movie.querySelector('div button');
            button.addEventListener('click', addToArchive);

            name.value = '';
            hall.value = '';
            ticketPrice.value = '';
        }
    }

    function addToArchive(e) {
        e.preventDefault();
        const inputValue = e.target.parentElement.querySelector('input');
        const ticketPr = e.target.parentElement.querySelector('strong');
        const movieName = e.target.parentElement.parentElement.querySelector('span');

        if (inputValue.value != '' && !isNaN(Number(inputValue.value))) {
            const income = Number(inputValue.value) * Number(ticketPr.textContent);

            const liElement = document.createElement('li');
            liElement.innerHTML = `<span>${movieName.textContent}</span>
                                    <strong>Total amount: ${income.toFixed(2)}</strong>
                                    <button>Delete</button>`
            
            archiveSection.appendChild(liElement);
            const button = liElement.querySelector('button');
            button.addEventListener('click', deleteEntry);

            e.target.parentElement.parentElement.remove();
        }
    }

    function deleteEntry(e) {
        e.target.parentElement.remove();
    }
}