interface Task {
    id: number;
    description: string;
}

let tasks: Task[] = [];
let nextId = 1;

function addTask(description: string): void {
    const task: Task = { id: nextId++, description };
    tasks.push(task);
    console.log(`Task added: ${task.description}`);
}

function viewTasks(): void {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }
    console.log("Current Tasks:");
    tasks.forEach(task => {
        console.log(`${task.id}: ${task.description}`);
    });
}

function deleteTask(id: number): void {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Task with ID ${id} deleted.`);
}

function main() {
    addTask("Learn TypeScript");
    addTask("Build a simple CLI app");
    viewTasks();
    deleteTask(1);
    viewTasks();
}

main();
