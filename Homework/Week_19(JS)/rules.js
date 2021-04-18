export class Rule {
    constructor(name) {
        this.name = name;
    }
}
export class RuleName extends Rule {
    constructor(name) {
        super(name);
        this.errorText = 'Имя должно состоять от 5 до 15 символов, только буквы A - Z, a - z!'
    }
    isValid(value) {
        const ARRAY_SYMBOL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const MIN_SIMBOL = 5;
        const MAX_SIMBOL = 15;
        if (value.length < MIN_SIMBOL || value.length > MAX_SIMBOL) {
            return this.errorText;
        } else {
            for (let i = 0; i < value.length; i++) {
                if (ARRAY_SYMBOL.indexOf(value[i].toLowerCase()) === -1) {
                    return this.errorText;
                }
            }
        }
        return true;
    }
}
export class RuleYear extends Rule {
    constructor(name) {
        super(name);
        this.errorText = 'Год рождения должен быть в диапазоне от 1900 года по 2021 год!';
    }
    isValid(value) {
        const ARRAY_NUMBER = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const MIN_YEAR = 1900;
        const MAX_YEAR = 2021;
        const MAX_SIMBOL = 4;
        if (value.length === MAX_SIMBOL) {
            for (let i = 0; i < value.length; i++) {
                if (ARRAY_NUMBER.indexOf(value[i].toLowerCase()) === -1) {
                    return this.errorText;
                }
            }
        } else {
            return this.errorText;
        }
        if (+value < MIN_YEAR || +value > MAX_YEAR) {
            return this.errorText;
        }
        return true;
    }
}
export class RuleEyeColor extends Rule {
    constructor(name) {
        super(name);
        this.errorText = 'Введите цвет глаз одно из значений: brown, green, gray, blue!';
    }
    isValid(value) {
        const ARRAY_COLOR = ['brown', 'green', 'gray', 'blue'];
        if (ARRAY_COLOR.some((color) => value === color)) {
            return true;
        }
        return this.errorText;
    }
}
export class RuleHairColor extends Rule {
    constructor(name) {
        super(name);
        this.errorText = 'Введите цвет волос одно из значений: black, brown, white, red!';
    }
    isValid(value) {
        const ARRAY_COLOR = ['black', 'brown', 'white', 'red'];
        if (ARRAY_COLOR.some((color) => value === color)) {
            return true;
        }
        return this.errorText;
    }
}
export class RuleHeight extends Rule {
    constructor(name) {
        super(name);
        this.errorText = 'Введите свой рост (число от 0 до 2.60)';
    }
    isValid(value) {
        const ARRAY_NUMBER = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const MIN_HEIGHT = 1;
        const MAX_HEIGHT = 2.60;
        const MAX_SIMBOL = 4;
        if (value.length <= MAX_SIMBOL) {
            for (let i = 0; i < value.length; i++) {
                if (ARRAY_NUMBER.indexOf(value[i].toLowerCase()) === -1) {
                    return this.errorText;
                }
            }
        } else {
            return this.errorText;
        }
        if (+value < MIN_HEIGHT || +value > MAX_HEIGHT) {
            return this.errorText;
        }
        return true;
    }
}
export class RuleWeight extends Rule {
    constructor(name) {
        super(name);
        this.errorText = 'Введите свой вес (число от 0 до 300)';
    }
    isValid(value) {
        const ARRAY_NUMBER = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const MIN_WEIGHT = 1;
        const MAX_WEIGHT = 300;
        const MAX_SIMBOL = 3;
        if (value.length <= MAX_SIMBOL) {
            for (let i = 0; i < value.length; i++) {
                if (ARRAY_NUMBER.indexOf(value[i].toLowerCase()) === -1) {
                    return this.errorText;
                }
            }
        } else {
            return this.errorText;
        }
        if (+value < MIN_WEIGHT || +value > MAX_WEIGHT) {
            return this.errorText;
        }
        return true;
    }
}