export class Controller {
    constructor(productEntity, productRepository, viewAdmin, viewForm) {
        this.productEntity = productEntity;
        this.productRepository = productRepository;
        this.viewAdmin = viewAdmin;
        this.viewForm = viewForm;

        this.onAdminChanged(this.productRepository.getProduct());
        this.onFormChanged();
        this.productEntity.bindAdminChanged(this.onAdminChanged);
        this.viewForm.bindFormAddAndAddProduct(this.handlerAddProductForm);
        this.viewForm.bindFormUpdateAndAddProduct(this.handlerUpdateProductForm);
        this.viewAdmin.bindFormAddAndDeleteProduct(this.handlerDeleteProductForm);
        this.viewAdmin.bindFormAddAndEditProduct(this.handlerEditProductForm);

    }
    onAdminChanged = (arr) => {
        this.viewAdmin.showAdmin(arr);
    };
    onFormChanged = () => {
        this.viewForm.showFormAdd();
    }
    handlerAddProductForm = (obj) => {
        this.productEntity.addProduct(obj);
        this.viewForm.showFormAdd();
    }
    handlerDeleteProductForm = (id) => {
        this.productEntity.deleteProduct(id);
        this.viewForm.showFormAdd();
    }
    handlerEditProductForm = (id) => {
        this.viewForm.showFormUpdate(this.productEntity.editProduct(id));
    }
    handlerUpdateProductForm = (obj) => {
        this.productEntity.updateProduct(obj);
        this.viewForm.showFormAdd();
    }
}