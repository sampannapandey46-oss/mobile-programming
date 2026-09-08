function addNumbers() {

    // Get the values from the HTML inputs
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    // Convert the values into numbers
    number1 = Number(number1);
    number2 = Number(number2);

    // Add the two numbers
    let result = number1 + number2;

    // Display the result on the webpage
    document.getElementById("result").innerHTML = result;
}