function showQR() {

    let name = document.getElementById("name").innerText;
    let address = document.getElementById("address").innerText;

    let information = "Name: " + name + 
                      "\nAddress: " + address;

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: information,
        width: 128,
        height: 128
    });

    document.getElementById("qrBox").style.display = "block";
}

function closeQR() {

    document.getElementById("qrBox").style.display = "none";

}