export class ViewForm {
    constructor() {
        this.app = document.getElementById('app-root');
        this.form = document.createElement('form');
        this.form.id = 'form';
    }
    showFormAdd = () => {
        this._resetForm();

        let h1 = document.createElement('h1');
        h1.textContent = 'Form Add';

        let inputTitle = document.createElement('input');
        inputTitle.type = 'text';
        inputTitle.id = 'title';
        inputTitle.classList.add('text');
        inputTitle.setAttribute('placeholder', 'Title:');

        let inputCost = document.createElement('input');
        inputCost.type = 'text';
        inputCost.id = 'cost';
        inputCost.classList.add('text');
        inputCost.setAttribute('placeholder', 'Cost:');

        let inputImgUrl = document.createElement('input');
        inputImgUrl.type = 'text';
        inputImgUrl.id = 'url';
        inputImgUrl.classList.add('text');
        inputImgUrl.setAttribute('placeholder', 'Url:');

        let inputInstor = document.createElement('input');
        inputInstor.type = 'text';
        inputInstor.id = 'number';
        inputInstor.classList.add('text');
        inputInstor.setAttribute('placeholder', 'Instor:');

        let inputButton = document.createElement('input');
        inputButton.type = 'submit';
        inputButton.id = 'add';
        inputButton.classList.add('form-submit');
        inputButton.value = 'Add';

        this.form.append(h1, inputTitle, inputCost, inputImgUrl, inputInstor, inputButton);

        this.app.append(this.form);
    }
    showFormUpdate = (obj) => {
        this._resetForm();

        let h1 = document.createElement('h1');
        h1.textContent = 'Form Update';

        let inputTitle = document.createElement('input');
        inputTitle.type = 'text';
        inputTitle.id = 'title';
        inputTitle.classList.add('text');
        inputTitle.value = obj.title;
        inputTitle.setAttribute('placeholder', 'Title:');

        let inputCost = document.createElement('input');
        inputCost.type = 'text';
        inputCost.id = 'cost';
        inputCost.classList.add('text');
        inputCost.value = obj.cost;
        inputCost.setAttribute('placeholder', 'Cost:');

        let inputImgUrl = document.createElement('input');
        inputImgUrl.type = 'text';
        inputImgUrl.id = 'url';
        inputImgUrl.classList.add('text');
        inputImgUrl.value = obj.url;
        inputImgUrl.setAttribute('placeholder', 'Url:');

        let inputInstor = document.createElement('input');
        inputInstor.type = 'text';
        inputInstor.id = 'number';
        inputInstor.classList.add('text');
        inputInstor.value = obj.number;
        inputInstor.setAttribute('placeholder', 'Instor:');

        let inputButton = document.createElement('input');
        inputButton.type = 'submit';
        inputButton.id = 'update';
        inputButton.classList.add('form-submit');
        inputButton.setAttribute('data-id', `${obj.id}`)
        inputButton.value = 'Update';

        this.form.append(h1, inputTitle, inputCost, inputImgUrl, inputInstor, inputButton);

        this.app.append(this.form);
    }
    _resetForm = () => {
        while (this.form.firstChild) {
            this.form.removeChild(this.form.firstChild);
        }
    }
    bindFormAddAndAddProduct(handler) {
        this.form.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target.id === 'add') {
                let arrInputs = document.getElementsByTagName('input');
                let objDataProduct = {};
                for (let i = 0; i < arrInputs.length; i++) {
                    if (arrInputs[i].className === 'text') {
                        if (arrInputs[i].id === 'number' || arrInputs[i].id === 'cost') {
                            objDataProduct[arrInputs[i].id] = +arrInputs[i].value;
                            arrInputs[i].value = '';
                        } else {
                            objDataProduct[arrInputs[i].id] = arrInputs[i].value;
                            arrInputs[i].value = '';
                        }
                    }
                }

                handler(objDataProduct);
            }
        })
    }
    bindFormUpdateAndAddProduct(handler) {
        this.form.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target.id === 'update') {
                let arrInputs = document.getElementsByTagName('input');
                let objDataProduct = {};
                objDataProduct.id = event.target.dataset.id;
                for (let i = 0; i < arrInputs.length; i++) {
                    if (arrInputs[i].className === 'text') {
                        if (arrInputs[i].id === 'number' || arrInputs[i].id === 'cost') {
                            objDataProduct[arrInputs[i].id] = +arrInputs[i].value;
                        } else {
                            objDataProduct[arrInputs[i].id] = arrInputs[i].value;
                        }
                    }
                }

                handler(objDataProduct);
            }
        })
    }
}