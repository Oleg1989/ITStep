class Board {
	_width;
	_height;
	_circles;

	constructor(width, height) {
		this._width = width;
		this._height = height;
		this._circles = [];
		console.log(`Створюємо дошку шириною - ${this._width} і висотою - ${this._height}!!!`);
		console.log("\n");
	}
	PlaceCircleOnBoard(circle) {
		this._circles.push(circle);
		let posX = _.random(circle.radius, this._width);
		let posY = _.random(circle.radius, this._height);
		while (_.find(this._circles, { 'posX': posX, 'posY': posY })) {
			posX = _.random(circle.radius, this._width);
			posY = _.random(circle.radius, this._height);
		};
		circle.posX = posX;
		circle.posY = posY;
		return `Розміщуємо на дошкі круг з назвою ${circle.name}, кординатами - ${circle.posX}, ${circle.posY} і радіусом ${circle.radius}`;
	}
	MaxCircleArea() {
		let maxCircle = this._circles[0];
		for (let i = 1; i < this._circles.length; i++) {
			if (this._circles[i].circleArea > maxCircle.circleArea) {
				maxCircle = this._circles[i];
			}
		}
		return `Самий більший круг - ${maxCircle.name} з площею - ${maxCircle.circleArea}`;

	}
	Sort() {
		this._circles = _.sortBy(this._circles, [function (o) { return o.circleArea; }]);
		let arrSortCircle = [];
		for (let i = 0; i < this._circles.length; i++) {
			arrSortCircle[i] = `${i + 1}) ${this._circles[i].name} з площею ${this._circles[i].circleArea}`;
		}
		return arrSortCircle;
	}

}