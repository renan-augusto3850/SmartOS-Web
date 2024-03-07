document.getElementById("todo-app").addEventListener("click", function() {
    smart.inicializeWindow("Lista de Tarefas", "300px", "auto");  
    smart.addHTML("<ul id='task-list' class='task-list'></ul>");    
    smart.addHTML("<input type='text' id='task-input' class='task-input' placeholder='Digite uma tarefa'>");    
    smart.addButtontoWindow("Adicionar Tarefa", "add-task-button", "120", "30");  
    document.getElementById('add-task-button').addEventListener('click', function() {
        const taskInput = document.getElementById('task-input').value;
        if (taskInput.trim() !== "") {
            document.getElementById('task-list').innerHTML += `<input type='checkbox' value='to do'>${taskInput} <br>`;
            document.getElementById('task-input').value = '';
        }
    });
    smart.close("Lista de Tarefas");
});
