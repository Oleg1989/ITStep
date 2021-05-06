import { View } from "./view";
import { Repo } from "./model";
import { Controller } from "./controller";
import { TaskStatus } from "./enum/taskStatus";

document.addEventListener("DOMContentLoaded", function (event) {
    const controller = new Controller(new View(), new Repo());
    controller.view.viewDivMain([
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
            title: 'hello3',
            desc: 'ksdksd',
            dedline: new Date(2019, 0, 1),
            type: TaskStatus.Planned
        }
    ]);
});
