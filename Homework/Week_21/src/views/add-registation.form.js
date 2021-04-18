import { el, mount } from "redom";
export class AddRegistrationForm {
    #dom;
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
        this.#email = el("input#email", "Email");
        this.#password = el("input#password", "Password");
        this.#repeatPassword = el("input#repeat-password", "Repeat password");
        this.#button = el("button#btnCreate", { disabled: true, value: "Create accout" });
        mount(this.#dom, this.#email);
        mount(this.#dom, this.#password);
        mount(this.#dom, this.#repeatPassword);
        mount(this.#dom, this.#button);
        this.#button.addEventListener("click", this.onCreateClicked);
    }
    get dom() {
        return this.#dom;
    }
    onCreateClicked() {
        if (!this._validationEmail(this.#email)) {
            return false;
        }
        if (!this._validationPassword(this.#password)) {
            return false;
        }
        if (!this._validationPassword(this.#repeatPassword)) {
            return false;
        }
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("repeat-password").value = "";
        document.getElementById("btnCreate").disabled = false;

        alert("Create new account");
    }
}