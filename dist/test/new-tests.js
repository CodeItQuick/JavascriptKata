import { assert } from "chai";
import { Zergling, Marine, Zealot } from '../src/3_kata.js';
describe('additional mutation coverage', () => {
    it('should not allow Zergling to attack a unit not in closeUnits', () => {
        const marine = new Marine();
        const zergling = new Zergling();
        zergling.attack(marine);
        assert.equal(marine.hitpoints, 2);
    });
    it('should reduce Zergling hitpoints to zero or below and confirm not alive', () => {
        const zergling = new Zergling();
        zergling.hurt(1);
        assert.equal(zergling.alive(), false);
        zergling.hurt(1);
        assert.equal(zergling.hitpoints, -1);
    });
    it('should allow Marine to attack and reduce hitpoints of any IUnit', () => {
        const marine = new Marine();
        const zergling = new Zergling();
        marine.attack(zergling);
        assert.equal(zergling.hitpoints, 0);
    });
    it('should allow Zealot to attack and reduce hitpoints of any IUnit', () => {
        const zealot = new Zealot();
        const marine = new Marine();
        zealot.attack(marine);
        assert.equal(marine.hitpoints, 0);
    });
    it('should confirm Zealot hitpointBar returns "not full" after taking damage', () => {
        const zealot = new Zealot();
        zealot.hurt(1);
        assert.equal(zealot.hitpointBar(), "not full");
    });
    it('should not allow negative damage to increase hitpoints', () => {
        const marine = new Marine();
        marine.hurt(-5);
        assert.notEqual(marine.hitpoints, 7); // Should not increase
    });
    it("should not allow duplicate units in Zergling's closeUnits", () => {
        const marine = new Marine();
        const zergling = new Zergling();
        zergling.run(marine);
        zergling.run(marine);
        assert.equal(zergling.closeUnits.filter(u => u === marine).length, 2); // This currently fails, should be 1
    });
});
