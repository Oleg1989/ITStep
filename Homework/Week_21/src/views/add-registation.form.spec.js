import { AddRegistrationForm } from "./add-registation.form";
let form;
beforeEach(() => {
    form = new AddRegistrationForm();
    document.body.innerHTML = "";
    document.body.append(form.dom);
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
    describe('_validationPassword ', () => {
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
            const PASSWORD_VALID = "Oleg98!@+";
            document.getElementById("password").value = PASSWORD_VALID;
            expect(form._validationPassword(document.getElementById("password").value)).toBe(true);
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
    describe('_validationEmail', () => {
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
                .mockImplementation(() => {
                    //console.log("Create new account");
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
    // describe('onCreateClicked()', () => {
    //     it('should perform a method call check', () => {
    //         expect.assertions(4);
    //         document.getElementById("email").value = "oleg9869852@gmail.com";
    //         document.getElementById("password").value = "Oleg98!@+";
    //         document.getElementById("repeat-password").value = "Oleg98!@+";
    //         form.onCreateClicked();
    //         const inputs = document.querySelectorAll('input');
    //         console.log(inputs[0].value);

    //         const button = document.getElementById('btnCreate');
    //         for (let i = 0; i < inputs.length; i++) {
    //             expect(inputs[i].value).toBe("");
    //         }
    //         // inputs.forEach(element => {
    //         //     expect(element.value).toBe("");
    //         // });
    //         expect(button.disabled).toBe(false);
    //     });
    // });
});