import { Parking } from "./parking";
import { Tier } from "./tier";
import { ParkingInterface } from "./parking.interface";
import { TierType } from "./tier";

describe('Parking', () => {
    let parking: ParkingInterface;
    beforeEach(() => {
        parking = new Parking();
        parking.addTier(new Tier(TierType.Auto));
        parking.addTier(new Tier(TierType.Moto));
        parking.addTier(new Tier(TierType.Bike));
    });

    it('should init with empty items list', () => {
        expect.assertions(1);
        const parking = new Parking();
        expect(parking.getTiers()).toEqual([]);
    });
    describe('addTier()', () => {
        it('should return not empty tiers', () => {
            expect.assertions(1);
            expect(parking.getTiers().length).toBe(3);
        });
    });
    describe('numberOfFreeSeatsByType()', () => {
        it('should return the number of free seats by type', () => {
            expect.assertions(3);
            expect(parking.numberOfFreeSeatsByType('auto')).toBe(25);
            expect(parking.numberOfFreeSeatsByType('moto')).toBe(50);
            expect(parking.numberOfFreeSeatsByType('bike')).toBe(75);
        });
    });
    describe('toPark()', () => {
        it('should reduce the type of parking spaces', () => {
            expect.assertions(6);
            expect(parking.toPark('auto')).toBe(true);
            expect(parking.toPark('moto')).toBe(true);
            expect(parking.toPark('bike')).toBe(true);
            expect(parking.numberOfFreeSeatsByType('auto')).toBe(24);
            expect(parking.numberOfFreeSeatsByType('moto')).toBe(49);
            expect(parking.numberOfFreeSeatsByType('bike')).toBe(74);
        });
    });
    describe('freeUpSpaceByType()', () => {
        it('should change the parking space by type', () => {
            expect.assertions(6);
            parking.toPark('auto');
            parking.toPark('moto');
            parking.toPark('bike');
            expect(parking.freeUpSpaceByType('auto')).toBe(true);
            expect(parking.freeUpSpaceByType('moto')).toBe(true);
            expect(parking.freeUpSpaceByType('bike')).toBe(true);
            expect(parking.numberOfFreeSeatsByType('auto')).toBe(25);
            expect(parking.numberOfFreeSeatsByType('moto')).toBe(50);
            expect(parking.numberOfFreeSeatsByType('bike')).toBe(75);
        });
    });
});