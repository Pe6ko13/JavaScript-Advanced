function solve(input) {
    let arr = input.sort((a, b) => a - b);
    let newArr = [];

    while (arr.length > 0) {
        let first = arr.shift()
        let last = arr.pop()
        newArr.push(first, last)
    }
    return newArr
}

solve ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])