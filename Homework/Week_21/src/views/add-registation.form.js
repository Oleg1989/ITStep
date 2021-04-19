import { el, mount } from "redom";
export class AddRegistrationForm {
    #dom;
    #form;
    #email;
    #password;
    #repeatPassword;
    #button;
    _validationPassword(password) {
        const MIN_LENGTH = 8;
        const ARRAY_NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const ARRAY_SYMBOLS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const ARRAY_SPECIAL_SYMBOLS = ['#', '!', '@', '-', '+'];
        //Валідація на довжину пароля
        if (password.length < MIN_LENGTH) {
            return false;
        }
        let result;
        //Валідація на наявність цифри 
        for (let i = 0; i < password.length; i++) {
            result = ARRAY_NUMBERS.some((number) => {
                return number === password[i];
            })
            if (result) break;
        }
        if (!result) {
            return false;
        }
        //Валідація на наявність англійської букви в нижньому регістрі 
        result = null;
        for (let i = 0; i < password.length; i++) {
            result = ARRAY_SYMBOLS.some((number) => {
                return number === password[i];
            })
            if (result) break;
        }
        if (!result) {
            return false;
        }
        //Валідація на наявність англійської букви у верхньому регістрі 
        result = null;
        for (let i = 0; i < password.length; i++) {
            result = ARRAY_SYMBOLS.some((number) => {
                return number.toUpperCase() === password[i];
            })
            if (result) break;
        }
        if (!result) {
            return false;
        }
        //Валідація на наявність спецсимволу
        result = null;
        for (let i = 0; i < password.length; i++) {
            result = ARRAY_SPECIAL_SYMBOLS.some((number) => {
                return number === password[i];
            })
            if (result) break;
        }
        if (result === false) {
            return false;
        }
        return true;
    }
    _validationEmail(email) {
        const ARRAY_SYMBOLS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const STR = '@gmail.com';

        //Валідація на наявність STR
        if (!email.includes(STR)) {
            return false
        }

        //Валідація на наявність символів
        let result;
        let str = email.substr(0, email.indexOf('@'));
        for (let i = 0; i < str.length; i++) {
            result = ARRAY_SYMBOLS.some((number) => {
                return number === str[i];
            })
            if (result) break;
        }
        if (!result) {
            return false;
        }

        return true;
    }
    constructor() {
        this.#dom = el("div#container", "Add a registration form");
        this.#form = el("form#form", {name: "myForm"});
        this.#email = el("input#email", {name: "email", placeholder: "Email"});
        this.#password = el("input#password", {name: "password", placeholder: "Password"});
        this.#repeatPassword = el("input#repeat-password", {name: "repeatPassword", placeholder: "Repeat password"});
        this.#button = el("button#btnCreate", { disabled: true, value: "Create accout" });
        mount(this.#form, this.#email);
        mount(this.#form, this.#password);
        mount(this.#form, this.#repeatPassword);
        mount(this.#form, this.#button);
        mount(this.#dom, this.#form);
        this.#button.addEventListener("click", this.onCreateClicked);
        this.#form.addEventListener("change", this.checkInputs);
        this.myForm = document.forms.myForm;
    }
    get dom() {
        return this.#dom;
    }
    validationForm(form) {
        if (!this._validationEmail(form.email)) {
            return false;
        }
        if (!this._validationPassword(form.password)) {
            return false;
        }
        if (!this._validationPassword(form.repeatPassword)) {
            return false;
        }
        return true;
    }
    checkInputs() {
        if(this.validationForm(this.myForm)){
            document.getElementById("btnCreate").disabled = false;
            return document.getElementById("btnCreate").disabled;
        } else {
            return document.getElementById("btnCreate").disabled;
        }
    }
    onCreateClicked() {
        this.myForm.email = '';
        this.myForm.password = '';
        this.myForm.repeatPassword = '';
        alert("Create new account");
        return this.myForm;
    }
}

const form = new AddRegistrationForm();