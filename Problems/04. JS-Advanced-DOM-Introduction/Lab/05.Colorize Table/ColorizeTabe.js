function colorize() {
    const row = document.querySelectorAll('table tr')

    for (let index = 1; index < row.length; index += 2) { 
        row[index].style.backgroundColor = 'teal';
    };
}
