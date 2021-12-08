function solve(input) {

    input.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < input.length; i++){
        console.log(`${i+1}.${input[i]}`)
    }


    // const result = input.sort();
    // let orderNumber = 1;
    // input.forEach(element => {
    //     console.log(`${orderNumber}.${element}`);
    //     orderNumber++
    // });
}

solve(["John", "Bob", "Christina", "Ema"])