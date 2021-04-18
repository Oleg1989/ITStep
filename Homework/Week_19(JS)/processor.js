import { Validator } from "./validator.js";
export class Processor {
    success() {
        while (this.div.firstChild) {
            this.div.removeChild(this.div.firstChild);
        }
        let arrayInputs = this.form.querySelectorAll('input');
        for (let i = 0; i < arrayInputs.length; i++) {
            if (arrayInputs[i].name === 'submit') {
                continue;
            }
            let p = document.createElement('p');
            p.textContent = `${arrayInputs[i].name}: ${arrayInputs[i].value}`;
            p.style.fontSize = '24px';
            p.style.marginLeft = '50px';
            p.style.color = 'green';
            this.div.append(p);
            arrayInputs[i].value = '';
        }
    }
    constructor() {
        this.app = document.getElementById('app-root');
        this.form = document.createElement('form');

        this.div = document.createElement('div');
        this.div.id = 'content';

        this.app.append(this.showForm(), this.div);

        this.validator = new Validator();
        this.form.addEventListener('submit', this.attach);
    }
    showForm() {
        this.form.id = 'form';
        this.form.style.display = 'flex';
        this.form.style.flexDirection = 'column';
        this.form.style.justifyContent = 'space-around';
        this.form.style.width = '35%';
        this.form.style.minWidth = '225px';
        this.form.style.margin = 'auto';
        this.form.style.padding = '10px';
        this.form.style.height = '400px';
        this.form.style.border = '2px solid blue';
        this.form.style.borderRadius = '5px';

        let labelName = document.createElement('lable');
        labelName.textContent = 'Имя пользователя (от 5 до 15 символов, только буквы)';
        let name = document.createElement('input');
        name.type = 'text';
        name.id = 'name';
        name.setAttribute('name', 'Name');

        let labelYear = document.createElement('lable');
        labelYear.textContent = 'Год рождения (от 1900 до текущего)';
        let year = document.createElement('input');
        year.type = 'text';
        year.id = 'year';
        year.setAttribute('name', 'Year');

        let labelEyeColor = document.createElement('lable');
        labelEyeColor.textContent = 'Цвет глаз (одно из значений: brown, green, gray, blue)';
        let eyeColor = document.createElement('input');
        eyeColor.type = 'text';
        eyeColor.id = 'eyeColor';
        eyeColor.setAttribute('name', 'Eye');

        let labelHairColor = document.createElement('lable');
        labelHairColor.textContent = 'Цвет волос (одно из значений: black, brown, white, red, other)';
        let hairColor = document.createElement('input');
        hairColor.type = 'text';
        hairColor.id = 'hairColor';
        hairColor.setAttribute('name', 'Hair');

        let labelHeight = document.createElement('lable');
        labelHeight.textContent = 'Рост (от 0 до 2.60)';
        let height = document.createElement('input');
        height.type = 'text';
        height.id = 'height';
        height.setAttribute('name', 'Height');

        let labelWeight = document.createElement('lable');
        labelWeight.textContent = 'Вес (от 0 до 300)';
        let weight = document.createElement('input');
        weight.type = 'text';
        weight.id = 'weight';
        weight.setAttribute('name', 'Weight');

        let submit = document.createElement('input');
        submit.type = 'submit';
        submit.name = 'submit';
        submit.id = 'submit';
        submit.style.width = '100px';
        submit.style.margin = '0 auto';

        this.form.append(labelName, name, labelYear, year, labelEyeColor, eyeColor, labelHairColor, hairColor, labelHeight, height, labelWeight, weight, submit);

        return this.form;
    }
    attach = (event) => {
        event.preventDefault();
        if (this.validator.validate(this.form)) {
            this.success();
        }
    }
}