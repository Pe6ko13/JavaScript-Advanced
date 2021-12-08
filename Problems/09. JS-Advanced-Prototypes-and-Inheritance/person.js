function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName,
        fullName: '',
    };

    Object.defineProperty(result, 'fullName', {
        get() {
            return `${firstName} ${lastName}`;
        },

        set(value) {
            const [f, l] = value.split(' ');
            if (f != undefined && l != undefined) {
                this.firstName = f;
                this.lastName = l;
            }
        }, 

        configurable: true,
        enumerable: true,
    });

    return result;
}