export interface TierInterface {
    type: string;
    numberSeats: number;
    takePlace: () => boolean;
    freeUpSpace: () => boolean;
    numberOfFreeSeats: () => number;
};