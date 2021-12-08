class List {
    constructor() {
        this.size = 0;
        this.numbers = [];
    }

    add(number) {
        this.numbers.push(number);
        this.numbers.sort((a, b) => a -b);
        this.size++;
    };

    get(index) {
        if (0 > index || index >= this.numbers.length) {
            throw new Error('No such index');
        }
        return this.numbers[index];
    }

    remove(index) {
        if (0 > index || index >= this.numbers.length) {
            throw new Error('No such index');
        }
        this.numbers.splice(index, 1);
        this.size--;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
