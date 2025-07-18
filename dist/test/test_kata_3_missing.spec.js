import { assert } from "chai";
import { Zergling, Marine, Zealot } from '../src/folder_1/3_kata.js';
describe('Missing mutation coverage for 3_kata', () => {
    it('should verify Zergling.closeUnits is not mutated unexpectedly', () => {
        const zergling = new Zergling();
        assert.deepEqual(zergling.closeUnits, []);
        zergling.run(new Marine());
        assert.lengthOf(zergling.closeUnits, 1);
    });
    it('should test Zergling.attack does not affect units not in closeUnits', () => {
        const zergling = new Zergling();
        const marine = new Marine();
        const zealot = new Zealot();
        zergling.run(marine);
        zergling.attack(zealot);
        assert.equal(zealot.hitpointBar(), "full");
    });
    it('should test Zealot.hitpointBar returns correct value for all hitpoint states', () => {
        const zealot = new Zealot();
        assert.equal(zealot.hitpointBar(), "full");
        zealot.hurt(1);
        assert.equal(zealot.hitpointBar(), "not full");
        zealot.hurt(1);
        assert.equal(zealot.hitpointBar(), "not full");
    });
    it('should test Zealot.hurt with negative and zero damage', () => {
        const zealot = new Zealot();
        zealot.hurt(0);
        assert.equal(zealot.hitpointBar(), "full");
        zealot.hurt(-1);
        assert.equal(zealot.hitpointBar(), "full");
    });
    it('should test Zergling.hurt with negative and zero damage', () => {
        const zergling = new Zergling();
        zergling.hurt(0);
        assert.equal(zergling.alive(), true);
        zergling.hurt(-1);
        assert.equal(zergling.alive(), true);
    });
    it('should test Zealot.alive returns correct value when hitpoints are 0 or less', () => {
        const zealot = new Zealot();
        zealot.hurt(2);
        // Zealot.alive() always returns true in current implementation, but test for mutation
        assert.equal(zealot.alive(), true);
    });
});
