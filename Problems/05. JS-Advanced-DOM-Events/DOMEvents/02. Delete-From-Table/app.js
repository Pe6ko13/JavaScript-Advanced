function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');

    const rows = Array.from(document.querySelector('tbody').children).filter(r => r.children[1].textContent == input.value);
    
    rows.forEach(r => r.remove());
    input.value = '';

    document.getElementById('result').textContent = rows.length > 0 ? 'Deleted.' : 'Not found.';

    // let removed = false;

    // for (let row of rows) {
    //     if (row.children[1].textContent == input.value) {
    //         row.remove();
    //         input.value = '';
    //         removed = true;
    //     }
    // }

    // if (rows.length > 0) {      //removed
    //     document.getElementById('result').textContent = 'Deleted.'
    // } else {
    //     document.getElementById('result').textContent = 'Not found.'
    // }
}