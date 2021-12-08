function solve(input) {

    // input.sort((a, b) => a.length - b.length);
    // input.sort((a, b) => a.localeCompare(b))
    
    input.sort(customSort);
    console.log(input.join('\n'));

    function customSort(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }
    
}


solve(['alpha', 
'beta', 
'gamma']
)

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
)

solve(['test', 
'Deny', 
'omen', 
'Default']
)