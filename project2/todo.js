//  - The app should include features such as adding new tasks, marking tasks as completed, deleting tasks, filtering the list by completed or incomplete tasks, and sorting tasks by the due date or priority.

//- To create the Task object with properties like task description, due date, and priority level, use prototypes.
//- Manage the list of tasks using arrays and array methods such as push(), filter(), and sort().
//- When a user adds a new task, create a new Task object and add it to the array.
//- When a user marks a task as completed, use filter() to find the task in the array and update its status.
//- When a user deletes a task, remove it from the array using splice().
//- You mean need to use something like (stdin) to read input from the user (Google it  )
//- Print for the user a list of actions that he can do.

//Example:
//***************************
//Welcome to JS TODO-APP
//***************************
//Select an action:
//1) Add a new task
//2) List all tasks
//3) List completed tasks
//4) Mark the task as done
//5) Delete a task
//6) Sort tasks by the due date
//7) Sort tasks by priority
//8) Clear all tasks

const todoApp = function (){
    let tasks = [];
    let readline = require('readline');
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let menu = `
    ***************************
    Welcome to JS TODO-APP
    ***************************
    Select an action:
    1) Add a new task
    2) List all tasks
    3) List completed tasks
    4) Mark the task as done
    5) Delete a task
    6) Sort tasks by the due date
    7) Sort tasks by priority
    8) Clear all tasks
    9) Exit
    `;
    console.log(menu);
    rl.on('line', function (input) {
        switch (input) {
            case '1':
                addTask();
                break;
            case '2':
                listAllTasks();
                break;
            case '3':
                listCompletedTasks();
                break;
            case '4':
                markTaskAsDone();
                break;
            case '5':
                deleteTask();
                break;
            case '6':
                sortTasksByDueDate();
                break;
            case '7':
                sortTasksByPriority();
                break;
            case '8':
                clearAllTasks();
                break;
            case '9':
                rl.close();
                break;
            default:
                console.log("Invalid input, please try again");
                break;
        }
    });
    function addTask() {
        console.log("Add a new task");
        rl.question("Task description: ", function (description) {
            rl.question("Due date: ", function (dueDate) {
                rl.question("Priority level: ", function (priority) {
                    let task = {
                        description: description,
                        dueDate: dueDate,
                        priority: priority,
                        status: "incomplete"
                    };
                    tasks.push(task);
                    console.log("Task added successfully");
                    console.log(menu);
                });
            });
        });
    }
    function listAllTasks() {
        console.log("List all tasks");
        if (tasks.length === 0) {
            console.log("No tasks to show");
        } else {
            for (let i = 0; i < tasks.length; i++) {
                console.log(`Task ${i + 1}: ${tasks[i].description} - ${tasks[i].dueDate} - ${tasks[i].priority} -
}
                ${tasks[i].status}`);
            }
        }
        console.log(menu);
    }
    function listCompletedTasks() {
        console.log("List completed tasks");
        if (tasks.length === 0) {
            console.log("No tasks to show");
        } else {
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].status === "complete") {
                    console.log(`Task ${i + 1}: ${tasks[i].description} - ${tasks[i].dueDate} - ${tasks[i].priority} -
}
                ${tasks[i].status}`);
                }
            }
        }
        console.log(menu);
    }
    function markTaskAsDone() {
        console.log("Mark the task as done");
        rl.question("Task number: ", function (taskNumber) {
            if (taskNumber > tasks.length || taskNumber <= 0) {
                console.log("Invalid task number");
                console.log(menu);
            } else {
                tasks[taskNumber - 1].status = "complete";
                console.log("Task marked as done successfully");
                console.log(menu);
            }
        });
    }
    function deleteTask() {
        console.log("Delete a task");
        rl.question("Task number: ", function (taskNumber) {
            if (taskNumber > tasks.length || taskNumber <= 0) {
                console.log("Invalid task number");
                console.log(menu);
            } else {
                tasks.splice(taskNumber - 1, 1);
                console.log("Task deleted successfully");
                console.log(menu);
            }
        });
    }
    function sortTasksByDueDate() {
        console.log("Sort tasks by the due date");
        tasks.sort(function (a, b) {
            return a.dueDate - b.dueDate;
        });
        console.log("Tasks sorted successfully");
        console.log(menu);
    }
    function sortTasksByPriority() {
        console.log("Sort tasks by priority");
        tasks.sort(function (a, b) {
            return a.priority - b.priority;
        });
        console.log("Tasks sorted successfully");
        console.log(menu);
    }
    function clearAllTasks() {
        console.log("Clear all tasks");
        tasks = [];
        console.log("Tasks cleared successfully");
        console.log(menu);
    }
};
todoApp();



