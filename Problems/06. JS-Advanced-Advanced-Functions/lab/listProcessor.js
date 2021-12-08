function solve(input) {
    let arr = [];

    let obj = {
        add,
        remove,
        print
    }

    function add(str) {
        arr.push(str)
    }

    function remove(str) {
        arr = arr.filter(x => x != str)
    }

    function print() {
        console.log(arr.join(','));
    }

    input.forEach(x => {
        const [data, value] = x.split(" ")

        obj[data](value)
    })
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']
['add pesho', 'add george', 'add peter', 'remove peter','print']
)