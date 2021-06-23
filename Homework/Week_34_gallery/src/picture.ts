import { PictureInterface } from "./interface/pictureInterface";

export class Picture implements PictureInterface {
    id: string;
    author: string;
    url: string;
    download_url: string;
    constructor(id: string, author: string, url: string, download_url: string) {
        this.id = id;
        this.author = author;
        this.url = url;
        this.download_url = download_url;
    }
    view = () => {
        let a = document.createElement('a');
        a.setAttribute('href', `${this.id}`);

        let img = document.createElement('img');
        img.setAttribute('src', `${this.download_url}`);
        img.setAttribute('alt', `${this.author}`);
        img.id = this.id;

        a.append(img);

        return a;
    }
    viewPicture = () => {
        let img = document.createElement('img');
        img.setAttribute('src', `${this.download_url}`);
        img.setAttribute('alt', `${this.author}`);

        return img;
    }
}