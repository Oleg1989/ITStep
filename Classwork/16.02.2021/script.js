// class Led {
//     _color;
//     _conteiner;
//     constructor(color, container){
//         this._color = color;
//         this._conteiner = document.createElement('div');
//         this._conteiner.id = this._color;
//         container.append(this._conteiner);
//         this._conteiner.style.width = '50px';
//         this._conteiner.style.height = '50px';
//         this._conteiner.style.border = '1px solid black';
//         this._conteiner.style.margin = '20px';
//     }
//     on(){
//         this._conteiner.style.background = this._color;
//     }
//     off(){
//         this._conteiner.style.background = 'white';
//     }
// }

// class TraficLight {
//     _red;
//     _yellow;
//     _green;
//     _conteiner;
//     constructor(){
//         this._conteiner = document.createElement("div");
//         this._conteiner.id = "root";
//         document.body.append(this._conteiner);
//         root.style.width = '300px';
//         root.style.height = '100px';
//         root.style.border = '1px solid black';
//         root.style.display = 'flex';

//         this._red = new Led("red", this._conteiner);
//         this._yellow = new Led("yellow", this._conteiner);
//         this._green = new Led("green", this._conteiner);

//     }

//     red = (event) => {
//         if (event.key === 'KeyZ') {
//             this._red.on();
//           }
//     }
//     yellow = () => {
//         this._yellow.on();
//     }
//     green = () => {
//         this._green.on();
//     }
// }

// const tl = new TraficLight();

// // tl.red();
// // tl.yellow();
// // tl.green();

// red.addEventListener('keyup', tl.red);
// yellow.addEventListener('keydown', tl.yellow);
// green.addEventListener('keydown', tl.green);

class Board {
    _colors;
    _width;
    _height;
    constructor(colors) {
        this._colors = colors;
        this._width = 600;
        this._height = 400;
        this.figures = [];

        let div = document.createElement('div');
        div.id = 'root';
        document.body.append(div);
        root.style.width = `${this._width}px`;
        root.style.height = `${this._height}px`;
        root.style.border = '1px solid red';
        root.style.background = 'rgb(245, 238, 238)';

        let btnStart = document.createElement('button');
        btnStart.id = 'start';
        btnStart.innerHTML = 'Start';
        btnStart.style.color = 'rgb(48, 8, 8)';
        document.body.append(btnStart);

        let ranNumber = _.random(50, 100);

        for (let i = 0; i < ranNumber; i++) {
            this.figures.push(new Square(colors));
        }

    }

    start = () => {
        for (let i = 0; i < this.figures.length; i++) {
            let div = document.createElement('div');
            div.style.width = '20px';
            div.style.height = '20px';
            div.style.borderRadius = '12.5px';
            div.style.background = this.figures[i].color;
            div.style.position = 'absolute';
            div.style.top = `${this.figures[i]._x}px`;
            div.style.left = `${this.figures[i]._y}px`;
            root.append(div);
        }
        let btnColor = document.createElement('button');
        btnColor.innerHTML = 'Color';
        btnColor.style.color = 'rgb(48, 8, 8)';
        btnColor.style.background = _.sample(this._colors);
        document.body.append(btnColor);
    }
}

class Square {
    color;
    _x;
    _y;
    constructor(colors) {
        this.color = _.sample(colors);
        this._x = _.random(15, 385);
        this._y = _.random(15, 585);
    }

}

let colors = ['pink', 'green', 'yellow', 'brown', 'orange', 'silver'];

const board = new Board(colors);

start.addEventListener('click', board.start);