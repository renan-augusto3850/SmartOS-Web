document.getElementById("notepad-app").addEventListener("click", function() {
     smart.inicializeWindow("Notepad", "300px", "auto");
     smart.addTexttoWindow("Bem-vindo ao Notepad!", "welcome-text", "");
     smart.addTexttoWindow("Comece a escrever aqui...", "user-text", "");
     smart.addHTML("<textarea id='notepad-textarea' class='notepad-textarea'></textarea>");
     smart.addHTML("<button id='clear-button' class='clear-button'>Limpar</button>");
     document.getElementById('clear-button').addEventListener('click', function() {
          document.getElementById('notepad-textarea').value = '';
     });
     smart.close(smart.appName);
});
