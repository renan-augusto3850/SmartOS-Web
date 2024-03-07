document.getElementById("terminal-app").addEventListener("click", function() {
    smart.inicializeWindow("Terminal", "300px", "400px");
    let mainPage = `<p style='position: absolute; left: 10px; margin-top: 40px;'>${smartUsername}*></p>
    <input id='input-command' type='text' style='margin-top: 40px;'>`;
    smart.windowBackgroundColor("black");
    smart.windowColor("white");
    smart.innerHTML(mainPage);
    var inputDoom = document.getElementById("input-command");
    inputDoom.style.backgroundColor = "black";
    inputDoom.style.border = "transparent";
    inputDoom.style.color = "white";
    inputDoom.style.outline = "none";
    inputDoom.style.marginTop = "15px";
    inputDoom.style.marginLeft = "-15px";
    inputDoom.style.width = "90%";
    inputDoom.style.height = "30px";
    inputDoom.addEventListener('keyup', function(e){ 
        var key = e.which || e.keyCode; 
        if (key == 13) {
            let command = inputDoom.value;
            if(command.search("echo") === 0) {
                smart.innerHTML(`<p style='position: absolute; left: 10px;'>${smartUsername}*>${command}</p> <br> <p style='position: absolute; left: 40px;'>${command.slice(5)}</p>`);
                smart.addHTML(mainPage);
            }
        }
    });
    smart.close(smart.appName);
});