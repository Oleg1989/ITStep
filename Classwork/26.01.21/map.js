class Map {
    _width;
    _height;
    _maxAmountOfTanks;
    _tanks;
    constructor(width, height, maxAmountOfTanks) {
        this._width = width;
        this._height = height;
        this._maxAmountOfTanks = maxAmountOfTanks;
        this._tanks = [];
        console.info(`Map ${this._width}x${this._height} for ${this._maxAmountOfTanks} players`);
    }

    placeTankOnMap(newTank) {
        if (this._tanks.length < this._maxAmountOfTanks) {
            this._tanks.push(newTank);
            let posX = _.random(0, this._width);
            let posY = _.random(0, this._height);
            while (_.find(this._tanks, { 'posX': posX, 'posY': posY })) {
                posX = _.random(0, this._width);
                posY = _.random(0, this._height);
            };
            newTank.posX = posX;
            newTank.posY = posY;
            console.log(`${newTank.title} is added with coordinates (${newTank.posX},${newTank.posY})`);
            console.log(`${this._tanks.length} tank(s) total`);
            console.log(`${this._maxAmountOfTanks - this._tanks.length} - places left`);
        } else {
            //console.error("No places left!!!");
            throw new Error("No places left!!!");
        }
    }

    moveTo(tank) {
        let posX = _.random(0, this._width);
        let posY = _.random(0, this._height);
        while (_.find(this._tanks, { 'posX': posX, 'posY': posY })) {
            posX = _.random(0, this._width);
            posY = _.random(0, this._height);
        };
        tank.posX = posX;
        tank.posY = posY;
        console.log(`${tank.title} position - ${tank.posX},${tank.posY}`);
    }
    aimTo(tank) {
        let aimX = _.random(0, this._width);
        let aimY = _.random(0, this._width);
        while (aimX === tank.posX || aimY === tank.posY) {
            aimX = _.random(0, this._width);
            aimY = _.random(0, this._height);
        };
        tank.aimX = aimX;
        tank.aimY = aimY;
        console.log(`${tank.title} aimed at the position - ${tank.aimX},${tank.aimY}`);
    }
    fireTo(tank) {
        if (tank._canFire()) {
            let tankTarget = _.find(this._tanks, { 'posX': tank.aimX, 'posY': tank.aimY });
            if (tankTarget) {
                console.log(`${tank.title} hit in ${tankTarget.title}`);
                //console.log(`${tank.title} ammunition ${tank._ammunition}`);
                tank._ammunition -= 1;
                for (let i = 0; i < this._tanks.length; i++) {
                    if (_.isEqual(this._tanks[i], tankTarget)) {
                        this._tanks[i]._health -= 2;
                        //console.log(`${this._tanks[i].title} health ${this._tanks[i]._health}`);
                        if (this._tanks[i]._health === 0) {
                            console.warn(`${this._tanks[i].title} - death!!!`);
                            _.remove(this._tanks, function (item) {
                                return item._health === 0;
                            })
                        }
                    }
                }
            } else {
                tank._ammunition -= 1;
                console.log(`${tank.title} missed!!!`);
            }
        } else {
            _.remove(this._tanks, function (item) {
                return item._ammunition === 0;
            })
            console.log(`${tank.title} missed!!!`);
            console.warn(`${tank.title} - out of ammunition!!!`);
        }
    }
}