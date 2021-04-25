const arrNumber: number[] = [26, 52, 268, 92, 34, 59, 35];
const arrString: string[] = ['sddsd', 'dsds', 'sd', 'sdsdsd'];
let minNumber: number;
let arithmeticMeanNumber: number;

const searchMinNumber = (array: number[]) => {
    minNumber = array[0];
    array.forEach(element => {
        if (element < minNumber) {
            minNumber = element;
        }
    });
    return minNumber;
}
const searchArithmeticMean = (array: number[]) => {
    arithmeticMeanNumber = 0;
    array.forEach(element => {
        arithmeticMeanNumber += element;
    });
    return Math.round(arithmeticMeanNumber / array.length);
}
const sortingStrings = (array: string[]) => {
    let newArray: string[] = array.sort((a, b) => {
        return a.length - b.length;
    });
    return newArray;
}

interface QuadrangleInterface {
    perimeter: (a: number, b: number) => number;
    area: (a: number, b: number) => number;
}

class Quadrangle implements QuadrangleInterface {
    perimeter = (a: number, b: number) => {
        return 2 * (a + b);
    }
    area = (a: number, b: number) => {
        return a * b;
    }
}

class Square extends Quadrangle {
    perimeter = (a: number) => {
        return 4 * a;
    }
    area = (a: number) => {
        return a * a;
    }
}

const quadrangle = new Quadrangle();
const square = new Square();

console.log(searchMinNumber(arrNumber));
console.log(searchArithmeticMean(arrNumber));
console.log(sortingStrings(arrString));
console.log(`Периметр чотирикутника - ${quadrangle.perimeter(5, 6)}`);
console.log(`Площа чотирикутника - ${quadrangle.area(5, 6)}`);
console.log(`Периметр квадрата - ${square.perimeter(5)}`);
console.log(`Площа квадрата - ${square.area(5)}`);



