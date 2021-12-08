function solve(input) {
    const stringN = input.toString();
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < stringN.length; i++) {
        let num = stringN[i];
        sum += Number(num);
    }
    for (let j = 0; j < stringN.length - 1; j++) {
        if (stringN[j] != stringN[j + 1]) {
            isSame = false;
        }
    }
    
    console.log(isSame);
    console.log(sum);
}

solve(2222222)

solve(1234)