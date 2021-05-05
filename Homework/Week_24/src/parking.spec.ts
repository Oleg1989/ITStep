import { Parking } from "./parking";
import { Tier } from "./tier";
import { ParkingInterface } from "./parking.interface";

describe('Parking', () => {
    let parking: ParkingInterface;
    beforeEach(() => {
        parking = new Parking();
    });

    it('should init with empty items list', () => {
        expect.assertions(1);
        const parking = new Parking();
        expect(parking.getTiers()).toEqual([]);
    });
    describe('addTier()', () => {
        it('should return not empty tiers', () => {
            expect.assertions(1);
            parking.addTier(new Tier({ type: 'car' }));
            parking.addTier(new Tier({ type: 'bicycle' }));
            parking.addTier(new Tier({ type: 'motorcycle' }));
            expect(parking.getTiers().length).toBe(3);
        });
    });
    describe('numberOfFreeSeatsByType()', () => {
        it('should return the number of free seats by type', () => {
            expect.assertions(1);
            parking.addTier(new Tier({ type: 'car' }));
            expect(parking.numberOfFreeSeatsByType('car')).toBe(10);
        });
    });
    describe('toPark()', () => {
        it('should reduce the type of parking spaces', () => {
            expect.assertions(2);
            parking.addTier(new Tier({ type: 'car' }));
            expect(parking.toPark('car')).toBe(true);
            expect(parking.numberOfFreeSeatsByType('car')).toBe(9);
        });
    });
    describe('freeUpSpaceByType()', () => {
        it('should change the parking space by type', () => {
            expect.assertions(2);
            parking.addTier(new Tier({ type: 'car' }));
            parking.toPark('car');
            expect(parking.freeUpSpaceByType('car')).toBe(true);
            expect(parking.numberOfFreeSeatsByType('car')).toBe(10);
        });
    });
});