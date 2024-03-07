var isOpen = false;
var isHide = true;
class Smart {
    constructor(){
        this.appName = "";
        this.username = "";
    }
    openAppDrawer() {
        document.getElementById("app-drawer").style.bottom = "80px";
    }
    closeAppDrawer() {
        document.getElementById("app-drawer").style.bottom = "-100%";
    }
    showSuspendedMenu(){
        document.getElementById('suspended-menu').style.display = 'block';
    }
    hideSuspendedMenu(){
        document.getElementById('suspended-menu').style.display = 'none';
    }
    inicializeWindow(appName, width, height) {
        this.appName = appName;
        document.querySelector(".layout").innerHTML += `<div class="window" id="window-${appName}">
            <div class="TopofWindow" id="TopofWindow-${appName}" style='width: ${width + 2};'>
                <button id="closebutton-${appName}" class='closebutton'>X</button>
                <p class="namefromapp" id="nameapp">${appName}</p></div>
            <div class="window-into" id="window-into-${appName}" style='width: ${width}; height: ${height};'>

            </div>
        </div>`
        var windowElement = document.getElementById("window-" + appName);
        document.querySelector(".app-drawer").style.bottom = "-100%";
        isOpen = false;
        const titleBarElement = document.getElementById('TopofWindow-' + appName);

        let isDragging = false;
        let offsetX, offsetY;

        titleBarElement.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - windowElement.getBoundingClientRect().left;
            offsetY = e.clientY - windowElement.getBoundingClientRect().top;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const x = e.clientX - offsetX;
                const y = e.clientY - offsetY;
                windowElement.style.left = `${x}px`;
                windowElement.style.top = `${y}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }
    addTexttoWindow(text, Elementclass, type) {
        if(type === "bold"){
            document.getElementById("window-into-" + this.appName).innerHTML += `<h1 class='${Elementclass}'>${text}</h1>`;
        } else {
            document.getElementById("window-into-" + this.appName).innerHTML += `<p class='${Elementclass}'>${text}</p>`;
        }
    }
    addImagetoWindow(Elementsource, Elementclass, width, height) {
        document.getElementById("window-into-" + this.appName).innerHTML += `<img src='${Elementsource}' class='${Elementclass}' style='width: ${width}; heigth: ${height};'>`;
    }
    addButtontoWindow(text, Elementid, width, height) {
        document.getElementById("window-into-" + this.appName).innerHTML += `<br> <button id='${Elementid}' style='width: ${width}; heigth: ${height};'>${text}</button>`;
    }
    addInlineButtontoWindow(text, Elementid, width, height) {
        document.getElementById("window-into-" + this.appName).innerHTML += `<button id='${Elementid}' style='width: ${width}; heigth: ${height};'>${text}</button>`;
    }
    windowBackgroundColor(color) {
        document.getElementById("window-into-" + this.appName).style.backgroundColor = color;
    }
    windowColor(color) {
        document.getElementById("window-into-" + this.appName).style.color = color;
    }
    addHTML(code) {
        document.getElementById("window-into-" + this.appName).innerHTML += code;
    }
    innerHTML(code) {
        document.getElementById("window-into-" + this.appName).innerHTML = code;
    }
    close(appName) {
        document.getElementById("closebutton-" + appName).addEventListener("click", function() {
            document.getElementById("window-" + appName).remove();
        });
    }
}
var smart = new Smart();
document.getElementById("open-drawer").addEventListener("click", function(){
    if(isOpen === false){
        smart.openAppDrawer();
        isOpen = true;
    } else{
        smart.closeAppDrawer();
        isOpen = false;
    }
});
document.getElementById("show-menu").addEventListener("click", function(){
    if(isHide === true){
        smart.showSuspendedMenu();
        isHide = false;
    } else{
        smart.hideSuspendedMenu();
        isHide = true;
    }
});