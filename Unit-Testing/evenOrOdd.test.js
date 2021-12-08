const { expect } = require('chai');
const {isOddOrEven} = require('./evenOrOdd');

describe('Test even or odd', () => {
    it('string is undefined', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('string length is even', () => {
        expect(isOddOrEven('even')).to.be.equal('even');
    })

    it('string length is odd', () => {
        expect(isOddOrEven('odd')).to.be.equal('odd')
    })
})