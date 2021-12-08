const {expect} = require('chai');
const { createCalculator } = require('./subtract');

describe('Summator', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('should has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it('should be empty', () => {
        expect(instance.get()).to.equal(0);
    });
    

    it('should add numbers', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });

    it('should add multiple numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    });

    it('should subtract numbers', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    });

    it('should subtract multiple numbers', () => {
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3);
    });

    it('subtract and add numbers', () => {
        instance.add(1);
        instance.subtract(1);
        expect(instance.get()).to.equal(0);
    });

    it('numbers as strings', () => {
        instance.add('1');
        instance.subtract('2');
        expect(instance.get()).to.equal(-1);
    });   
});