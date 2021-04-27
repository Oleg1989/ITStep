import { TierInterface } from "./tier.interface";

export interface ParkingInterface {
    tiers: TierInterface[] | [];
    getTiers: () => TierInterface[] | [];
    addTier: (typeTiers: TierInterface) => void;
    toPark: (type: string) => boolean;
    freeUpSpaceByType: (type: string) => boolean;
    numberOfFreeSeatsByType: (type: string) => number;
}