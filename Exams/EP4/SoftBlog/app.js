function solve(){
   let createBtn = document.querySelector('.site-content aside button.btn.create');
   createBtn.addEventListener('click', createArt);
   
   function createArt(ev) {
      ev.preventDefault();

      let authorInput = document.querySelector('#creator');
      let titleInput = document.getElementById('title');
      let categoryInput = document.getElementById('category');
      let contentInput = document.querySelector('#content');

      let artElem = document.createElement('article');

      let titleHeading = document.createElement('h1');
      titleHeading.textContent = titleInput.value;

      let categoryPar = document.createElement('p');
      categoryPar.textContent = 'Category:';
      let catStrong = document.createElement('strong');
      catStrong.textContent = categoryInput.value;
      categoryPar.appendChild(catStrong);

      let creatorPar = document.createElement('p');
      creatorPar.textContent = 'Creator:';
      let creatorStrong = document.createElement('strong');
      creatorStrong.textContent = authorInput.value;
      creatorPar.appendChild(creatorStrong);

      let contentPar = document.createElement('p');
      contentPar.textContent = contentInput.value;

      let buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('buttons');

      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn', 'delete');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', deleteArticle);
      buttonsDiv.appendChild(deleteBtn);

      let archiveBtn = document.createElement('button');
      archiveBtn.classList.add('btn', 'archive');
      archiveBtn.textContent = 'Archive';
      archiveBtn.addEventListener('click', archiveArticle);
      buttonsDiv.appendChild(archiveBtn);

      artElem.appendChild(titleHeading);
      artElem.appendChild(categoryPar);
      artElem.appendChild(creatorPar);
      artElem.appendChild(contentPar);
      artElem.appendChild(buttonsDiv);

      let postSection = document.querySelector('.site-content main section');
      postSection.appendChild(artElem);

      authorInput.value = '';
      titleInput.value = '';
      categoryInput.value = '';
      contentInput.value = '';
   }

   function deleteArticle(ev) {
      ev.target.parentElement.parentElement.remove();
   };

   function archiveArticle(ev) {
      let articleArchive = ev.target.parentElement.parentElement;
      let archiveSection = document.querySelector('.archive-section ol');

      let archiveList = Array.from(archiveSection.querySelectorAll('li'));
      let articleTitle = articleArchive.querySelector('h1').textContent;
      
      let newTitleLi = document.createElement('li');
      newTitleLi.textContent = articleTitle;

      articleArchive.remove();
      
      archiveList.push(newTitleLi);
      archiveList
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => archiveSection.appendChild(li));
   }
}
