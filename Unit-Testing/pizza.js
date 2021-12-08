const { expect } = require("chai");

let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink){
                result += ` and ${obj.orderedDrink}.`;
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ');
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`;

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}

// const { expect } = require('chai');

describe("Tests for pizza", function() {
    describe("makeOrder", function() {
        it("order pizza only", function() {
            expect(pizzUni.makeAnOrder({orderedPizza: 'Nero'})).to.equal(`You just ordered Nero`)
        });

        it('order pizza and dring', () => {
            expect(pizzUni.makeAnOrder({orderedPizza: 'Nero', orderedDrink: 'Coke'})).to.equal(`You just ordered Nero and Coke.`)
        });

        it('no orders', () => {
            expect(() => pizzUni.makeAnOrder({})).to.throw('You must order at least 1 Pizza to finish the order.')
        });
    });

    describe('getRemainingWork', function() {
        it('test when order is ready', () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'Nero', status: 'ready'}])).to.equal('All orders are complete!')
        });

        it('test when order still preparing', () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'Nero', status: 'preparing'}])).to.equal(`The following pizzas are still preparing: Nero.`);
        });

        it('test when order still preparing', () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'Nero', status: 'preparing'}, {pizzaName: 'Mic', status: 'ready'}])).to.equal(`The following pizzas are still preparing: Nero.`);
        });

        it('test when order still preparing', () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'Nero', status: 'preparing'}, {pizzaName: 'Mic', status: 'preparing'}])).to.equal(`The following pizzas are still preparing: Nero, Mic.`);
        });
    });

    describe('orderType', function() {
        it('type carry out', () => {
            expect(pizzUni.orderType(100, 'Carry Out')).to.equal(90)
        });

        it('type delivery', () => {
            expect(pizzUni.orderType(100, 'Delivery')).to.equal(100)
        });
    });
})
