function subtract() {
    const a = Number(document.getElementById('firstNumber').value);
    const b = Number(document.getElementById('secondNumber').value);
    const result = document.getElementById('result');
    result.innerHTML = (a - b).toString();
}
