function create(words) {
   const cont = document.getElementById('content');

   for (let word of words) {
      const div = document.createElement('div');
      const par = document.createElement('p');
      par.textContent = word;
      par.style.display = 'none';
      div.appendChild(par);

      div.addEventListener('click', reveal);

      cont.appendChild(div);
   }

   function reveal(ev) {
      ev.currentTarget.children[0].style.display = '';
   }
}