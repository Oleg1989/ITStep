import { Product } from "./product";
import { productType } from "./enum/productType";
import { typeContainer } from "./enum/typeContainer";
import _ from "lodash";

export class View {
    addProduct: HTMLElement | null;
    liquidProducts: HTMLElement | null;
    bulkProducts: HTMLElement | null;
    titleModel: HTMLElement | null;
    menuProduct: HTMLElement | null;
    removeModal: HTMLElement | null;
    divHeader: HTMLElement;
    balanceTable: HTMLElement | null;
    constructor() {
        this.addProduct = document.getElementById('add');
        this.liquidProducts = document.getElementById('liquid-products');
        this.bulkProducts = document.getElementById('bulk-products');
        this.titleModel = document.getElementById('title-model');
        this.menuProduct = document.getElementById('menu-product');
        this.removeModal = document.getElementById('remove-modal');
        this.divHeader = document.createElement('div');
        this.balanceTable = document.getElementById('balance-table');
    }
    viewProducts = (products: { [key: string]: Product }) => {
        this.resetLiquidProducts();
        this.resetBulkProducts();
        for (let key in products) {
            if (products[key].type == productType.bulkProducts) {
                let li = document.createElement('li');

                let divHeader = document.createElement('div');
                divHeader.classList.add('collapsible-header');
                divHeader.textContent = `${products[key].title}`

                let i = document.createElement('i');
                i.classList.add('material-icons');
                i.textContent = 'delete'
                i.id = products[key].id;

                let a = document.createElement('a');
                a.setAttribute('href', '#removeProduct');
                a.classList.add('modal-trigger');

                a.append(i);
                divHeader.prepend(a);

                let divBody = document.createElement('div');
                divBody.classList.add('collapsible-body');

                let number: number = 1;
                if (products[key].currentQuantity > products[key].maxCapacity) {
                    let i = products[key].currentQuantity;
                    while (i > products[key].maxCapacity) {
                        let h6 = document.createElement('h6');
                        h6.textContent = `Box №${number} - ${products[key].maxCapacity}kg`;

                        let divProgress = document.createElement('div');
                        divProgress.classList.add('progress');

                        let divDeterminate = document.createElement('div');
                        divDeterminate.classList.add('determinate');
                        divDeterminate.setAttribute('style', `width: ${products[key].currentQuantity}%`);

                        divProgress.append(divDeterminate);
                        divBody.append(h6, divProgress);

                        i -= products[key].maxCapacity;
                        number++;
                    };
                    let h6 = document.createElement('h6');
                    h6.textContent = `Box №${number} - ${i}kg`;

                    let divProgress = document.createElement('div');
                    divProgress.classList.add('progress');

                    let divDeterminate = document.createElement('div');
                    divDeterminate.classList.add('determinate');
                    divDeterminate.setAttribute('style', `width: ${i}%`);

                    divProgress.append(divDeterminate);
                    divBody.append(h6, divProgress);
                } else {
                    let h6 = document.createElement('h6');
                    h6.textContent = `Box №${number} - ${products[key].currentQuantity}kg`;

                    let divProgress = document.createElement('div');
                    divProgress.classList.add('progress');

                    let divDeterminate = document.createElement('div');
                    divDeterminate.classList.add('determinate');
                    divDeterminate.setAttribute('style', `width: ${products[key].currentQuantity}%`);

                    divProgress.append(divDeterminate);
                    divBody.append(h6, divProgress);
                }
                li.append(divHeader, divBody);
                this.bulkProducts?.append(li);
            } else {
                let li = document.createElement('li');

                let divHeader = document.createElement('div');
                divHeader.classList.add('collapsible-header');
                divHeader.textContent = `${products[key].title}`

                let i = document.createElement('i');
                i.classList.add('material-icons');
                i.textContent = 'delete'
                i.id = products[key].id;

                let a = document.createElement('a');
                a.setAttribute('href', '#removeProduct');
                a.classList.add('modal-trigger');

                a.append(i);
                divHeader.prepend(a);

                let divBody = document.createElement('div');
                divBody.classList.add('collapsible-body');

                let number: number = 1;
                if (products[key].currentQuantity > products[key].maxCapacity) {
                    let i = products[key].currentQuantity;
                    while (i > products[key].maxCapacity) {
                        let h6 = document.createElement('h6');
                        h6.textContent = `Barrel №${number} - ${products[key].maxCapacity}l`;

                        let divProgress = document.createElement('div');
                        divProgress.classList.add('progress');

                        let divDeterminate = document.createElement('div');
                        divDeterminate.classList.add('determinate');
                        divDeterminate.setAttribute('style', `width: ${products[key].currentQuantity}%`);

                        divProgress.append(divDeterminate);
                        divBody.append(h6, divProgress);

                        i -= products[key].maxCapacity;
                        number++;
                    };
                    let h6 = document.createElement('h6');
                    h6.textContent = `Barrel №${number} - ${i}l`;

                    let divProgress = document.createElement('div');
                    divProgress.classList.add('progress');

                    let divDeterminate = document.createElement('div');
                    divDeterminate.classList.add('determinate');
                    divDeterminate.setAttribute('style', `width: ${i}%`);

                    divProgress.append(divDeterminate);
                    divBody.append(h6, divProgress);
                } else {
                    let h6 = document.createElement('h6');
                    h6.textContent = `Barrel №${number} - ${products[key].currentQuantity}l`;

                    let divProgress = document.createElement('div');
                    divProgress.classList.add('progress');

                    let divDeterminate = document.createElement('div');
                    divDeterminate.classList.add('determinate');
                    divDeterminate.setAttribute('style', `width: ${products[key].currentQuantity}%`);

                    divProgress.append(divDeterminate);
                    divBody.append(h6, divProgress);
                }
                li.append(divHeader, divBody);
                this.liquidProducts?.append(li);
            }
        }
    }
    viewBalance = (parameters: { [key: string]: number }, products: { [key: string]: Product }) => {
        this.resetBalanceTable();
        let Boxes = Object.keys(products).filter(e => products[e].container === typeContainer.Box);
        let Barrels = Object.keys(products).filter(e => products[e].container === typeContainer.Barrel);
        if (this.balanceTable) {
            let thead = document.createElement('thead');

            let trHead = document.createElement('tr');

            let tdHeadParametr = document.createElement('th');
            tdHeadParametr.textContent = 'Parameter';

            let tdHeadValue = document.createElement('th');
            tdHeadValue.textContent = 'Value';

            trHead.append(tdHeadParametr, tdHeadValue);
            thead.append(trHead);
            this.balanceTable.append(thead);

            let tbody = document.createElement('tbody');
            for (let key in parameters) {
                let tr = document.createElement('tr');

                let tdParametr = document.createElement('td');
                tdParametr.textContent = `${key}`;

                let tdValue = document.createElement('td');
                tdValue.textContent = `${parameters[key]}`;

                tr.append(tdParametr, tdValue);
                tbody.append(tr);
                this.balanceTable.append(tbody);
            }

            let trBoxes = document.createElement('tr');

            let tdBoxesParametr = document.createElement('td');
            tdBoxesParametr.textContent = 'Number of boxes with products';

            let tdBoxesValue = document.createElement('td');
            tdBoxesValue.textContent = `${Boxes.length}`;

            trBoxes.append(tdBoxesParametr, tdBoxesValue);
            tbody.append(trBoxes);

            let trBarrels = document.createElement('tr');

            let tdBarrelsParametr = document.createElement('td');
            tdBarrelsParametr.textContent = 'Number of barrels with products';

            let tdBarrelsValue = document.createElement('td');
            tdBarrelsValue.textContent = `${Barrels.length}`;

            trBarrels.append(tdBarrelsParametr, tdBarrelsValue);
            tbody.append(trBarrels);
        }
    }
    bindAddProduct(handler: (product: Product) => void) {
        this.addProduct?.addEventListener('click', (event: Event) => {
            if ((event.target as HTMLElement).id == 'add') {
                const title = document.getElementById('title');
                const type = document.getElementById('type-product');
                const quantityOfProduct = document.getElementById('quantity-of-product');
                if ((type as HTMLSelectElement).value && (title as HTMLInputElement).value && (quantityOfProduct as HTMLInputElement).value) {
                    if ((type as HTMLInputElement).value == productType.bulkProducts) {
                        const product = new Product((title as HTMLInputElement).value, productType.bulkProducts, typeContainer.Box, +(quantityOfProduct as HTMLInputElement).value);
                        handler(product);
                    } else {
                        const product = new Product((title as HTMLInputElement).value, productType.liquidProducts, typeContainer.Barrel, +(quantityOfProduct as HTMLInputElement).value);
                        handler(product);
                    }
                    (title as HTMLInputElement).value = '';
                    (quantityOfProduct as HTMLInputElement).value = '';
                } else {
                    alert('Fill in all fields of the form!');
                }
            }
        })
    }
    bindRemoveProduct(handler: (title: string, quantityProduct: number) => void) {
        if (this.removeModal) {
            this.removeModal.id = 'removeProduct';
        }
        this.removeModal?.addEventListener('click', (event: Event) => {
            if ((event.target as HTMLElement).id == 'remove') {
                const quantityProduct = document.getElementById('remove-quantity-of-product');
                const title = document.getElementById('remove-title');
                if (quantityProduct && title) {
                    handler((title as HTMLInputElement).value, +(quantityProduct as HTMLInputElement).value);
                    //this.removeModal!.id = 'remove-modal';
                    (quantityProduct as HTMLInputElement).value = '';
                    (title as HTMLInputElement).value = '';
                }
            }
        })
    }
    resetLiquidProducts() {
        while (this.liquidProducts?.firstChild) {
            this.liquidProducts.removeChild(this.liquidProducts.firstChild);
        }
    }
    resetBulkProducts() {
        while (this.bulkProducts?.firstChild) {
            this.bulkProducts.removeChild(this.bulkProducts.firstChild);
        }
    }
    resetBalanceTable() {
        while (this.balanceTable?.firstChild) {
            this.balanceTable.removeChild(this.balanceTable.firstChild);
        }
    }
}