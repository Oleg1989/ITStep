import { group } from "node:console";

let str1: string = 'AADAAFFFffff';
let str2: string = 'A3DA2f2F3';

const packingStr = (str: string) => {
    let counter: number = 1;
    let newStr: string = ''
    let letter: string = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            counter++;
            letter = str[i];
        } else {
            letter = str[i];
            if (counter == 1) {
                newStr += `${letter}`;
            } else {
                newStr += `${letter}${counter}`;
            }
            letter = "";
            counter = 1;
        }
    }
    return newStr;
}
interface objInterface {
    simbol: string,
    number: number
}
const unpackingStr = (str: string) => {
    let newStr: string = ''
    let arrSimbol: objInterface[] = [];
    let arrNew = str.match(/\w{1}\d{0,}/g);
    if (arrNew) {
        for (let i = 0; i < arrNew.length; i++) {
            let simb: objInterface = {
                simbol: '',
                number: 0
            };
            let strNumber: string = '';
            let k: number = 0;
            while (k < arrNew[i].length) {
                if (k == 0) {
                    simb.simbol = arrNew[i][0];
                }
                if (+arrNew[i][k]) {
                    strNumber += arrNew[i][k];
                }
                k++;
            }
            simb.number = +strNumber;
            arrSimbol.push(simb);
        };
    }
    arrSimbol.forEach(el => {
        let j: number = 0;
        do {
            newStr += el.simbol;
            j++;
        } while (j < el.number);
    });
    return newStr
}
console.log(`${str2} -> ${unpackingStr(str2)}`);
console.log(`${str1} -> ${packingStr(str1)}`);
