import { DomLogger } from "./logger.js";
import { RuleName, RuleYear, RuleEyeColor, RuleHairColor, RuleHeight, RuleWeight } from "./rules.js";

export class Validator {
    constructor() {
        this.logger = new DomLogger();
        //this.form = document.getElementById('form');
        this.rules = [
            new RuleName(document.getElementById('name').name),
            new RuleYear(document.getElementById('year').name),
            new RuleEyeColor(document.getElementById('eyeColor').name),
            new RuleHairColor(document.getElementById('hairColor').name),
            new RuleHeight(document.getElementById('height').name),
            new RuleWeight(document.getElementById('weight').name)
        ];
    }
    validate(form) {
        let arrayInputs = form.querySelectorAll('input');
        for (let i = 0; i < arrayInputs.length; i++) {
            if (arrayInputs[i].name === 'submit') {
                continue;
            }
            for (let j = 0; j < this.rules.length; j++) {
                if (this.rules[j].name === arrayInputs[i].name) {
                    if (this.rules[j].isValid(arrayInputs[i].value) !== true) {
                        this.logger.log(this.rules[j].isValid(arrayInputs[i].value));
                        return false;
                    }
                }
            }
        }
        return true;
    }
}