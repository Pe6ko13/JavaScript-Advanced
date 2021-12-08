const {expect} = require('chai');
const testNumbers = require('./testNumbers');

describe('Tests testNumber app', function () {
    describe('sumNumbers', () => {
        it('works with valid numbers', ()=> {
            expect(testNumbers.sumNumbers(3, 5)).to.be.equal('8.00');
        });

        it ('work with negative numbers', () => {
            expect(testNumbers.sumNumbers(3, -5)).to.be.equal('-2.00');
        });

        it ('works with floats numbers', () => {
            expect(testNumbers.sumNumbers(1.555, 0.333)).to.equal('1.89');
        });

        it ('returns undefined', () => {
            expect(testNumbers.sumNumbers('1', '2')).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(1, '2')).to.be.equal(undefined);
            expect(testNumbers.sumNumbers('1', 2)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(null, null)).to.be.undefined;
            expect(testNumbers.sumNumbers('1', null)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, '2')).to.be.undefined;
        })
    });

    describe('numberChecker', () => {
        it ('works with odd value', () => {
            expect(testNumbers.numberChecker(1)).to.be.equal('The number is odd!');
        });

        it ('works with even value', () => {
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');
        });

        it ('works with odd string value', () => {
            expect(testNumbers.numberChecker('1')).to.contain('odd');
        });

        it ('works with even string value', () => {
            expect(testNumbers.numberChecker('2')).to.contain('even');
        });

        it ('detect invalid parameter', () => {
            expect(() => testNumbers.numberChecker('aasdaf')).to.throw();
        });
    });

    describe('averageSumArray', () => {
        it ('works with integers', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])). to.equal(2);
        });

        it ('works with floats', () => {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])). to.equal(2.5);
        });
    });
});