import { assert } from "chai";
import { Zergling, Marine, Zealot } from '../../src/folder_1/9_kata.js';
describe('can do battle three', () => {
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
});
