let str: string = 'AADAAFFF';

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
const unpackingStr = (str: string) => {

}
const save = () => {
    let arr

}
const multiplication = (a: number, b: number) => {
    return a * b;
}
console.log(packingStr(str));
