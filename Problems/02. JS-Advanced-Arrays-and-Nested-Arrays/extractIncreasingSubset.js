// function solve(arr) {
//     let biggest = Number.MIN_SAFE_INTEGER;
//     const biggernumbers = arr.filter((el) => {
//         if (el > biggest) {
//             biggest = el;
//             return true;
//         }
//         return false;   
//     })
//     return biggernumbers
// }



// function solve(arr) {
//     const result = [];
//     let biggest = Number.MIN_SAFE_INTEGER;

//     arr.forEach(element => {
//         if(element >= biggest) {
//             result.push(element);
//             biggest= element
//         }        
//     });
//     return result
// }



function solve(arr) {
    let bigest = Number.MIN_SAFE_INTEGER;
    let result = [];

    arr.reduce((acc, current) => {
        if (current >= bigest) {
            bigest = current;
            acc.push(current);
        }
        return acc;
    }, result)

    console.log(result);
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )

    solve([20, 
        3, 
        2, 
        15,
        6, 
        1]
        )