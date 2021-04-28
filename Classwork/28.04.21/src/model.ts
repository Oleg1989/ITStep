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
    changeTask: () => boolean;
    getTasks: () => TaskInterface[];
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
    changeTask = () => {
        return true;
    }
    addTask = (task: TaskInterface) => {
        this.tasks.push(task);
        return true;
    }
}
