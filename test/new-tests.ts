import { describe, it } from 'mocha';

describe('additional mutation coverage', () => {
    it('should not allow Zergling to attack a unit not in closeUnits');
    it('should reduce Zergling hitpoints to zero or below and confirm not alive');
    it('should allow Marine to attack and reduce hitpoints of any IUnit');
    it('should allow Zealot to attack and reduce hitpoints of any IUnit');
    it('should confirm Zealot hitpointBar returns "not full" after taking damage');
    it('should not allow negative damage to increase hitpoints');
    it("should not allow duplicate units in Zergling's closeUnits");
});

