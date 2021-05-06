import { RepoInterface } from "./interface/repoInterface";
import { TaskInterface } from "./interface/taskInterface";
import { TaskStatus } from "./enum/taskStatus";

export class Repo implements RepoInterface {
    tasks: TaskInterface[];
    constructor() {
        this.tasks = [
            {
                id: '1',
                title: 'hello',
                desc: 'ksdksd',
                dedline: new Date(2011, 0, 1),
                type: TaskStatus.Planned
            },
            {
                id: '2',
                title: 'hello2',
                desc: 'ksdksd',
                dedline: new Date(2018, 0, 1),
                type: TaskStatus.InProgress
            },
            {
                id: '3',
                title: 'hello3',
                desc: 'ksdksd',
                dedline: new Date(2019, 0, 1),
                type: TaskStatus.Done
            },
            {
                id: '4',
                title: 'hello4',
                desc: 'ksdksd',
                dedline: new Date(2019, 0, 1),
                type: TaskStatus.Planned
            }
        ];
    }
    // getTasks = () => {
    //     return this.tasks;
    // }
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
