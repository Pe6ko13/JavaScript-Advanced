function solution() {
    const addGiftButton = document.querySelector('.container div button');
    addGiftButton.setAttribute("id", "addGift-button");
    addGiftButton.addEventListener('click', addGift);
    const input = document.querySelector('input');
    const [listGifts, sentGifts, discardedGifts] = document.querySelectorAll('section ul');

    function addGift() {
        const gift = input.value;
        input.value = '';

        let el = e('li', gift, 'gift');
        let sendBtn = e('button', 'Send', 'sendButton');
        let discardBtn = e('button', 'Discard', 'discardButton');
        el.appendChild(sendBtn);
        el.appendChild(discardBtn);
        listGifts.appendChild(el);

        sendBtn.addEventListener('click', () => sendGift(gift, el));
        discardBtn.addEventListener('click', () => discardGift(gift, el));

        // let liElem = document.createElement('li');
        // liElem.classList.add('gift');
        // liElem.textContent = gift;

        // let btnSend = document.createElement('button');
        // btnSend.classList.add('sendButton');
        // btnSend.textContent = 'Send';
        // liElem.appendChild(btnSend);

        // let btnDiscard = document.createElement('button');
        // btnDiscard.classList.add('discardButton');
        // btnDiscard.textContent = 'Discard';
        // liElem.appendChild(btnDiscard);

        // listGifts.appendChild(liElem);
        
        // Array.from(listGifts.children)
        //     .sort((a, b) => a.textContent.localeCompare(b.textContent))
        //     .forEach(g => listGifts.appendChild(g));

        sortGifts();
    }

    function sendGift(name, gift) {
        gift.remove();
        const element = e('li', name, 'gift');
        sentGifts.appendChild(element);
    }

    function discardGift(name, gift) {
        gift.remove();
        const element = e('li', name, 'gift');
        discardedGifts.appendChild(element);
    }

    function sortGifts() {
        Array.from(listGifts.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(g => listGifts.appendChild(g));
    }

    function e(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if(className) {
            result.className = className;
        }
        return result;
    }
    
}