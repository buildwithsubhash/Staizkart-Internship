// ==========================================
// DAY 10 - TO-DO LIST APP
// ==========================================


// ==========================================
// 1. APP STATE
// ==========================================

// Array containing all tasks

let tasks = [];


// ==========================================
// 2. SELECT HTML ELEMENTS
// ==========================================

const taskInput =
    document.querySelector("#taskInput");

const addButton =
    document.querySelector("#addButton");

const taskList =
    document.querySelector("#taskList");

const taskCount =
    document.querySelector("#taskCount");


// ==========================================
// 3. ADD TASK
// ==========================================

function addTask() {

    const taskText = taskInput.value.trim();


    // Check empty input

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }


    // Create task object

    const newTask = {

        id: Date.now(),

        text: taskText,

        completed: false

    };


    // Add task to array

    tasks.push(newTask);


    // Clear input

    taskInput.value = "";


    // Update screen

    renderTasks();

}


// ==========================================
// 4. DISPLAY TASKS
// ==========================================

function renderTasks() {

    // Clear old list

    taskList.innerHTML = "";


    // Display every task

    tasks.forEach(function(task) {

        // Create list item

        const listItem =
            document.createElement("li");

        listItem.classList.add("task-item");


        // Add completed class

        if (task.completed) {

            listItem.classList.add("completed");

        }


        // Create task text

        const taskText =
            document.createElement("span");

        taskText.textContent = task.text;

        taskText.classList.add("task-text");


        // Create action container

        const actions =
            document.createElement("div");

        actions.classList.add("task-actions");


        // Create complete button

        const completeButton =
            document.createElement("button");

        completeButton.textContent =
            task.completed
                ? "Undo"
                : "Complete";

        completeButton.classList.add(
            "complete-button"
        );


        // Complete button event

        completeButton.addEventListener(
            "click",
            function() {

                toggleTask(task.id);

            }
        );


        // Create delete button

        const deleteButton =
            document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.classList.add(
            "delete-button"
        );


        // Delete button event

        deleteButton.addEventListener(
            "click",
            function() {

                deleteTask(task.id);

            }
        );


        // Add buttons

        actions.appendChild(completeButton);

        actions.appendChild(deleteButton);


        // Add text and actions

        listItem.appendChild(taskText);

        listItem.appendChild(actions);


        // Add task to page

        taskList.appendChild(listItem);

    });


    // Update task count

    updateTaskCount();

}


// ==========================================
// 5. COMPLETE / UNCOMPLETE TASK
// ==========================================

function toggleTask(taskId) {

    tasks.forEach(function(task) {

        if (task.id === taskId) {

            task.completed = !task.completed;

        }

    });


    renderTasks();

}


// ==========================================
// 6. DELETE TASK
// ==========================================

function deleteTask(taskId) {

    tasks = tasks.filter(function(task) {

        return task.id !== taskId;

    });


    renderTasks();

}


// ==========================================
// 7. UPDATE TASK COUNT
// ==========================================

function updateTaskCount() {

    const totalTasks = tasks.length;

    const completedTasks =
        tasks.filter(function(task) {

            return task.completed;

        }).length;


    taskCount.textContent =
        "Total Tasks: " +
        totalTasks +
        " | Completed: " +
        completedTasks;

}


// ==========================================
// 8. ADD BUTTON EVENT
// ==========================================

addButton.addEventListener(
    "click",
    function() {

        addTask();

    }
);


// ==========================================
// 9. ENTER KEY EVENT
// ==========================================

taskInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            addTask();

        }

    }
);


// ==========================================
// 10. INITIAL RENDER
// ==========================================

renderTasks();


// ==========================================
// DAY 10 COMPLETE
// ==========================================

console.log("===== DAY 10 TO-DO APP =====");
console.log("Tasks:", tasks);
