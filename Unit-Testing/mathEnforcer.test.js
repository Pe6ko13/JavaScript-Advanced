const {expect} = require('chai');
const {mathEnforcer} = require('./mathEnforcer');

describe('Test mathEnforcer', () => {
    describe('Test addFive', () => {
        it('wrong input type', () => {
            expect(mathEnforcer.addFive('yes')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });
        
        it('correct input', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
            expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01);
            expect(mathEnforcer.addFive(-2.5)).to.be.closeTo(2.5, 0.01);
        });
    });

    describe('Test subtractTen', () => {
        it('wrong input type', () => {
            expect(mathEnforcer.subtractTen('yes')).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
        
        it('correct input', () => {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
            expect(mathEnforcer.subtractTen(-5.5)).to.be.closeTo(-15.5, 0.01);
            expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.01);
        });
    });

    describe('Test sum', () => {
        it('wrong input type', () => {
            expect(mathEnforcer.sum('yes', 'tr')).to.be.undefined;
            expect(mathEnforcer.sum([], 9)).to.be.undefined;
            expect(mathEnforcer.sum(9, {})).to.be.undefined;
        });
        
        it('correct input', () => {
            expect(mathEnforcer.sum(2, 8)).to.be.equal(10);
            expect(mathEnforcer.sum(-2, 8)).to.be.equal(6);
            expect(mathEnforcer.sum(2, -8)).to.be.equal(-6);
            expect(mathEnforcer.sum(-2, -8)).to.be.equal(-10);

            expect(mathEnforcer.sum(2.5, 7.3)).to.be.closeTo(9.8, 0.01);
            expect(mathEnforcer.sum(-2.5, 8.5)).to.be.closeTo(6, 0.01);
            expect(mathEnforcer.sum(2.5, -8.1)).to.be.closeTo(-5.6, 0.01);
            expect(mathEnforcer.sum(-2.5, -8.3)).to.be.closeTo(-10.8, 0.01);
        });
    });
});
