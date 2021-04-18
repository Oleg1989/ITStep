 class Circle {
	name;
	posX;
	pocY;
	radius;
	circleArea;
	circumference;
	
	constructor(name, radius) {
		this.name = name;
		this.radius = radius;
	}
	Area() {
		this.circleArea = Math.round(Math.PI * Math.pow(this.radius, 2));
		return `Площа ${this.name} - ${this.circleArea}`;
	}	
	Circumference(){
		this.circumference = Math.round(2 * Math.PI * this.radius);
		return `Длина ${this.name} - ${this.circumference}`;
	}
	Show() {
		return `Назва круга - ${this.name}; радіус - ${this.radius}; площа - ${this.circleArea}; кординати - ${this.posX},${this.posY}`;
	}
}