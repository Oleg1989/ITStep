import { TierType } from "./tier";

export interface TierInterface {
    type: TierType;
    numberSeats: number;
    takePlace: () => boolean;
    freeUpSpace: () => boolean;
    numberOfFreeSeats: () => number;
};