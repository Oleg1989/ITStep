import { ParkingInterface } from "./parking.interface";
import { TierInterface } from "./tier.interface";

export class Parking implements ParkingInterface {
    tiers: TierInterface[];
    constructor() {
        this.tiers = [];
    }
    getTiers(): TierInterface[] | [] {
        return this.tiers;
    }
    addTier = (tier: TierInterface) => {
        this.tiers.push(tier);
    }
    toPark = (type: string) => {
        let result: boolean = true;
        this.tiers.forEach(element => {
            if (element.type === type) {
                result = element.takePlace();
            }
        });
        return result;
    }
    freeUpSpaceByType = (type: string) => {
        let result: boolean = true;
        this.tiers.forEach(element => {
            if (element.type === type) {
                result = element.freeUpSpace();
            }
        });
        return result;
    }
    numberOfFreeSeatsByType = (type: string) => {
        let result: number = 0;
        this.tiers.forEach(element => {
            if (element.type === type) {
                result = element.numberOfFreeSeats();
            }
        });
        return result;
    }
}
