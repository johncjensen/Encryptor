var encoder = {
    setMessage: function() {
        this.message = document.getElementById("message").value;

    },
    getPassword: function() {
        this.password = prompt("Enter password to thwart the fn NSA");
    },
    setUrl: function() {
        this.url = "decode.html#" + this.encrypt();
    },
    replaceMessageWithUrl: function() {
        document.getElementById("message").style.display = 'none'
        document.getElementById("secretlink").style.display = 'block';
        document.getElementById("encrypt").style.display = 'none'
        document.getElementById("secretlink").href = this.url;
    },
    encrypt: function() {
        cypher = CryptoJS.AES.encrypt(this.message, this.password)
        console.log("Verified: " +
            CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8))
        return cypher
    },
    protect: function() {
        this.setMessage()
        this.getPassword()
        this.setUrl()
        this.replaceMessageWithUrl()
    }
}
document.getElementById("encrypt").onclick = function() {
    encoder.protect();
}
