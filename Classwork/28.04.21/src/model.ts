enum TaskStatus {
    Planned,
    InProgres,
    Done
}

interface TaskInterface {
    id: string;
    title: string;
    desc: string;
    dedline: Date;
    type: TaskStatus;
}

class Task implements TaskInterface {
    id: string;
    title: string;
    desc: string;
    dedline: Date;
    type: TaskStatus;
    constructor(params: TaskInterface) {
        this.id = params.id;
        this.title = params.title;
        this.desc = params.desc;
        this.dedline = params.dedline;
        this.type = TaskStatus.Planned;
    }
}

interface RepoInterface {
    tasks: TaskInterface[];
    getTasks: () => TaskInterface[];
    changeTask: (task: TaskInterface) => boolean;
    addTask: (task: TaskInterface) => boolean;
}

class Repo implements RepoInterface {
    tasks: TaskInterface[];
    constructor() {
        this.tasks = [];
    }
    getTasks = () => {
        return this.tasks;
    }
    changeTask = (task: TaskInterface) => {
        this.tasks.forEach(element => {
            if (element.id === task.id) {
                element.title = task.title;
                element.desc = task.desc;
                element.dedline = task.dedline;
                element.type = task.type;
            }
        });
        return true;
    }
    addTask = (task: TaskInterface) => {
        this.tasks.push(task);
        return true;
    }
}
