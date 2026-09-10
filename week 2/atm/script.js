let money = 10000;
let pin = 1234;

function checkBalance() {

    let p = document.getElementById("pin").value;

    if (p == pin) {
        document.getElementById("result").innerHTML =
            "Balance: Rs. " + money;
    }
    else {
        document.getElementById("result").innerHTML =
            "Wrong PIN";
    }
}

function withdraw() {

    let p = document.getElementById("pin").value;
    let amount = Number(document.getElementById("amount").value);

    if (p == pin) {

        if (amount > money) {
            document.getElementById("result").innerHTML =
                "Not enough money";
        }
        else {
            money = money - amount;

            document.getElementById("result").innerHTML =
                "Withdraw successful. Balance: Rs. " + money;
        }

    }
    else {
        document.getElementById("result").innerHTML =
            "Wrong PIN";
    }
}

function deposit() {

    let p = document.getElementById("pin").value;
    let amount = Number(document.getElementById("amount").value);

    if (p == pin) {

        money = money + amount;

        document.getElementById("result").innerHTML =
            "Deposit successful. Balance: Rs. " + money;
    }
    else {
        document.getElementById("result").innerHTML =
            "Wrong PIN";
    }
}