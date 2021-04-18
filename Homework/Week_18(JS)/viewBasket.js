export class ViewBasket {
    constructor() {
        this.app = document.getElementById('app-root');
        this.divBasket = document.createElement('div');
        this.divBasket.id = 'basket';
        this.form = document.createElement('form');
        this.form.id = 'form';
    }
    showBasket = (arr, total) => {
        this._resetBasket();

        if (arr.length === 0) {
            const p = document.createElement("p");
            p.classList.add('basket-info');
            p.textContent = 'Your database is empty!';
            this.divBasket.append(p);
            this.app.append(this.divBasket);
        } else {
            for (let i = 0; i < arr.length; i++) {
                this.divBasket.append(this.showTitle(arr[i]));
            }

            this.app.append(this.divBasket);
        }
    }
    showTitle = (obj) => {
        let divTitle = document.createElement('div');
        divTitle.classList.add('title');
        divTitle.id = obj.id;
        divTitle.append(this.showImg(obj), this.showName(obj), this.showCost(obj), this.showNumber(obj), this.showButtonDelete(obj), this.showButtonEdit(obj));

        return divTitle
    }
    showImg = (obj) => {
        let img = document.createElement('img');
        img.setAttribute('src', `${obj.url}`);
        img.classList.add('img');

        return img;
    }
    showName = (obj) => {
        let divName = document.createElement('div');
        divName.classList.add('name-cost');
        let div = document.createElement('div');
        for (let key in obj) {
            let pName = document.createElement('p');
            pName.classList.add('data');
            let pContent = document.createElement('p');
            if (key === 'title') {
                pName.textContent = 'Title:';
                pContent.textContent = obj[key];
            }
            div.append(pName, pContent);
        }
        divName.append(div);

        return divName;
    }
    showCost = (obj) => {
        let divCost = document.createElement('div');
        divCost.classList.add('name-cost');
        let div = document.createElement('div');
        for (let key in obj) {
            let pCost = document.createElement('p');
            pCost.classList.add('data');
            let pContent = document.createElement('p');
            if (key === 'cost') {
                pCost.textContent = 'Cost:';
                pContent.textContent = `${obj[key]}$`;
            }
            div.append(pCost, pContent);
        }
        divCost.append(div);

        return divCost;
    }
    showNumber = (obj) => {
        let divNumber = document.createElement('div');
        divNumber.classList.add('name-cost');
        let div = document.createElement('div');
        for (let key in obj) {
            let pNumber = document.createElement('p');
            pNumber.classList.add('data');
            let pContent = document.createElement('p');
            if (key === 'number') {
                pNumber.textContent = 'Instor:';
                pContent.textContent = obj[key];
            }
            div.append(pNumber, pContent);
        }
        divNumber.append(div);

        return divNumber;
    }
    showButtonDelete = (obj) => {
        let button = document.createElement('button');
        button.type = 'button';
        button.id = 'delete';
        button.setAttribute('data-id', `${obj.id}`);
        button.classList.add('button-delete');
        button.textContent = 'Delete';

        return button
    }
    showButtonEdit = (obj) => {
        let button = document.createElement('button');
        button.type = 'button';
        button.id = 'edit';
        button.setAttribute('data-id', `${obj.id}`);
        button.classList.add('button-edit');
        button.textContent = 'Edit';

        return button
    }
    _resetBasket = () => {
        while (this.divBasket.firstChild) {
            this.divBasket.removeChild(this.divBasket.firstChild);
        }
    }
    bindIncreaseAmountProductBasket(handler) {
        this.divBasket.addEventListener('click', (event) => {
            for (let i = 0; i < event.target.classList.length; i++) {
                if (event.target.classList[i] === 'increase') {
                    const id = event.target.parentNode.dataset.id;
                    handler(id);
                }
            }
        })
    }
    bindReduceAmountProductBasket(handler) {
        this.divBasket.addEventListener('click', (event) => {
            for (let i = 0; i < event.target.classList.length; i++) {
                if (event.target.classList[i] === 'reduce') {
                    const id = event.target.parentNode.dataset.id;
                    handler(id);
                }
            }
        })
    }
    bindFormAddAndDeleteProduct(handler) {
        this.divBasket.addEventListener('click', (event) => {
            //event.preventDefault();
            if (event.target.id === 'delete') {
                const id = event.target.dataset.id;
                handler(id);
            }
        })
    }
    bindFormAddAndEditProduct(handler) {
        this.divBasket.addEventListener('click', (event) => {
            //event.preventDefault();
            if (event.target.id === 'edit') {
                const id = event.target.dataset.id;
                handler(id);
            }
        })
    }
}