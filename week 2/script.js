function addNumbers() {

    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    number1 = Number(number1);
    number2 = Number(number2);

    let result = number1 + number2;

    document.getElementById("result").innerHTML = result;
}


function subtractNumbers() {

    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    number1 = Number(number1);
    number2 = Number(number2);

    let result = number1 - number2;

    document.getElementById("result").innerHTML = result;
}


function multiplyNumbers() {

    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    number1 = Number(number1);
    number2 = Number(number2);

    let result = number1 * number2;

    document.getElementById("result").innerHTML = result;
}