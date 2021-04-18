export class View {
    constructor() {
        this.app = document.getElementById('app-root');
        this.gallery = document.createElement('div');
        this.gallery.style.display = 'flex';
        this.gallery.style.justifyContent = 'center';
        this.gallery.style.alignItems = 'center';
        this.gallery.style.margin = '50px';
    }
    showGallery = (obj, number, length) => {
        this._resetImg();

        let buttonLeft = document.createElement('button');
        buttonLeft.type = 'button';
        buttonLeft.id = 'left';
        buttonLeft.setAttribute('data-id', `${number}`);
        buttonLeft.innerHTML = '&larr;';
        buttonLeft.style.width = '50px';
        buttonLeft.style.height = '50px';
        buttonLeft.style.marginRight = '50px';
        if (number === 0) {
            buttonLeft.setAttribute('disabled', `disabled`);
        }

        let divImg = document.createElement('div');

        let img = document.createElement('img');
        img.src = `${obj.download_url}`;
        img.setAttribute('alt', `${obj.author}`);
        img.setAttribute('width', '700');
        img.setAttribute('height', '500');
        img.id = `${obj.id}`;

        divImg.append(img);

        let buttonRight = document.createElement('button');
        buttonRight.type = 'button';
        buttonRight.innerHTML = '&rarr;';
        buttonRight.id = 'right';
        buttonRight.setAttribute('data-id', `${number}`);
        buttonRight.style.width = '50px';
        buttonRight.style.height = '50px';
        buttonRight.style.marginLeft = '50px';
        if (number === length - 1) {
            buttonRight.setAttribute('disabled', `disabled`);
        }


        this.gallery.append(buttonLeft, divImg, buttonRight);

        this.app.append(this.gallery);

    }
    _resetImg = () => {
        while (this.gallery.firstChild) {
            this.gallery.removeChild(this.gallery.firstChild);
        }
    }
    bindShowGalleryButtonLeft(handler) {
        this.gallery.addEventListener('click', (event) => {
            if (event.target.id === 'left') {
                const id = event.target.dataset.id;
                handler(+id - 1);
            }
        })
    }
    bindShowGalleryButtonRight(handler) {
        this.gallery.addEventListener('click', (event) => {
            if (event.target.id === 'right') {
                const id = event.target.dataset.id;
                handler(+id + 1);
            }
        })
    }
}