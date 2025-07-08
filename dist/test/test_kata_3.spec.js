import { assert } from "chai";
import { Zergling, Marine, Zealot } from '../src/3_kata.js';
describe('can do battle', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine();
        const zergling = new Zergling();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);
        marine.shoot(zergling);
        assert.equal(marine.alive(), true);
    });
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot();
        const zergling = new Zergling();
        zergling.run(zealot);
        zealot.shoot(zergling);
        zergling.attack(zealot);
        zealot.shoot(zergling);
        assert.equal(zealot.alive(), true);
    });
});
