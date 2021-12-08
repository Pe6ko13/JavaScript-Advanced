function solve(input) {
    let text = input.toUpperCase().match(/\w+/g).join(', ')
    console.log(text);
}

solve ('Hi, how are you?')

solve('hello')