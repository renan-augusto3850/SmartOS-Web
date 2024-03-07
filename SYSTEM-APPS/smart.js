document.getElementById("smart-app").addEventListener("click", function(){
    smart.inicializeWindow("Smart", "300px", "auto");
    smart.addTexttoWindow("Bem Vindo ao SmartOs! " + smartUsername, "hello", "bold");
    smart.addImagetoWindow("/ASSETS/smart.png", "smart-logo", "50px", "50px");
    smart.addButtontoWindow("Vamos la!", "letsgo", "50px", "30px");
    var letsgo = document.getElementById("letsgo");
    letsgo.style.backgroundColor = "red";
    letsgo.addEventListener("click", function() {
        const page = `<h1>Explore o maximo desse sistema</h1>
        <p>Estarei aqui para te ajudar!</p>`;
        smart.innerHTML(page);
        let welcomeSound = new Audio("/ASSETS/Recording.wav");
        welcomeSound.play();
    });
    smart.close(smart.appName);
});