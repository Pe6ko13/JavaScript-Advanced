function solve(input) {

    function hasWin(field, coordinates) {
        const[x, y] = coordinates;
        if ((field[0][y] === field[1][y]) && field[0][y] === field[2][y] && field[0][y] !== false) {
            return true;
        } else if (field[x][0] === field[x][1] && field[x][0] == field[x][2] && field[x][0] !== false) {
            return true;
        } else {return (field[0][0] === field[1][1] && field[0][0] === field[2][2] && field[0][0] !== false) || (field[0][2] === field[1][1] && field[0][2] === field[2][0]) && field[0][2] !== false;}
    }

    function printResult(field) {
        field.forEach(element => {
            console.log(element.join('\t'));
        });
    }
    
    let gameWon = false;
    let turnsPlayer = 0;
    const field = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let currentPlayer = 'X';

    for (let i = 0; i < input.length; i++) {
        const [x, y] = input[i].split(' ').map(el => parseInt(el));
        if (field[x][y]){
            console.log('This place is already taken. Please choose another!');
        } else {
            field[x][y] = currentPlayer;
            turnsPlayer++;

            if (hasWin(field, [x, y])) {
                console.log(`Player ${currentPlayer} wins!`);
                printResult(field);
                gameWon = true;
                break;
            } else if (turnsPlayer == 9) {
                break;
            }
            currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
            
        }
    }

    if (!gameWon) {
        console.log('The game ended! Nobody wins :(');
        printResult(field);
    }
}

solve(['0 1',
'0 0',
'0 2', 
'2 0',
'1 0',
'1 1',
'1 2',
'2 2',
'2 1',
'0 0']
);