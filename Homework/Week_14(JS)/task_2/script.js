class Board {
	_width;
	_height;
	canvas;
	selectedFigure;
	selectedColor;
	x;
	y;
	object;
	constructor() {
		this._width = window.innerWidth;
		this._height = 350;
		this.figures = [];

		this.canvas = document.getElementById('canvas');
		this.canvas.width = this._width;
		this.canvas.height = this._height;

		document.getElementById('canvas').addEventListener('mousedown', this.enableColorAddition);
		document.getElementById('canvas').addEventListener('mouseup', this.turnOffColorAddition);
		document.getElementById('canvas').addEventListener('mousemove', this.enableaddingStandardSizedShapes);
		document.getElementById('canvas').addEventListener('click', this.addingStandardSizedShapes);
		document.getElementById('color-palette').addEventListener('click', this.colorSelection);
	}
	addingShapes = (event) => {
		const ctx = this.canvas.getContext("2d");
		if (this.selectedFigure === 'square') {
			this.object = new Object(this.selectedFigure, this.selectedColor, this.x, this.y, Math.abs(event.layerX - this.x));
			ctx.fillStyle = '#fae9e9';
			ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			ctx.fillStyle = this.object.color;
			ctx.fillRect(this.x, this.y, Math.abs(event.layerX - this.x), Math.abs(event.layerX - this.x));
			ctx.stroke();
			this.showShapes();
		}
		if (this.selectedFigure === 'circle') {
			this.object = new Object(this.selectedFigure, this.selectedColor, this.x, this.y, Math.abs(event.layerX - this.x));
			ctx.beginPath();
			ctx.fillStyle = '#fae9e9';
			ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			ctx.arc(this.x, this.y, Math.abs(event.layerX - this.x), 0, 2 * Math.PI, true);
			ctx.fillStyle = this.object.color;
			ctx.fill();
			this.showShapes();
		}
		if (this.selectedFigure === 'diamond') {
			this.object = new Object(this.selectedFigure, this.selectedColor, this.x, this.y, Math.abs(event.layerY - this.y));
			ctx.beginPath();
			ctx.fillStyle = '#fae9e9';
			ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.x - (Math.sqrt(2) * Math.abs(event.layerY - this.y)) / 2, this.y + (Math.sqrt(2) * Math.abs(event.layerY - this.y)) / 2);
			ctx.lineTo(this.x, this.y + Math.sqrt(2) * Math.abs(event.layerY - this.y));
			ctx.lineTo(this.x + (Math.sqrt(2) * Math.abs(event.layerY - this.y)) / 2, this.y + (Math.sqrt(2) * Math.abs(event.layerY - this.y)) / 2);
			ctx.closePath();
			ctx.fillStyle = this.object.color;
			ctx.fill();
			this.showShapes();
		}
		if (this.selectedFigure === 'triangle') {
			this.object = new Object(this.selectedFigure, this.selectedColor, this.x, this.y, Math.abs(event.layerY - this.y));
			ctx.fillStyle = '#fae9e9';
			ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.x, this.y + Math.abs(event.layerY - this.y));
			ctx.lineTo(this.x + Math.abs(event.layerY - this.y), this.y + Math.abs(event.layerY - this.y));
			ctx.closePath();
			ctx.fillStyle = this.object.color;
			ctx.fill();
			this.showShapes();
		}
		document.getElementById('canvas').removeEventListener('click', this.addingStandardSizedShapes);
	}
	addingStandardSizedShapes = (event) => {
		const ctx = this.canvas.getContext("2d");
		if (this.selectedFigure === 'square') {
			const object = new Object(this.selectedFigure, this.selectedColor, event.layerX, event.layerY, 50);
			this.figures.push(object);
			ctx.fillStyle = '#fae9e9';
			ctx.fillStyle = object.color;
			ctx.fillRect(event.layerX, event.layerY, object.side, object.side);
			ctx.stroke();
		}
		if (this.selectedFigure === 'circle') {
			const object = new Object(this.selectedFigure, this.selectedColor, event.layerX, event.layerY, 25);
			this.figures.push(object);
			ctx.beginPath();
			ctx.fillStyle = '#fae9e9';
			ctx.arc(event.layerX, event.layerY, object.side, 0, 2 * Math.PI, true);
			ctx.fillStyle = object.color;
			ctx.fill();
		}
		if (this.selectedFigure === 'diamond') {
			const object = new Object(this.selectedFigure, this.selectedColor, event.layerX, event.layerY, 50);
			this.figures.push(object);
			ctx.beginPath();
			ctx.fillStyle = '#fae9e9';
			ctx.moveTo(event.layerX, event.layerY);
			ctx.lineTo(event.layerX - (Math.sqrt(2) * object.side) / 2, this.y + (Math.sqrt(2) * object.side) / 2);
			ctx.lineTo(event.layerX, this.y + Math.sqrt(2) * object.side);
			ctx.lineTo(this.x + (Math.sqrt(2) * object.side) / 2, this.y + (Math.sqrt(2) * object.side) / 2);
			ctx.closePath();
			ctx.fillStyle = object.color;
			ctx.fill();
		}
		if (this.selectedFigure === 'triangle') {
			const object = new Object(this.selectedFigure, this.selectedColor, event.layerX, event.layerY, 50);
			this.figures.push(object);
			ctx.beginPath();
			ctx.fillStyle = '#fae9e9';
			ctx.moveTo(event.layerX, event.layerY);
			ctx.lineTo(event.layerX, event.layerY + object.side);
			ctx.lineTo(event.layerX + object.side, event.layerY + object.side);
			ctx.closePath();
			ctx.fillStyle = object.color;
			ctx.fill();
		}
	}
	showShapes = () => {
		const ctx = this.canvas.getContext("2d");
		for (let i = 0; i < this.figures.length; i++) {
			if (this.figures[i].name === 'square') {
				ctx.fillStyle = '#fae9e9';
				ctx.fillStyle = this.figures[i].color;
				ctx.fillRect(this.figures[i].x, this.figures[i].y, this.figures[i].side, this.figures[i].side);
				ctx.stroke();
			}
			if (this.figures[i].name === 'circle') {
				ctx.beginPath();
				ctx.fillStyle = '#fae9e9';
				ctx.arc(this.figures[i].x, this.figures[i].y, this.figures[i].side, 0, 2 * Math.PI, true);
				ctx.fillStyle = this.figures[i].color;
				ctx.fill();
			}
			if (this.figures[i].name === 'diamond') {
				ctx.beginPath();
				ctx.fillStyle = '#fae9e9';
				ctx.moveTo(this.figures[i].x, this.figures[i].y);
				ctx.lineTo(this.figures[i].x - (Math.sqrt(2) * this.figures[i].side) / 2, this.figures[i].y + (Math.sqrt(2) * this.figures[i].side) / 2);
				ctx.lineTo(this.figures[i].x, this.figures[i].y + Math.sqrt(2) * this.figures[i].side);
				ctx.lineTo(this.figures[i].x + (Math.sqrt(2) * this.figures[i].side) / 2, this.figures[i].y + (Math.sqrt(2) * this.figures[i].side) / 2);
				ctx.closePath();
				ctx.fillStyle = this.figures[i].color;
				ctx.fill();
			}
			if (this.figures[i].name === 'triangle') {
				ctx.beginPath();
				ctx.fillStyle = '#fae9e9';
				ctx.moveTo(this.figures[i].x, this.figures[i].y);
				ctx.lineTo(this.figures[i].x, this.figures[i].y + this.figures[i].side);
				ctx.lineTo(this.figures[i].x + this.figures[i].side, this.figures[i].y + this.figures[i].side);
				ctx.closePath();
				ctx.fillStyle = this.figures[i].color;
				ctx.fill();
			}
		}
	}
	colorSelection = (event) => {
		let color;
		if (event.target.classList.value === 'color') {
			color = event.target.attributes.style.value;
		} else {
			return;
		}
		let arrColors = color.split(' ');
		this.selectedColor = arrColors[1];
	}
	enableColorAddition = (event) => {
		let inputArr = document.getElementsByName('figure');
		for (let i = 0; i < inputArr.length; i++) {
			if (inputArr[i].checked) {
				this.selectedFigure = inputArr[i].value;
			}
		}
		if (this.selectedFigure && this.selectedColor) {
			this.x = event.layerX;
			this.y = event.layerY;
			document.getElementById('canvas').addEventListener('mousemove', this.addingShapes);
		} else {
			alert('Виберіть фігуру і колір!')
			return;
		}
	}
	turnOffColorAddition = (event) => {
		document.getElementById('canvas').removeEventListener('mousemove', this.addingShapes);
		if (this.object) {
			this.figures.push(this.object);
		}
	}
	enableaddingStandardSizedShapes = () => {
		document.getElementById('canvas').addEventListener('click', this.addingStandardSizedShapes);
	}
}
class Object {
	constructor(name, color, x, y, side) {
		this.name = name;
		this.color = color;
		this.x = x;
		this.y = y;
		this.side = side;
	}
}

const board = new Board();