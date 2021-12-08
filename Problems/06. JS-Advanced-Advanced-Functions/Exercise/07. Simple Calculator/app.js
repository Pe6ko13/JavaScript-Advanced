function calculator() {
    let first;
    let second;
    let result;

    function init(s1, s2, s3) {
        first = document.querySelector(s1);
        second = document.querySelector(s2);
        result = document.querySelector(s3);
    }

    function add() {
        result.value = Number(first.value) + Number(second.value)
    }

    function subtract() {
        result.value = Number(first.value) - Number(second.value)
    }

    return {
        init,
        add,
        subtract
    }
}


const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 


