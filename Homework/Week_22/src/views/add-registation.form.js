import { el, mount } from "redom";
export class AddRegistrationForm {
    #dom;
    #form;
    #email;
    #password;
    #repeatPassword;
    #button;
    myform;
    _validationPassword(password) {
        const MIN_LENGTH = 8;
        const REG_NUMBER = /\d/;
        const REG_SYMBOLS_LOWER = /[a-z]/;
        const REG_SYMBOLS_UPPER = /[A-Z]/;
        const REG_SPECIAL_SYMBOLS = /\D\S\W/;

        //Валідація на довжину пароля
        if (password.length < MIN_LENGTH) {
            return false;
        }

        //Валідація на наявність цифри 
        if (!password.match(REG_NUMBER)) {
            return false;
        }

        //Валідація на наявність англійської букви в нижньому регістрі 
        if (!password.match(REG_SYMBOLS_LOWER)) {
            return false;
        }

        //Валідація на наявність англійської букви у верхньому регістрі 
        if (!password.match(REG_SYMBOLS_UPPER)) {
            return false;
        }

        //Валідація на наявність спецсимволу
        if (!password.match(REG_SPECIAL_SYMBOLS)) {
            return false;
        }
        return true;
    }
    _validationEmail(email) {
        const REG_SYMBOLS_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email.match(REG_SYMBOLS_EMAIL)) {
            return false;
        }

        return true;
    }
    constructor() {
        this.#dom = el("div#container", "Add a registration form");
        this.#form = el("form#form", { name: "myForm" });
        this.#email = el("input#email", { type: "email", name: "email", placeholder: "Email", value: '' });
        this.#password = el("input#password", { type: "password", name: "password", placeholder: "Password", value: '' });
        this.#repeatPassword = el("input#repeat-password", { type: "password", name: "repeatPassword", placeholder: "Repeat password", value: '' });
        this.#button = el("button#btnCreate", { disabled: true, value: "Create accout" });
        mount(this.#form, this.#email);
        mount(this.#form, this.#password);
        mount(this.#form, this.#repeatPassword);
        mount(this.#form, this.#button);
        mount(this.#dom, this.#form);
        this.#button.addEventListener("click", this.onCreateClicked);
        this.#form.addEventListener("change", this.checkInputs);
        //this.myForm = document.forms.myForm;
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
        const myForm = document.forms.myForm;
        if (this.validationForm(myForm)) {
            document.getElementById("btnCreate").disabled = false;
            return document.getElementById("btnCreate").disabled;
        } else {
            return document.getElementById("btnCreate").disabled;
        }
    }
    onCreateClicked() {
        const myForm = document.forms.myForm;
        alert(`Email: ${myForm.email}; Password: ${myForm.password}; Repeat password: ${myForm.repeatPassword};`);
        myForm.email = '';
        myForm.password = '';
        myForm.repeatPassword = '';
    }
}

const form = new AddRegistrationForm();