class Circle {
    _radius;
    constructor(radius) {
        this.radius = radius;
        console.log("Створюємо коло!!!");
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    get diameter() {
        return this._radius * 2;
    }
    areaOfTheCircle() {
        return Math.round(Math.PI * Math.pow(this._radius, 2));
    }
    circleLength() {
        return Math.round(2 * Math.PI * this.radius);
    }
}

//Створюємо екземпляр класа
const circle = new Circle(5);
//Виводим в консоль радус кола
console.log(`Радіус кола - ${circle.radius}`);
//Змінюємо радіус кола
console.log("Змінюємо радіус кола");
circle.radius = 10;
//Виводим в консоль діаметр кола
console.log(`Діаметр зміненого кола - ${circle.diameter}`);
//Виводим в консоль площу кола
console.log(`Площа зміненого кола - ${circle.areaOfTheCircle()}`);
//Виводим в консоль довжину кола
console.log(`Довжина зміненого кола - ${circle.circleLength()}`);