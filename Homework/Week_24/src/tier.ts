import { TierInterface } from "./tier.interface";

export class Tier implements TierInterface {
    type: string;
    numberSeats: number;
    seats: number;
    constructor(params: Pick<TierInterface, 'type'>) {
        this.type = params.type;
        this.numberSeats = 10;
        this.seats = 10;
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