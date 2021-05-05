import { TierInterface } from "./tier.interface";

export enum TierType {
    Bike = 'bike',
    Auto = 'auto',
    Moto = 'moto'
}

export class Tier implements TierInterface {
    type: TierType;
    numberSeats: number;
    seats: number;
    constructor(type: TierType) {
        if (type == 'bike') {
            this.type = type;
            this.numberSeats = 75;
            this.seats = 75;
        } else if (type == 'moto') {
            this.type = type;
            this.numberSeats = 50;
            this.seats = 50;
        } else {
            this.type = type;
            this.numberSeats = 25;
            this.seats = 25;
        }

    }
    takePlace = () => {
        if (this.numberSeats > 0) {
            this.numberSeats--;
            return true;
        } else {
            return false;
        }
    }
    freeUpSpace = () => {
        if (this.numberSeats < this.seats) {
            this.numberSeats++;
            return true;
        } else {
            return false;
        }
    }
    numberOfFreeSeats = () => {
        return this.numberSeats;
    }
}