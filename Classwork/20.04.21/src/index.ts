type ToDoId = number;

interface ElementToDo {
    id: ToDoId;
    text: string;
    body: string;
    deleted: boolean;
}

class ToDo implements ElementToDo {
    id: number;
    text: string;
    body: string;
    deleted: boolean;

    constructor(params: ElementToDo){
        this.id = params.id;
        this.text = params.text;
        this.body = params.body;
        this.deleted = params.deleted;
    }
}

const toDo: ToDo = new ToDo({
    id: 1,
    text: "Hello",
    body: "Body",
    deleted: false
});

