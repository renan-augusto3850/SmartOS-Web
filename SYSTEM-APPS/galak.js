document.getElementById("galak-app").addEventListener("click", function() {
    smart.inicializeWindow("Galak Browser", "500px", "auto");
    smart.innerHTML("<input id='address-website'>");
    smart.addInlineButtontoWindow("Ir", "go-galak", "50px", "50px");
    smart.addHTML("<object data='https://www.google.com.br' width='100%' height='400' id='website-view'></iframe>");
    var buttonGalak =  document.getElementById("go-galak");
    buttonGalak.style.backgroundColor = "blue";
    buttonGalak.style.width = "50px";
    buttonGalak.addEventListener("click", function() {
        const address = document.getElementById("address-website").value;
        document.getElementById("website-view").remove();
        smart.addHTML(`<object data='${address}' width='100%' height='400' id='website-view'></iframe>`);
    });
    smart.close(smart.appName);
});