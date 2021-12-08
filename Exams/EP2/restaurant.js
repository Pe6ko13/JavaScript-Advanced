class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach(element => {
            let [name, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            if (this.budgetMoney >= price) {
                if (!this.stockProducts[name]) {
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] += quantity;
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        });
        return this.history.join('\n');
    }

    addToMenu(meal, needProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: {},
                price: price
            };

            needProducts.forEach(el => {
                let [name, quantity] = el.split(' ');
                quantity = Number(quantity);
                this.menu[meal].products[name] = quantity;
            });

            if (Object.keys(this.menu).length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
        
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...';
        } else {
            let result = [];
            for (let meal in this.menu) {
                result.push(`${meal} - $ ${this.menu[meal].price}`);
            }
            return result.join('\n');
        }
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            for (let prod in this.menu[meal].products) {
                if (!this.stockProducts[prod] || this.stockProducts[prod] < this.menu[meal].products[prod]) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }

            for (let produc in this.menu[meal].products) {
                this.stockProducts[produc] -= this.menu[meal].products[produc];
            }
            
            this.budgetMoney += this.menu[meal].price;

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log('-'.repeat(100));

let citchen = new Restaurant(1000);
console.log(citchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(citchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(citchen.showTheMenu());

console.log('-'.repeat(100));

let pitchen = new Restaurant(1000);
pitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
pitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(pitchen.makeTheOrder('frozenYogurt'));

