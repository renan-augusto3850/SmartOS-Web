var smartUsername;
if(!getCookie("smart-user")){
    document.getElementById("welcome-screen").style.display = "block";
    document.getElementById("continue-v1").addEventListener("click", function() {
        const username = document.querySelector(".username-input").value;
        smartUsername = username;
        setCookie("smart-user", username, "9999", false);
        document.body.innerHTML += `<div class="top-desk">
            <button id="show-menu" class="system-button"><img src="ASSETS/smart-transparent.png" width="30" height="30" style="float: left; margin-left: 10px; margin-top: 5px;"></button>
        </div>`;
        document.querySelector(".top-desk").innerHTML += `<p style='float: right; margin-right: 50%; color: white;'>${username}</p>`;
        document.getElementById("right-layout").innerHTML = `<h1>Cadastro concluido co sucesso!</h1>
        <br>
        <button onclick='document.getElementById("welcome-screen").remove()'>Finalizar</button>`;
    });
    document.body.innerHTML += `<div class="taskbar">
        <button id="terminal-app" class="system-button"><img src="ASSETS/terminal.png" width="50" height="40" class="icon"></button>
        <button id="open-drawer" class="system-button"><img src="ASSETS/smart-transparent.png" width="50"></button>
        <button id="settings-app" class="system-button"><img src="ASSETS/settings.jpeg" width="40" class="icon"></button>
    </div>`;
} else{
    const username = getCookie("smart-user");
    smartUsername = username;
    document.body.innerHTML += `<div class="top-desk">
        <button id="show-menu" class="system-button"><img src="ASSETS/smart-transparent.png" width="30" height="30" style="float: left; margin-left: 10px; margin-top: 5px;"></button>
    </div>`;
    document.querySelector(".top-desk").innerHTML += `<p style='float: right; margin-right: 50%; color: white;'>${username}</p>`;
    let settings = getMultiValueCookie("settings-smart");
    console.log(settings);
    if(settings != undefined){
        document.documentElement.style.setProperty("--window-color", settings[0]);
        document.documentElement.style.setProperty("--button-color", settings[1]);
    }
    document.body.innerHTML += `<div class="taskbar">
        <button id="terminal-app" class="system-button"><img src="ASSETS/terminal.png" width="50" height="40" class="icon"></button>
        <button id="open-drawer" class="system-button"><img src="ASSETS/smart-transparent.png" width="50"></button>
        <button id="settings-app" class="system-button"><img src="ASSETS/settings.jpeg" width="40" class="icon"></button>
    </div>`;
    document.getElementById("welcome-screen").remove();
}
var elem = document.documentElement;
function fullScreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(); // Safari
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen(); // IE11
    }
}
var time = setInterval(function() {
    document.getElementById("boot-screen").remove();
    clearInterval(time);
}, 2000);