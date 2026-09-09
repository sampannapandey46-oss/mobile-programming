function checkResult() {

    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);
    let mark4 = Number(document.getElementById("mark4").value);
    let mark5 = Number(document.getElementById("mark5").value);
    let mark6 = Number(document.getElementById("mark6").value);
    let mark7 = Number(document.getElementById("mark7").value);
    let mark8 = Number(document.getElementById("mark8").value);

    let total = mark1 + mark2 + mark3 + mark4 +
                mark5 + mark6 + mark7 + mark8;

    let result = document.getElementById("result");

    if (total > 600) {
        result.innerHTML = "Distinction";
        result.style.color = "green";
    }
    else if (total >= 450) {
        result.innerHTML = "First Division";
        result.style.color = "green";
    }
    else if (total >= 300) {
        result.innerHTML = "Second Division";
        result.style.color = "green";
    }
    else {
        result.innerHTML = "Fail";
        result.style.color = "red";
    }
}