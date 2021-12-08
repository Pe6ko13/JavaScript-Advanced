const { expect } = require("chai");

const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};


describe("Tests library", function() {
    describe("calcPriceBook", function() {
        it("wrong input", function() {
            expect(() => library.calcPriceOfBook(2, 'a')).to.throw();
            expect(() => library.calcPriceOfBook(undefined, 3.5)).to.throw();
            expect(() => library.calcPriceOfBook(2, NaN)).to.throw();
            expect(() => library.calcPriceOfBook(NaN, 2)).to.throw();
            expect(() => library.calcPriceOfBook('a', 2.5)).to.throw();
            expect(() => library.calcPriceOfBook('rr', NaN)).to.throw();
            expect(() => library.calcPriceOfBook('rr', undefined)).to.throw();
        });

        it('discount', () => {
            expect(library.calcPriceOfBook('pep', 1970)).to.equal('Price of pep is 10.00');
            expect(library.calcPriceOfBook('pep', 1980)).to.equal('Price of pep is 10.00');
            expect(library.calcPriceOfBook('pep', -1980)).to.equal('Price of pep is 10.00');
        });

        it('discount', () => {
            expect(library.calcPriceOfBook('pep', 1990)).to.equal('Price of pep is 20.00');
            expect(library.calcPriceOfBook('pep', 2020)).to.equal('Price of pep is 20.00');
        });
    });

    describe('findBook', () => {
        it('arr length = 0', () => {
            expect(() => library.findBook([], 'pep')).to.throw('No books currently available');
        });

        it('if book present in arr', () => {
            expect(library.findBook(['pep', 'opi'], 'pep')).to.equal("We found the book you want.");
        });

        it('book not in the arr', () => {
            expect(library.findBook(['opi', 'pop'], 'pep')).to.equal("The book you are looking for is not here!");
        });

    });

    describe('arrangeTheBook', () => {
        it('not integer or negative', () => {
            expect(() => library.arrangeTheBooks(3.5)).to.throw("Invalid input");
            expect(() => library.arrangeTheBooks('a')).to.throw("Invalid input");
            expect(() => library.arrangeTheBooks(-5)).to.throw("Invalid input");
        });

        it('available spaces more or equal to input', () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(20)).to.equal("Great job, the books are arranged.");
        });

        it('available spaces less than input', () => {
            expect(library.arrangeTheBooks(100)).to.equal("Insufficient space, more shelves need to be purchased.");
            expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.");
        })
    });
     
});
