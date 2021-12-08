function solve(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const ticketObj = [];

    tickets.forEach(element => {
        const [dest, price, status] = element.split('|');
        ticketObj.push(new Ticket(dest, Number(price), status));
    });

    switch (criteria) {
        case 'destination':
            ticketObj.sort((a, b) => {
                return a.destination.localeCompare(b.destination);
            });
            break;
        case 'status':
            ticketObj.sort((a, b) => {
                return a.status.localeCompare(b.status);
            });
            break;
    
        case 'price':
            ticketObj.sort((a, b) => {
                return a.price - b.price;
            });
            break;
    }

    return ticketObj;
}

console.log(solve(
['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination'));

console.log(solve(
['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'status'));

