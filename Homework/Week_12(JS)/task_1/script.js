class Marker {
    constructor(color, ink) {
        this.markerColor = color;
        this.markerInk = ink;
        this.inkSymbol = 0.5;
    }
    print(str) {
        let p = document.createElement('p');
        p.style.color = this.markerColor;
        p.innerHTML = '';
        document.body.append(p);
        let i = 0;
        while (this.markerInk > 0) {
            if (str[i] === ' ') {
                p.innerHTML += str[i];
            } else {
                p.innerHTML += str[i];
                this.markerInk -= this.inkSymbol;
            }
            if (i === str.length - 1) {
                i = 0;
                p.innerHTML += ' ';
            } else {
                i++;
            }
        }
    }
}

class RefillMarker extends Marker {
    fillUp(color, ink) {
        this.markerColor = color;
        this.markerInk = ink;
        console.log(`Маркер заправленній на ${this.markerInk}%, ${this.markerColor} краскою!`);
    }
}
const marker = new RefillMarker('red', 28);

marker.print('Іванишин Олег');
marker.fillUp('black', 100);
marker.print('Привіт Олег!');
