import { Photo } from './photo.js';

export class Model {
    constructor() {
        this.url = 'https://picsum.photos/v2/list';
        this.arrPhotos = [];
        this.idImg = 0;
    }
    async getListImages() {
        let response = await fetch(this.url);
        if (response.ok) {
            let json = await response.json();
            for (let i = 0; i < json.length; i++) {
                const photo = new Photo(
                    json[i].author,
                    json[i].height,
                    json[i].id,
                    json[i].url,
                    json[i].width,
                    i
                );
                this.arrPhotos.push(photo);
            }
            this.getImage(this.arrPhotos[0], this.arrPhotos[0].sequenceNumber);
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
    async getImage(obj, number) {
        let response = await fetch(`https://picsum.photos/id/${obj.id}/info`);
        if (response.ok) {
            let json = await response.json();
            this._changeShowGallery(json, number, this.arrPhotos.length)
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
    flippingImg = (id) => {
        this.getImage(this.arrPhotos[id], this.arrPhotos[id].sequenceNumber);
    }
    bindonShowGalleryChange(calback) {
        this.onShowGalleryChange = calback;
    }
    _changeShowGallery(obj, number, length) {
        this.onShowGalleryChange(obj, number, length);
    }
}