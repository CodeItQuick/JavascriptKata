import { assert } from "chai";
import { Zergling, Marine, Zealot } from '../../src/folder_1/3_kata.js';
import delay from "./delay.js";
describe('can do battle', () => {
    beforeEach(function(done){
        return setTimeout(() => done(), delay);
    });
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine();
        const zergling = new Zergling();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);
        marine.shoot(zergling);
        assert.equal(marine.alive(), true);
        assert.equal(zergling.alive(), false);
    });
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot();
        const zergling = new Zergling();
        zergling.run(zealot);
        zealot.claw(zergling);
        zergling.attack(zealot);
        zealot.claw(zergling);
        assert.equal(zealot.alive(), true);
    });
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot();
        const zergling = new Zergling();
        zergling.attack(zealot);
        assert.equal(zealot.hitpointBar(), "full");
    });
    it('should verify Zergling closeUnits is initialized as empty array', () => {
        const zergling = new Zergling();
        assert.isArray(zergling.closeUnits);
        assert.lengthOf(zergling.closeUnits, 0);
    });
    it('should test Zergling.alive() returns false when hitpoints are 0 or less', () => {
        const zergling = new Zergling();
        zergling.hurt(1);
        assert.equal(zergling.alive(), false);
        zergling.hurt(1);
        assert.equal(zergling.alive(), false);
    });
    it('should test Marine.alive() always returns true (even if hitpoints are 0)', () => {
        const marine = new Marine();
        marine.hurt(2);
        assert.equal(marine.alive(), true);
    });
    it('should test hurt method for negative and zero damage', () => {
        const zergling = new Zergling();
        zergling.hurt(0);
        assert.equal(zergling.hitpoints, 1);
        zergling.hurt(-1);
        assert.equal(zergling.hitpoints, 2);
    });
    it('should test Zergling cannot attack if closeUnits is empty', () => {
        const marine = new Marine();
        const zergling = new Zergling();
        zergling.attack(marine);
        assert.equal(marine.hitpoints, 2);
    });
    it('should test Marine attack does not affect already dead units', () => {
        const marine = new Marine();
        const zergling = new Zergling();
        zergling.hurt(1);
        marine.attack(zergling);
        assert.equal(zergling.hitpoints, 0);
    });
});
