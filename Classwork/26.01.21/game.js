
const TANKS_QTY = 4;
const map = new Map(2, 2, TANKS_QTY);

for (let i = 0; i < TANKS_QTY; i++) {
    let tank = new Tank(`Tank${i + 1}`);
    map.placeTankOnMap(tank);
}
while (map._tanks.length > 1) {
    for (let i = 0; i < map._tanks.length; i++) {
        map.moveTo(map._tanks[i]);
        map.aimTo(map._tanks[i]);
        map.fireTo(map._tanks[i]);
    }
}
if (map._tanks.length === 1) {
    console.log(`${map._tanks[0].title} - victory!!!`);
} else {
    console.log("draw!!!");
}
// for (let i = 0; i < map._tanks.length; i++) {
//     console.log(map._tanks.length);
//     console.log(`${map._tanks[i].title} - victory!!!`);
// }
