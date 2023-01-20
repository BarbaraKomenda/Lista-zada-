{
    const tasks = [];

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };
    
    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({ content: newTaskContent});
        render()
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll("js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });
    };

    const bindToggleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll("js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };

    const render = () => {
        let tasksList = "";

        for (const task of tasks) {
            tasksList +=`
            <li class="tasks__item ja-task">
                <button class="tasks__button tasks__buton--toggleDeon js-toggleDone">
                    ${task.done ? "&#10003;" : ""}
                </button>
                <span class="tasks__content${ task.done ? " tasks__content--done" : ""}">${task.content}</span>
                <button class="tasks__button tasks__button--remove ja-remove">
                    fa fa-trash-o
                </button>
        
            </li>
           `; 
        }
        document.querySelector(".js-tasks").innerHTML = tasksList;

        bindRemoveEvents();
        bindToggleDoneEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector("js-newTask");
        const newTaskContent = newTaskElement.ariaValueMax.trim();

        if (newTaskContent !=="") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
}
newTaskElement.focus();
    };

    const init = () => {
render();

const form = document.querySelector("js-form");
form.addEventListener("submit", onFormSubmit);
};

init();

}