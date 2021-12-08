window.addEventListener('load', solve);

function solve() {
    const inputGenre = document.getElementById('genre');
    const inputNameSong = document.getElementById('name');
    const inputAuthor = document.getElementById('author');
    const inputDate = document.getElementById('date');
    const addButton = document.getElementById('add-btn');
    
    addButton.addEventListener('click', clickAdd);

    function clickAdd(ev) {
        ev.preventDefault();

        if (inputGenre.value == '' || inputNameSong.value == '' || inputAuthor.value == '' || inputDate.value == '') {
            return;
        }

        const collectionOfSongsDiv = document.querySelector('.all-hits-container');
        
        const hitsInfoDiv = document.createElement('div');
        hitsInfoDiv.classList.add('hits-info');

        let image = document.createElement('img');
        image.src = './static/img/img.png';
        hitsInfoDiv.appendChild(image);

        const header1 = document.createElement('h2');
        header1.textContent = `Genre: ${inputGenre.value}`;
        hitsInfoDiv.appendChild(header1);

        const header2 = document.createElement('h2');
        header2.textContent = `Name: ${inputNameSong.value}`;
        hitsInfoDiv.appendChild(header2);

        const header3 = document.createElement('h2');
        header3.textContent = `Author: ${inputAuthor.value}`;
        hitsInfoDiv.appendChild(header3);

        const header4 = document.createElement('h3');
        header4.textContent = `Date: ${inputDate.value}`;
        hitsInfoDiv.appendChild(header4);

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        hitsInfoDiv.appendChild(saveBtn);

        const likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        hitsInfoDiv.appendChild(likeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        hitsInfoDiv.appendChild(deleteBtn);

        collectionOfSongsDiv.appendChild(hitsInfoDiv);

        inputGenre.value = '';
        inputAuthor.value = '';
        inputDate.value = '';
        inputNameSong.value = '';

        likeBtn.addEventListener('click', addLikes);
        saveBtn.addEventListener('click', saveSong);
        deleteBtn.addEventListener('click', delFunc);
    }

    function addLikes(e) {
        const likes = document.querySelector('.likes p');
        let like = likes.textContent;
        let [label, num] = like.split(': ');
        num = Number(num);
        num++;
        let result = `${label}: ${num}`;
        likes.textContent = result;

        e.target.disabled = true;
    }

    function delFunc(e) {
        e.target.parentElement.remove();
    }

    function saveSong(e) {
        let saved = document.querySelector('.saved-container');
        const savedSong = e.target.parentElement;

        document.querySelector('.save-btn').remove();
        document.querySelector('.like-btn').remove();

        saved.appendChild(savedSong);

        // const hitsInfoDiv = document.createElement('div');
        // hitsInfoDiv.classList.add('hits-info');

        // let image = document.createElement('img');
        // image.src = './static/img/img.png';
        // hitsInfoDiv.appendChild(image);

        // const header1 = document.createElement('h2');
        // header1.textContent = `Genre: ${inputGenre.value}`;
        // hitsInfoDiv.appendChild(header1);

        // const header2 = document.createElement('h2');
        // header2.textContent = `Name: ${inputNameSong.value}`;
        // hitsInfoDiv.appendChild(header2);

        // const header3 = document.createElement('h2');
        // header3.textContent = `Author: ${inputAuthor.value}`;
        // hitsInfoDiv.appendChild(header3);

        // const header4 = document.createElement('h3');
        // header4.textContent = `Date: ${inputDate.value}`;
        // hitsInfoDiv.appendChild(header4);

        // const deleteBtn = document.createElement('button');
        // deleteBtn.classList.add('delete-btn');
        // deleteBtn.textContent = 'Delete';
        // hitsInfoDiv.appendChild(deleteBtn);

        // deleteBtn.addEventListener('click', delFunc);

        // saved.appendChild(hitsInfoDiv);

        // let move = document.querySelector('.hits-info');
        // move.remove();
    }
}    