interface PictureInterfce {
    alt: string,
    path: string,

}

class Picture implements PictureInterfce {
    alt: string;
    path: string;
    constructor(alt: string, path: string) {
        this.alt = alt;
        this.path = path;
    }
    view = () => {
        let a = document.createElement('a');
        a.setAttribute('alt', `${this.alt}`);
        a.setAttribute('src', `${this.path}`)
        return a;
    }
}