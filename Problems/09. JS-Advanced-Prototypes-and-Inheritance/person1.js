class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

function extand(classDefinition) {
    classDefinition.prototype.species = 'Human';
    classDefinition.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

extand(Person);
let p = new Person('Pesho', 'email@hit.bg');
console.log(p.species);
console.log(p.toSpeciesString());