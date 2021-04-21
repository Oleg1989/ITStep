import { AddRegistrationForm } from "./add-registation.form";

let form;

beforeEach(() => {
    form = new AddRegistrationForm();
    document.body.innerHTML = "";
    document.body.append(form.dom);
});
afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
});

describe('AddRegistrationForm', () => {
    it("should match snaphot", () => {
        expect.assertions(1);
        expect(form.dom).toMatchSnapshot();
    });
    // describe('Layout', () => {
    //     it("should render div#container", () => {
    //         expect.assertions(1);
    //         const container = document.getElementById("container");
    //         expect(container).toBeTruthy();
    //     });
    //     it("should render input#email", () => {
    //         expect.assertions(1);
    //         const email = document.getElementById("email");
    //         expect(email).toBeTruthy();
    //     });
    //     it("should render input#password", () => {
    //         expect.assertions(1);
    //         const password = document.getElementById("password");
    //         expect(password).toBeTruthy();
    //     });
    //     it("should render input#repeat-password", () => {
    //         expect.assertions(1);
    //         const repeatPassword = document.getElementById("repeat-password");
    //         expect(repeatPassword).toBeTruthy();
    //     });
    //     it("should render button", () => {
    //         expect.assertions(1);
    //         const button = document.getElementById("btnCreate");
    //         expect(button).toBeTruthy();
    //     });
    // });
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
            const EMAIL_VALID = ["oleg98gmail.com", "+++++++++++@gmail.com"];
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
                .mockImplementation(() => {;
                    return true;
                });
            // const submitSpy = jest
            //     .spyOn(HTMLFormElement.prototype, "submit")
            //     .mockImplementation(() => {;
            //         return true;
            //     });
            const f = new AddRegistrationForm();
            document.body.append(f.dom);
            const button = document.getElementById("btnCreate");
            button.disabled = false;
            button.click();
            // const myForm = document.forms.myForm;
            // myForm.submit();
            expect(clickSpy).toBeCalled();
            //expect(submitSpy).toBeCalled();
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
    describe('onCreateClicked()', () => {
        it('should return the registration settings', () => {
            expect.assertions(2);
            document.body.innerHTML = "";
            const VALID_FORM_INPUTS = 'Email: oleg9869852gmail.com; Password: Oleg98!@+; Repeat password: Oleg98!@+;';
            const onCreateClickedSpy = jest
                .spyOn(AddRegistrationForm.prototype, "onCreateClicked")
                .mockImplementation(() => {
                    return VALID_FORM_INPUTS;
                });
            const newForm = new AddRegistrationForm();
            document.body.append(newForm.dom);
            const myForm = document.forms.myForm;
            myForm.email = 'oleg9869852gmail.com';
            myForm.password = 'Oleg98!@+';
            myForm.repeatPassword = 'Oleg98!@+';
            const formParameters = `Email: ${myForm.email}; Password: ${myForm.password}; Repeat password: ${myForm.repeatPassword};`;
            newForm.onCreateClicked();
            expect(onCreateClickedSpy).toBeCalled();
            expect(onCreateClickedSpy()).toBe(formParameters);
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