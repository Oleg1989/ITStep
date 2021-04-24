import { AddRegistrationForm } from "./add-registation.form";

let form;
let emit;

beforeEach(() => {
    form = new AddRegistrationForm();
    document.body.innerHTML = "";
    document.body.append(form.dom);
});
afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
});

//стрічки коду 20 - 30 написані для очищення консолі від помилки 
//console.error 
//  Error: Not implemented: HTMLFormElement.prototype.submit

beforeAll(() => {
    ({ emit } = window._virtualConsole);
});

beforeEach(() => {
    window._virtualConsole.emit = jest.fn();
});

afterAll(() => {
    window._virtualConsole.emit = emit;
});

describe('AddRegistrationForm', () => {
    it("should match snaphot", () => {
        expect.assertions(1);
        expect(form.dom).toMatchSnapshot();
    });
    describe('_validationPassword()', () => {
        it('the password field must return true', () => {
            expect.assertions(1);
            const PASSWORD_VALID = "Oleg98!@+";
            document.getElementById("password").value = PASSWORD_VALID;
            expect(form._validationPassword(document.getElementById("password").value)).toBe(true);
        });
        it('the password field must return false', () => {
            expect.assertions(5);
            const PASSWORD_NOT_VALID = ["Oleg", "Olegsdsd@", "SDFSFSDFSSD2@", "dfsdfsfsdsfd2@", "Oleg12596"];
            PASSWORD_NOT_VALID.forEach(element => {
                document.getElementById("password").value = element;
                expect(form._validationPassword(document.getElementById("password").value)).toBe(false);
            });
        });
        it('the repeat password field must return true', () => {
            expect.assertions(1);
            const REPEAT_PASSWORD_VALID = "Oleg98!@+";
            document.getElementById("repeat-password").value = REPEAT_PASSWORD_VALID;
            expect(form._validationPassword(document.getElementById("repeat-password").value)).toBe(true);
        });
        it('the repeat password field must return false', () => {
            expect.assertions(5);
            const PASSWORD_NOT_VALID = ["Oleg", "Olegsdsd@", "SDFSFSDFSSD2@", "dfsdfsfsdsfd2@", "Oleg12596"];
            PASSWORD_NOT_VALID.forEach(element => {
                document.getElementById("password").value = element;
                expect(form._validationPassword(document.getElementById("password").value)).toBe(false);
            });
        });
        it('the password and password repeat fields should match', () => {
            expect.assertions(1);
            const PASSWORD = "Oleg98!@+";
            const REPEAT_PASSWORD = "Oleg98!@+";
            document.getElementById("password").value = PASSWORD;
            document.getElementById("repeat-password").value = REPEAT_PASSWORD;
            expect(document.getElementById("password").value).toBe(document.getElementById("repeat-password").value);
        });
    });
    describe('_validationEmail()', () => {
        it('the email field must return true', () => {
            expect.assertions(1);
            const EMAIL_VALID = "oleg9869852@gmail.com";
            document.getElementById("email").value = EMAIL_VALID;
            expect(form._validationEmail(document.getElementById("email").value)).toBe(true);
        });
        it('the email field must return false', () => {
            expect.assertions(2);
            const EMAIL_VALID = ["oleg98gmailcom", "@gmail.com"];
            EMAIL_VALID.forEach(element => {
                document.getElementById("email").value = element;
                expect(form._validationEmail(document.getElementById("email").value)).toBe(false);
            });
        });
    });
    describe("btnCreate", () => {
        it("should be disabled initially", () => {
            expect.assertions(1);
            const button = document.getElementById("btnCreate");
            expect(button.disabled).toBe(true);
        });
        it("should call onCreateClicked() method if clicked", () => {
            expect.assertions(1);
            document.body.innerHTML = "";
            const clickSpy = jest
                .spyOn(AddRegistrationForm.prototype, "onCreateClicked")
                .mockImplementation(() => {
                    return true;
                });
            const f = new AddRegistrationForm();
            document.body.append(f.dom);
            const button = document.getElementById("btnCreate");
            button.disabled = false;
            button.click();
            expect(clickSpy).toBeCalled();
        });
    });
    describe('validationForm()', () => {
        it('should return true', () => {
            expect.assertions(1);
            const myForm = document.forms.myForm;
            const EMAIL_VALID = "oleg9869852@gmail.com";
            myForm.email = EMAIL_VALID;
            const PASSWORD_VALID = "Oleg98!@+";
            myForm.password = PASSWORD_VALID;
            const REPEAT_PASSWORD_VALID = "Oleg98!@+";
            myForm.repeatPassword = REPEAT_PASSWORD_VALID;
            expect(form.validationForm(myForm)).toBe(true);
        });
        it('should return false', () => {
            expect.assertions(3);
            const NOT_VALID_DATA = [
                { email: "oleg9869852gmail.com", password: "Oleg98!@+", repeatPassword: "Oleg98!@+" },
                { email: "oleg9869852@gmail.com", password: "l98!@+", repeatPassword: "Oleg98!@+" },
                { email: "oleg9869852@gmail.com", password: "Oleg98!@+", repeatPassword: "O!@+" }
            ];
            NOT_VALID_DATA.forEach(element => {
                const myForm = document.forms.myForm;
                myForm.email = element.email;
                myForm.password = element.password;
                myForm.repeatPassword = element.repeatPassword;
                expect(form.validationForm(myForm)).toBe(false);
            });
        });
    });
    describe('checkInputs()', () => {
        it('should return btnCreate disabled false', () => {
            expect.assertions(1);
            form.myForm = document.forms.myForm;
            const EMAIL_VALID = "oleg9869852@gmail.com";
            form.myForm.email = EMAIL_VALID;
            const PASSWORD_VALID = "Oleg98!@+";
            form.myForm.password = PASSWORD_VALID;
            const REPEAT_PASSWORD_VALID = "Oleg98!@+";
            form.myForm.repeatPassword = REPEAT_PASSWORD_VALID;
            expect(form.checkInputs()).toBe(false);
        });
        it('should return btnCreate disabled true', () => {
            expect.assertions(1);
            form.myForm = document.forms.myForm;
            const EMAIL_VALID = "oleg9869852gmail.com";
            form.myForm.email = EMAIL_VALID;
            const PASSWORD_VALID = "Oleg98!@+";
            form.myForm.password = PASSWORD_VALID;
            const REPEAT_PASSWORD_VALID = "Oleg98!@+";
            form.myForm.repeatPassword = REPEAT_PASSWORD_VALID;
            expect(form.checkInputs()).toBe(true);
        });
    });
    describe('onCreateClicked()', () => {
        it('should call alert() with registration parameters', () => {
            expect.assertions(1);
            const alertMock = jest.fn();
            globalThis.alert = alertMock;
            const newForm = new AddRegistrationForm();
            document.body.append(newForm.dom);
            const myForm = document.forms.myForm;
            myForm.email = 'oleg9869852gmail.com';
            myForm.password = 'Oleg98!@+';
            myForm.repeatPassword = 'Oleg98!@+';
            const formParameters = `Email: ${myForm.email}; Password: ${myForm.password}; Repeat password: ${myForm.repeatPassword};`;
            newForm.onCreateClicked();
            expect(globalThis.alert).toBeCalledWith(formParameters);
        });
        it('should all form fields be cleared', () => {
            expect.assertions(3);
            const myForm = document.forms.myForm;
            myForm.email = 'oleg9869852gmail.com';
            myForm.password = 'Oleg98!@+';
            myForm.repeatPassword = 'Oleg98!@+';
            form.onCreateClicked();
            expect(myForm.email).toBe('');
            expect(myForm.password).toBe('');
            expect(myForm.repeatPassword).toBe('');
        });
    });
});