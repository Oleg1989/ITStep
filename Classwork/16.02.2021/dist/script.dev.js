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
"use strict";