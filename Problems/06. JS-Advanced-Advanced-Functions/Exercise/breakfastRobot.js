function solve() {
    const recipes = {
        apple: {protein: 0, carbohydrate: 1, fat: 0, flavour: 2},
	    lemonade: {protein: 0, carbohydrate: 10, fat: 0, flavour: 20},
	    burger: {protein: 0, carbohydrate: 5, fat: 7, flavour: 3},
	    eggs: {protein: 5, carbohydrate: 0, fat: 1, flavour: 1},
	    turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    }

    const storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0,
    }

    function restock(microEl, quantity) {
        storage[microEl] += quantity;
        return 'Success'
    }

    function prepare(required, quantity) {
        // const remainSt = {};
        for (const el in recipes[required]) {
            const remain = storage[el] - recipes[required][el] * quantity;
            if (remain < 0) {
                return `Error: not enough ${el} in stock`
            } else {
                storage[el] = remain;
            }
        }
        // Object.assign(storage, remainSt);
        return 'Success';
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }

    function control(str) {
        const [com, item, quant] = str.split(' ');

        switch (com) {
            case 'restock':
                return restock(item, Number(quant));
            case 'prepare':
                return prepare(item, Number(quant));
            case 'report':
                return report();
        }
    }
    return control;
}

