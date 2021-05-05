import { Tier } from "./tier";
import { TierInterface } from "./tier.interface";
import { TierType } from "./tier";

describe('Tier', () => {
    let tierAuto: TierInterface;
    let tierMoto: TierInterface;
    let tierBike: TierInterface;
    beforeEach(() => {
        tierAuto = new Tier(TierType.Auto);
        tierMoto = new Tier(TierType.Moto);
        tierBike = new Tier(TierType.Bike);
    });
    describe('numberOfFreeSeats()', () => {
        it('should return the number of parking spaces', () => {
            expect.assertions(3);
            expect(tierAuto.numberOfFreeSeats()).toBe(25);
            expect(tierMoto.numberOfFreeSeats()).toBe(50);
            expect(tierBike.numberOfFreeSeats()).toBe(75);
        });
    });
    describe('takePlace()', () => {
        it('should return true', () => {
            expect.assertions(6);
            expect(tierAuto.takePlace()).toBe(true);
            expect(tierAuto.numberOfFreeSeats()).toBe(24);
            expect(tierMoto.takePlace()).toBe(true);
            expect(tierMoto.numberOfFreeSeats()).toBe(49);
            expect(tierBike.takePlace()).toBe(true);
            expect(tierBike.numberOfFreeSeats()).toBe(74);
        });
        it('should return false', () => {
            expect.assertions(3);
            for (let index = 0; index < 25; index++) {
                tierAuto.takePlace();
            }
            for (let index = 0; index < 50; index++) {
                tierMoto.takePlace();
            }
            for (let index = 0; index < 75; index++) {
                tierBike.takePlace();
            }
            expect(tierAuto.takePlace()).not.toBe(true);
            expect(tierMoto.takePlace()).not.toBe(true);
            expect(tierBike.takePlace()).not.toBe(true);
        });
    });
    describe('freeUpSpace()', () => {
        it('should return true', () => {
            expect.assertions(6);
            for (let i = 0; i < 2; i++) {
                tierAuto.takePlace();
                tierMoto.takePlace();
                tierBike.takePlace();
            }
            expect(tierAuto.freeUpSpace()).toBe(true);
            expect(tierAuto.numberOfFreeSeats()).toBe(24);
            expect(tierMoto.freeUpSpace()).toBe(true);
            expect(tierMoto.numberOfFreeSeats()).toBe(49);
            expect(tierBike.freeUpSpace()).toBe(true);
            expect(tierBike.numberOfFreeSeats()).toBe(74);
        });
        it('should return false', () => {
            expect.assertions(3);
            expect(tierAuto.freeUpSpace()).not.toBe(true);
            expect(tierMoto.freeUpSpace()).not.toBe(true);
            expect(tierBike.freeUpSpace()).not.toBe(true);
        });
    });
});