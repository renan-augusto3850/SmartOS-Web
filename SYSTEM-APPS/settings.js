document.getElementById("settings-app").addEventListener("click", function() {
    smart.inicializeWindow("Configurações", "auto", "auto");
    let mainPage = `<h1>Bem vindo ${smartUsername}</h1>`;
    let stylesPage = `<h1>Personalizar</h1>
    <br>
    <p>Transparencia da Janela:</p>
    <input type='range' min='0.2' max='1' step='0.01' id='blur-window-range'>
    <br>
    <p>Selecione a cor dos botões:</p>
    <select id='button-color-select'>
        <option value='blue'>Azul</option>
        <option value='red'>Vermelho</option>
        <option value='gray'>Cinza</option>
        <option value='purple'>Roxo</option>
        <option value='transparent'>Transparente</option>
    </select>
    <br>
    <button id='save-styles-button'>Salvar</button>`;
    smart.innerHTML(mainPage);
    smart.addButtontoWindow("Personalizar", "styles-button", "100px", "40px");
    document.getElementById("styles-button").addEventListener("click", function() {
        smart.innerHTML(stylesPage);
        document.getElementById("save-styles-button").addEventListener("click", function() {
            let input_value_blur = document.getElementById("blur-window-range").value;
            var button_color = document.getElementById("button-color-select").value;
            document.documentElement.style.setProperty("--window-color", `rgba(255, 255, 255, ${input_value_blur})`);
            document.documentElement.style.setProperty("--button-color", button_color);
            let settings = ["rgba(255, 255, 255, " + input_value_blur + ")", button_color];
            setMultiCookie("settings-smart", settings, 30);
        });
    });
    smart.close(smart.appName);
});