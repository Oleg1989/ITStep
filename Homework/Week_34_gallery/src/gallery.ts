import { GalleryInterface } from "./interface/galleryInterface";
import { PictureInterface } from "./interface/pictureInterface";
import { Picture } from "./picture";
import { RouterState } from "./interface/routerState.Interface";

export class Gallery implements GalleryInterface {
    routes: { [key: string]: PictureInterface } = {};
    url: string;
    constructor(URL: string) {
        this.url = URL

        this.addRoutes();
    }
    addRoutes = async () => {
        let response = await window.fetch(this.url);
        if (response.ok) {
            let pictureList: PictureInterface[] = await response.json();
            pictureList.forEach(picture => {
                this.routes[picture.id] = new Picture(picture.id, picture.author, picture.url, picture.download_url);
            });
            const gallery = document.getElementById('gallery');
            if (gallery) {
                for (var url in this.routes) {
                    gallery.append(this.routes[url].view());
                }
            }
            const mainContainer = document.getElementById('main');
            if (mainContainer) {
                while (mainContainer.firstChild) {
                    mainContainer.removeChild(mainContainer.firstChild);
                }
                let h1 = document.createElement('h1');
                h1.textContent = 'GALLERY';
                h1.style.textAlign = 'center';

                mainContainer.append(h1);
            }
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }
    navigate = async (path: string, push: boolean) => {
        const route = this.routes[path];
        const mainContainer = document.getElementById('main');
        if (mainContainer) {
            if (route) {
                while (mainContainer.firstChild) {
                    mainContainer.removeChild(mainContainer.firstChild);
                }
                const picture: PictureInterface = new Picture(route.id, route.author, route.url, route.download_url);
                let h2 = document.createElement('h2');
                h2.textContent = `${route.author}`;
                h2.style.textAlign = 'center';

                mainContainer.append(h2, picture.viewPicture());
            } else {
                while (mainContainer.firstChild) {
                    mainContainer.removeChild(mainContainer.firstChild);
                }
                let h1 = document.createElement('h1');
                h1.textContent = '404 - не знайдено!!!';
                h1.style.textAlign = 'center';

                mainContainer.append(h1);
            };
        }
        const routerState: RouterState = {
            path: route.id,
        };
        if (push) history.pushState(routerState, route.author, route.id);
    }
}