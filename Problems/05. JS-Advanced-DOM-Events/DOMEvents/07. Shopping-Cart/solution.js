function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkOut);
   const result = document.getElementsByTagName('textarea')[0]
   const cart = [];

   result.value = '';

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
         const product = ev.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);
         
         cart.push({
            name,
            price
         });

         result.value += `Added ${name} for ${price} to the cart.\n`
      }
   }

   function checkOut() {
      const prod = new Set();
      cart.forEach(p => prod.add(p.name));

      let total = cart.reduce((t, c) => t + c.price , 0);
      
      result.value += `You bought ${[...prod.keys()].join(', ')} for ${total.toFixed(2)}.\n`;
   }
}