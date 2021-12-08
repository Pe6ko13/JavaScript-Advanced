function  solve(arr) {
    let numberArr = [];
    for (let i of arr) {
        if (typeof(i) === 'number') {
            numberArr.push(i)
        } else {
            calculate(numberArr, i)
        }
    }
    if (numberArr.length >= 2) {
        console.log('Error: too many operands!');
    } else {
        console.log(numberArr.toString());
    }

    function calculate(numbers, operant) {
        if (numbers.length < 2) {
            console.log('Error: not enough operands!');
        }
        switch(operant) {
            case '+':
                numbers[numbers.length - 2] = numbers[numbers.length - 2] + numbers[numbers.length - 1];
                numbers.splice(-1, 1); 
                break;
            case '-':
                numbers[numbers.length - 2] = numbers[numbers.length - 2] - numbers[numbers.length - 1];
                numbers.splice(-1, 1); 
                break;
            case '*':
                numbers[numbers.length - 2] = numbers[numbers.length - 2] * numbers[numbers.length - 1];
                numbers.splice(-1, 1); 
                break;
            case '/':
                numbers[numbers.length - 2] = numbers[numbers.length - 2] / numbers[numbers.length - 1];
                numbers.splice(-1, 1); 
                break;
        }
    }
}

solve([3,
    4,
    '+']
   )

solve([5,
    3,
    4,
    '*',
    '-']
   )

solve([7,
    33,
    8,
    '-']
   )