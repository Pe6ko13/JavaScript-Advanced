function matrix(input) {

    let sum = input[0].reduce((a, b) => a+b, 0);

    for (let row = 1; row < input.length; row++) {
        let rowSum = input[row].reduce((a, b) => a+b, 0);

        if (sum !== rowSum) {
            console.log('false');
            return;
        }
    }

    for (let col = 0; col < input.length; col++) {
        let colSum = input.reduce((a, b) => a+b[col], 0);

        if (sum !== colSum){
            console.log('false');
            return;
        }
    }

    console.log('true');

}

// function magicMatrices(matrix) {
//     for (let i = 0; i < matrix.length - 1; i++) {
//         let sumROne = matrix[i].reduce((a, b) => a + b, 0);
//         let sumRTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
//         let sumCOne = 0;
//         let sumCTwo = 0;
 
//         for (let j = 0; j < matrix.length; j++) {
//             sumCOne += matrix[i][j];
//             sumCTwo += matrix[i + 1][j];
//         }
 
//         if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
//             return false;
//         }
//     }
 
//     return true;
// }

matrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )

matrix([[11, 32, 45],
 [21, 0, 1],
 [21, 1, 1]]
)

matrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   )