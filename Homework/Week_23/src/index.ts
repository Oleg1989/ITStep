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
    let str: string = '';
    const newArray = array.map(element => {
        if (element.length > str.length) {
            str = element;
            return element;
        }
    });
    return newArray;
}

console.log(searchMinNumber(arrNumber));
console.log(searchArithmeticMean(arrNumber));
console.log(sortingStrings(arrString));



