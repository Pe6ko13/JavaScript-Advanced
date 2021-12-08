function solve(arr, com) {
    let sortedArr = arr;
    
    switch (com) {
        case 'asc':
            sortedArr.sort((a, b) => a - b)
            break;
        case 'desc':
            sortedArr.sort((a, b) => b - a)
            break;
    }

    return sortedArr;
}

solve([14, 7, 17, 6, 8], 'asc')

solve([14, 7, 17, 6, 8], 'desc')