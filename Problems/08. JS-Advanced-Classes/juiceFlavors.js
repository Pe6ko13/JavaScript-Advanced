function solve(juiceArr) {
    let juiceAmount = new Map();
    let juiceBottle = new Map();

    for (let index = 0; index < juiceArr.length; index++) {
        let [juiceName, amount] = juiceArr[index].split(' => ');
        amount = Number(amount);

        if (!juiceAmount.has(juiceName)) {
            juiceAmount.set(juiceName, 0);
        }

        let totalAmount = juiceAmount.get(juiceName) + amount;

        if (totalAmount >= 1000) {
            if (!juiceBottle.has(juiceName)) {
                juiceBottle.set(juiceName, 0);
            }

            let newBottle = Math.trunc(totalAmount / 1000);
            let totalBottles = juiceBottle.get(juiceName) + newBottle;
            juiceBottle.set(juiceName, totalBottles);
        }

        juiceAmount.set(juiceName, totalAmount % 1000);

    }

    return Array.from(juiceBottle).map(([key, value]) => `${key} => ${value}`).join('\n');
}



console.log(solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']));


console.log(solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']));
