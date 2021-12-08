function fibo() {
    let a = 0;
    let b = 1;

    function getNum() {
        let nextNum = a + b;
        a = b;
        b = nextNum;
        return a;
    }
    return getNum;
}

let f = fibo();
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());