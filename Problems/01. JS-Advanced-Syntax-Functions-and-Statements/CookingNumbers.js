function solve(num, ...ops) {
    let prime = Number(num);

    for (let i = 0; i < ops.length; i++) {
        switch(ops[i]) {
            case 'chop':
               prime /= 2
               console.log(prime); 
               break;
            case 'dice':
                prime = Math.sqrt(prime)
                console.log(prime); 
                break;
            case 'spice':
                prime += 1;
                console.log(prime); 
                break;
            case 'bake':
                prime *= 3
                console.log(prime); 
                break;
            case 'fillet':
                prime *= 0.8
                console.log(prime); 
                break;
        }
    }
}

solve ('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve ('9', 'dice', 'spice', 'chop', 'bake', 'fillet')