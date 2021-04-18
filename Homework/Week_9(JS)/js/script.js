
const board = new Board(50, 50);

console.log("Розміщення кругів на дошкі!!!");
for (let i = 0; i < 3; i++) {
	let circle = new Circle(`circle${i}`, _.random(1, ((board._height / 2) + (board._width / 2)) / 2));
	console.log(board.PlaceCircleOnBoard(circle));
	console.log(circle.Area());
	console.log(circle.Circumference());
	console.log(circle.Show());
	console.log("\n");
}
console.log("Вивід найбільшого за площею круга!!!");
console.log(board.MaxCircleArea());
console.log("\n");
console.log("Вивід відсортованих кругів за площею!!!");
let showSortCircle = board.Sort();
showSortCircle.forEach(function (item, showSortCircle) {
	console.log(item);
});
