export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.getListImages();
        this.model.bindonShowGalleryChange(this.onShowGalleryChange);
        this.view.bindShowGalleryButtonLeft(this.handlerflippingImg);
        this.view.bindShowGalleryButtonRight(this.handlerflippingImg);
    }
    onShowGalleryChange = (obj, number, length) => {
        this.view.showGallery(obj, number, length);
    }
    handlerflippingImg = (id) => {
        this.model.flippingImg(id);
    }
}