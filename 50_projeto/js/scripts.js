
// função que adciona tarefa
function addTask() {
    // título da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) { // se existe taskTitle
        // colna o template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true); // clonenode clona o html em uma nova variável

        // adiciona título
        newTask.querySelector(".task-title").textContent = taskTitle;

        // remove as classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        // adicionar o evento remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });

        // adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        });

        // limpar texto
        document.querySelector("#task-title").value = "";

    }
}

// função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

// função de completar tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
}

// Evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {
    e.preventDefault();

    addTask();

});