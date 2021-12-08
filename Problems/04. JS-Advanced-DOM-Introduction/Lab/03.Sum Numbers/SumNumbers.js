function calc() {
    // TODO: sum = num1 + num2
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);

    const sum = a + b;
    document.getElementById('sum').value = sum;
}
