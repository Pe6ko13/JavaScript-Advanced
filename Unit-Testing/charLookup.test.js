const {expect} = require('chai');
const {lookupChar} = require('./charLookup');

describe('Test lookup char', () => {
    it('string and index not correct type', () => {
        expect(lookupChar(9, 9)).to.be.undefined;
        expect(lookupChar('yes', 'no')).to.be.undefined;
        expect(lookupChar('yes', 9.543)).to.be.undefined;
    })

    it('Incorrect index', ()=> {
        expect(lookupChar('yes', 4)).to.be.equal('Incorrect index');
        expect(lookupChar('yes', -4)).to.be.equal('Incorrect index');
    })

    it('return char at the index', () => {
        expect(lookupChar('yes', 1)).to.be.equal('e')
    })
});