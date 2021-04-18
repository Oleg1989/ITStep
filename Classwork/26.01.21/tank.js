class Tank {
    _ammunition = 20;
    _health = 10;
    posX;
    posY;
    aimX;
    aimY;
    title;
    static DAMAGE = 2;
    constructor(title) {
        this.title = title;
    }
    _canFire() {
        return this._ammunition > 0 ? true : false;
    }
}