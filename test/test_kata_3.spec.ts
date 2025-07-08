import * as assert from "node:assert";
import { Zergling, Marine } from '../src/3_kata';

describe('can do battle', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine();
        const zergling = new Zergling();
        zergling.run(marine);
        marine.shoot(zergling);

        zergling.attack(marine);
        marine.shoot(zergling);

        assert.equal(zergling.alive(), false)
        assert.equal(marine.alive(), true)
    })
})