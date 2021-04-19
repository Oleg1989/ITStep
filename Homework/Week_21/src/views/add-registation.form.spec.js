
import { AddRegistrationForm } from "./add-registation.form";
let form;
let onSubmit;
beforeEach(() => {
    form = new AddRegistrationForm();
    document.body.innerHTML = "";
    document.body.append(form.dom);
});
afterEach(() => {
    jest.resetAllMocks();
  });

describe('AddRegistrationForm', () => {
    it("should match snaphot", () => {
        expect.assertions(1);
        expect(form.dom).toMatchSnapshot();
    });
    describe('Layout', () => {
        it("should render div#container", () => {
            expect.assertions(1);
            const container = document.getElementById("container");
            expect(container).toBeTruthy();
        });
        it("should render input#email", () => {
            expect.assertions(1);
            const email = document.getElementById("email");
            expect(email).toBeTruthy();
        });
        it("should render input#password", () => {
            expect.assertions(1);
            const password = document.getElementById("password");
            expect(password).toBeTruthy();
        });
        it("should render input#repeat-password", () => {
            expect.assertions(1);
            const repeatPassword = document.getElementById("repeat-password");
            expect(repeatPassword).toBeTruthy();
        });
        it("should render button", () => {
            expect.assertions(1);
            const button = document.getElementById("btnCreate");
            expect(button).toBeTruthy();
        });
    });
    describe('_validationPassword()', () => {
        it('should perform password verification', () => {
            expect.assertions(1);
            const PASSWORD_VALID = "Oleg98!@+";
            document.getElementById("password").value = PASSWORD_VALID;
            expect(form._validationPassword(document.getElementById("password").value)).toBe(true);
        });
        it('should not perform password verification', () => {
            expect.assertions(5);
            const PASSWORD_NOT_VALID = ["Oleg", "Olegsdsd@", "SDFSFSDFSSD2@", "dfsdfsfsdsfd2@", "Oleg12596"];
            PASSWORD_NOT_VALID.forEach(element => {
                document.getElementById("password").value = element;
                expect(form._validationPassword(document.getElementById("password").value)).not.toBe(true);
            });
        });
        it('should perform repeat password verification', () => {
            expect.assertions(1);
            const REPEAT_PASSWORD_VALID = "Oleg98!@+";
            document.getElementById("repeat-password").value = REPEAT_PASSWORD_VALID;
            expect(form._validationPassword(document.getElementById("repeat-password").value)).toBe(true);
        });
        it('should not repeat perform password verification', () => {
            expect.assertions(5);
            const PASSWORD_NOT_VALID = ["Oleg", "Olegsdsd@", "SDFSFSDFSSD2@", "dfsdfsfsdsfd2@", "Oleg12596"];
            PASSWORD_NOT_VALID.forEach(element => {
                document.getElementById("password").value = element;
                expect(form._validationPassword(document.getElementById("password").value)).not.toBe(true);
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
        it('should perform email verification', () => {
            expect.assertions(1);
            const EMAIL_VALID = "oleg9869852@gmail.com";
            document.getElementById("email").value = EMAIL_VALID;
            expect(form._validationEmail(document.getElementById("email").value)).toBe(true);
        });
        it('should not perform email verification', () => {
            expect.assertions(2);
            const EMAIL_VALID = ["oleg98gmail.com", "+++++++++++@gmail.com"];
            EMAIL_VALID.forEach(element => {
                document.getElementById("email").value = element;
                expect(form._validationEmail(document.getElementById("email").value)).not.toBe(true);
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
                .mockImplementation(() => {;
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
                {email: "oleg9869852gmail.com", password: "Oleg98!@+", repeatPassword: "Oleg98!@+"},
                {email: "oleg9869852@gmail.com", password: "l98!@+", repeatPassword: "Oleg98!@+"},
                {email: "oleg9869852@gmail.com", password: "Oleg98!@+", repeatPassword: "O!@+"}
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
    // describe('onCreateClicked()', () => {
    //     it('should all form fields be reset', () => {
    //         expect.assertions(3);
    //         form.myForm = document.forms.myForm;
    //         const EMAIL_VALID = "oleg9869852gmail.com";
    //         form.myForm.email = EMAIL_VALID;
    //         const PASSWORD_VALID = "Oleg98!@+";
    //         form.myForm.password = PASSWORD_VALID;
    //         const REPEAT_PASSWORD_VALID = "Oleg98!@+";
    //         form.myForm.repeatPassword = REPEAT_PASSWORD_VALID;

    //         const button = document.getElementById("btnCreate");
    //         button.disabled = false;
    //         button.click();

    //         expect(form.myForm.email).toBe('');
    //         expect(form.myForm.password).toBeUndefined();
    //         expect(form.myForm.repeatPassword).toBeUndefined();
    //     });
    // });
});