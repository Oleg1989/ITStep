export class ViewBasket {
    constructor() {
        this.app = document.getElementById('app-root');
        this.divBasket = document.createElement('div');
        this.divBasket.id = 'basket';
    }
    showBasket = (arr, total) => {
        this._resetBasket();

        if (arr.length === 0) {
            const p = document.createElement("p");
            p.classList.add('basket-info');
            p.textContent = "Your basket is empty!";
            this.divBasket.append(p);
            this.divBasket.append(this.showTotal(total));
            this.app.append(this.divBasket);
        } else {
            for (let i = 0; i < arr.length; i++) {
                this.divBasket.append(this.showTitle(arr[i]));
            }
            this.divBasket.append(this.showTotal(total));

            this.app.append(this.divBasket);
        }
    }
    showTitle = (obj) => {
        let divTitle = document.createElement('div');
        divTitle.classList.add('title');
        divTitle.append(this.showImg(obj), this.showNameAndCost(obj), this.showNumber(obj));

        return divTitle
    }
    showImg = (obj) => {
        let img = document.createElement('img');
        img.setAttribute('src', `${obj.url}`);
        img.classList.add('img');

        return img;
    }
    showNameAndCost = (obj) => {
        let divNameAndCost = document.createElement('div');
        divNameAndCost.classList.add('name-cost');
        let div = document.createElement('div');
        for (let key in obj) {
            let p = document.createElement('p');
            if (key === 'title') {
                p.textContent = obj[key];
            }
            if (key === 'cost') {
                p.textContent = `${obj[key]}$`;
            }
            div.append(p);
        }
        divNameAndCost.append(div);

        return divNameAndCost;
    }
    showNumber = (obj) => {
        let divNumber = document.createElement('div');
        divNumber.id = obj.id;
        divNumber.classList.add('number');

        let buttonRemove = document.createElement('button');
        buttonRemove.type = 'button';
        buttonRemove.classList.add('reduce');
        buttonRemove.classList.add('btn');
        buttonRemove.textContent = '-';

        let pContent = document.createElement('p');
        if (+obj.number < 1) {
            pContent.textContent = '0';
            pContent.classList.add('content-red');
            buttonRemove.type = 'button';
            buttonRemove.setAttribute('disabled', 'disabled');
        } else {
            pContent.textContent = obj.number;
            pContent.style.color = 'blue';
        }

        let buttonAdd = document.createElement('button');
        buttonAdd.type = 'button';
        buttonAdd.textContent = '+';
        buttonAdd.classList.add('increase');
        buttonAdd.classList.add('btn');

        divNumber.append(buttonRemove, pContent, buttonAdd);

        return divNumber;
    }
    showTotal = (total) => {
        let divTotal = document.createElement('div');
        divTotal.id = 'total';

        let div = document.createElement('div');
        div.classList.add('total-content');
        div.textContent = `Total: ${total}$`;
        if (total === 0) {
            div.classList.add('content-red');
        } else {
            div.classList.add('content-green');
        }

        divTotal.append(div);

        return divTotal
    }
    _resetBasket = () => {
        while (this.divBasket.firstChild) {
            this.divBasket.removeChild(this.divBasket.firstChild);
        }
    }
    bindIncreaseAmountProductBasket(handler) {
        this.divBasket.addEventListener('click', (event) => {
            for (let i = 0; i < event.target.classList.length; i++){
                if (event.target.classList[i] === 'increase') {
                    const id = parseInt(event.target.parentElement.id);
                    handler(id);
                }
            }
        })
    }
    bindReduceAmountProductBasket(handler) {
        this.divBasket.addEventListener('click', (event) => {
            for (let i = 0; i < event.target.classList.length; i++){
                if (event.target.classList[i] === 'reduce') {
                    const id = parseInt(event.target.parentElement.id);
                    handler(id);
                }
            }
        })
    }
}