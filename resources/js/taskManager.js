class TaskManager {
    constructor(currentId = 0) {
        this._tasks = []
        this._currentId = currentId
    }
    get taskList() {
        return this._tasks
    }
    addTask(name, desc, assignedTo, due, status = 'TODO') {
        const newTask = {
            id: this._currentId++,
            name: name,
            description: desc,
            assignedTo: assignedTo,
            dueDate: due,
            status: status
        }
        this._tasks.push(newTask);
    }
}