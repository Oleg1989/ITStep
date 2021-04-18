class ExtendedDate extends Date {
    constructor(nameMonths, numbersText) {
        super();
        this.nameMonth = nameMonths;
        this.numbersText = numbersText;
        this.str = '';
    }
    dateText(month, date) {
        for (let i = 0; i < this.numbersText.length; i++) {
            if (i === date) {
                this.str += this.numbersText[i];
            }
        }
        for (let i = 0; i < this.nameMonth.length; i++) {
            if (i === month) {
                this.str += ` ${this.nameMonth[i]}`;
            }
        }
        return this.str;
    }
    dateCheck(date) {
        var dateNow = new Date;
        var dateNew = Date.parse(date);
        if (dateNew >= dateNow) {
            return true;
        } else {
            return false;
        }
    }
    leapYear(year) {
        var date = new Date(year);
        if (date.getFullYear() % 4 === 0) {
            return `${year} - являється високосном роком!!!`
        } else {
            return `${year} - не являється високосном роком!!!`
        }
    }
    nextDate(date) {
        var d = Date.parse(date);
        var millis = +d;
        millis += 86400000;
        return new Date(millis);
    }
}

let nameMonths = ['січеня', 'лютого', 'березеня', 'квітеня', 'травеня', 'червеня', 'липеня', 'серпеня', 'вересеня', 'жовтеня', 'листопада', 'груденя'];

let numbersText = ["друге", "третє", "четверте", "п'яте", "шосте", "сьоме", "восьме", "дев'яте", "десяте", "одинадцяте", "дванадцяте", "тринадцяте", "чотирнадцяте", "п'яднадцяте", "шістнадцяте", "сімнадцяте", "вісімнадцяте", "девятнадцяте", "двадцяте", "двадцять перше", "двадцять друге", "двадцять третє", "двадцять четверте", "двадцять п'яте", "двадцять шосте", "двадцять сьоме", "двадцять восьме", "двадцять дев'яте", "тридцяте", "тридцять перше"];

const extendedDate = new ExtendedDate(nameMonths, numbersText);
alert(extendedDate.dateText(extendedDate.getMonth(), extendedDate.getDate()));
alert(extendedDate.dateCheck('2021, 1, 20'));
alert(extendedDate.leapYear('2021'));
alert(extendedDate.nextDate('2021, 2, 21'));