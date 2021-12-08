const { expect } = require("chai");

let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}


describe("Tests dealership", function() {
    describe("new car cost", function() {
        it("if we have discount", function() {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000)
        });

        it('we dont have discount', () => {
            expect(dealership.newCarCost('BMW', 3000)).to.equal(3000)
        });
     });

     describe('car equipment', () => {
         it('correct extras', () => {
             expect(dealership.carEquipment(['wheel', 'seat', 'tyres'], [0, 1])).to.deep.equal(['wheel', 'seat'])
         });

         it('correct extras', () => {
            expect(dealership.carEquipment(['wheel', 'seat', 'tyres'], [2])).to.deep.equal(['tyres'])
        });
     });

     describe('euroCategory', () => {
         it('if cat more or eql to 4', () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
         });

         it('if cat more or eql to 4', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
         });

         it('cat less than class 4', () => {
            expect(dealership.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!')
         });
     });
});
