"use strict";



document.getElementById("hesablaBtn").addEventListener("click", function() {
    var text = document.getElementById("Textarea").value;
    var sozler = text.split(" ");
    var sayi = sozler.length;
    document.getElementById("netice").innerHTML = "Cumle de " + sayi + " soz var.";
});
