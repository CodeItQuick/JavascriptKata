import {assert} from "chai";
import {
    Marine,
    Marine10,
    Marine11,
    Marine12,
    Marine13,
    Marine14,
    Marine15,
    Marine16,
    Marine2,
    Marine3,
    Marine4,
    Marine5,
    Marine6,
    Marine7,
    Marine8,
    Marine9,
    Zealot,
    Zealot10,
    Zealot11,
    Zealot12,
    Zealot13,
    Zealot14,
    Zealot15,
    Zealot16,
    Zealot2,
    Zealot3,
    Zealot4,
    Zealot5,
    Zealot6,
    Zealot7,
    Zealot8,
    Zealot9,
    Zergling,
    Zergling10,
    Zergling11,
    Zergling12,
    Zergling13,
    Zergling14,
    Zergling15,
    Zergling16,
    Zergling2,
    Zergling3,
    Zergling4,
    Zergling5,
    Zergling6,
    Zergling7,
    Zergling8,
    Zergling9
} from "../../src/folder_1/19_kata.js";
import delay from './delay.js';

describe('can do battle eight', () => {
    beforeEach(function(done){
        return setTimeout(() => done(),delay);
    });
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine();
        const zergling = new Zergling();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot();
        const zergling = new Zergling();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot();
        const zergling = new Zergling();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})
describe('can do battle six two', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine2();
        const zergling = new Zergling2();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot2();
        const zergling = new Zergling2();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot2();
        const zergling = new Zergling2();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})
describe('can do battle six three', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine3();
        const zergling = new Zergling3();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot3();
        const zergling = new Zergling3();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot3();
        const zergling = new Zergling3();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})
describe('can do battle six four', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine4();
        const zergling = new Zergling4();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot4();
        const zergling = new Zergling4();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot4();
        const zergling = new Zergling4();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

describe('can do battle six five', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine5();
        const zergling = new Zergling5();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot5();
        const zergling = new Zergling5();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot5();
        const zergling = new Zergling5();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

describe('can do battle six six', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine6();
        const zergling = new Zergling6();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot6();
        const zergling = new Zergling6();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot6();
        const zergling = new Zergling6();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

describe('can do battle six seven', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine7();
        const zergling = new Zergling7();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot7();
        const zergling = new Zergling7();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot7();
        const zergling = new Zergling7();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

describe('can do battle six eight', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine8();
        const zergling = new Zergling8();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot8();
        const zergling = new Zergling8();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot8();
        const zergling = new Zergling8();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

describe('can do battle six nine', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine9();
        const zergling = new Zergling9();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot9();
        const zergling = new Zergling9();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot9();
        const zergling = new Zergling9();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

describe('can do battle six ten', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine10();
        const zergling = new Zergling10();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot10();
        const zergling = new Zergling10();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot10();
        const zergling = new Zergling10();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

describe('can do battle six eleven', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine11();
        const zergling = new Zergling11();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot11();
        const zergling = new Zergling11();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot11();
        const zergling = new Zergling11();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

describe('can do battle six twelve', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine12();
        const zergling = new Zergling12();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot12();
        const zergling = new Zergling12();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot12();
        const zergling = new Zergling12();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

describe('can do battle six thirteen', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine13();
        const zergling = new Zergling13();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot13();
        const zergling = new Zergling13();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot13();
        const zergling = new Zergling13();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

describe('can do battle six fourteen', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine14();
        const zergling = new Zergling14();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot14();
        const zergling = new Zergling4();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot14();
        const zergling = new Zergling14();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

describe('can do battle six fifteen', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine15();
        const zergling = new Zergling15();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot15();
        const zergling = new Zergling15();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot15();
        const zergling = new Zergling15();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

describe('can do battle six sixteen', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new Marine16();
        const zergling = new Zergling16();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new Zealot16();
        const zergling = new Zergling16();
        zergling.run(zealot);
        zealot.claw(zergling);

        zergling.attack(zealot);
        zealot.claw(zergling);

        assert.equal(zealot.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot16();
        const zergling = new Zergling16();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})

