const { expect } = require("chai");

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr;
    }
};


describe("Tests number operations", function() {
    describe("pow number", function() {
        it("return pow number", function() {
            expect(numberOperations.powNumber(5)).to.equal(25);
        });
     });

     describe('number checker', () => {
         it('input is NaN', () => {
             expect(() => numberOperations.numberChecker('a')).to.throw('The input is not a number!');
         });

         it('input number lower than 100', () => {
             expect(numberOperations.numberChecker(50)).to.eql('The number is lower than 100!')
         });

         it('input number bigger than 100', () => {
            expect(numberOperations.numberChecker(150)).to.eql('The number is greater or equal to 100!')
        });

        it('input number equal 100', () => {
            expect(numberOperations.numberChecker(100)).to.eql('The number is greater or equal to 100!')
        });
     });

     describe('sum arrays', () => {
         it('sum 2 arrays', () => {
             expect(numberOperations.sumArrays([1, 2, 3], [3, 2])).to.deep.equal([4, 4, 3])
         });

         it('sum 2 arrays', () => {
            expect(numberOperations.sumArrays([1, 2], [3, 2, 1])).to.deep.equal([4, 4, 1])
        })
     })
});
