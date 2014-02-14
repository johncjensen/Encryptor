document.getElementById("decode").onclick = function() {
    var crazycodething = window.location.hash.substring(1);

    if (crazycodething != "") {
        var password = prompt("Enter The password please")

        if (password != null) {
            var message = CryptoJS.AES.decrypt(crazycodething, password).toString(CryptoJS.enc.Utf8);
            document.getElementById("secretmessagedata").innerHTML = message
            document.getElementById("decode").style.display = 'none'
            document.getElementById("newencodebutton").style.display = 'block'
            document.getElementById("newencodebutton").href = "index.html";

        }
    }
}
