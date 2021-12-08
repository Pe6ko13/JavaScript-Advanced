const { expect } = require('chai')
const {cinema} = require('./cinema')


describe('cinema', function() {
    describe('showMovies', function() {
        it("empty array", function() {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.')
        });

        it ('length array', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War'])).to.have.length.above(2);
        })

        it ('not empty array', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War'])).to.equal('King Kong, The Tomorrow War');
        });
    });

    describe('ticketPrice', () => {
        it ('premiere price', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });

        it ('invalid input', () => {
            expect(() => cinema.ticketPrice('Pep')).to.throw();
        });

        it ('empty input', () => {
            expect(() => cinema.ticketPrice('')).to.throw();
        })
    });
    
    describe('swapSeatsInHall', () => {
        it ('corect input', () => {
            expect(cinema.swapSeatsInHall(5, 10)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, 1)).to.equal("Successful change of seats in the hall.");
        });

        it ('wrong input number', () => {
            expect(cinema.swapSeatsInHall(2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.5, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 2.5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-5, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, -2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(25, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 55)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall()).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('a', 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 'bll')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, '1')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('5', 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('yes', null)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(null, 'mov')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(32, 25)).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
});
