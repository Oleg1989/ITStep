import { Tier } from "./tier";
import { TierInterface } from "./tier.interface";

describe('Tier', () => {
    let tier: TierInterface;
    beforeEach(() => {
        tier = new Tier({ type: 'auto' });
    });
    describe('numberOfFreeSeats()', () => {
        it('should return the number of parking spaces', () => {
            expect.assertions(1);
            expect(tier.numberOfFreeSeats()).toBe(10);
        });
    });
    describe('takePlace()', () => {
        it('should return true', () => {
            expect.assertions(2);
            expect(tier.takePlace()).toBe(true);
            expect(tier.numberOfFreeSeats()).toBe(9);
        });
        it('should return false', () => {
            expect.assertions(1);
            for (let index = 0; index < 10; index++) {
                tier.takePlace();
            }
            expect(tier.takePlace()).not.toBe(true);
        });
    });
    describe('freeUpSpace()', () => {
        it('should return true', () => {
            expect.assertions(2);
            tier.takePlace();
            tier.takePlace();
            expect(tier.freeUpSpace()).toBe(true);
            expect(tier.numberOfFreeSeats()).toBe(9);
        });
        it('should return false', () => {
            expect.assertions(1);
            expect(tier.freeUpSpace()).not.toBe(true);
        });
    });
});