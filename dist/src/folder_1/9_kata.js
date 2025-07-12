export class Zergling {
    hitpoints = 1;
    closeUnits = [];
    attack(unit) {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }
    alive() {
        return this.hitpoints > 0;
    }
    run(unit) {
        this.closeUnits.push(unit);
    }
    hurt(damage) {
        this.hitpoints -= damage;
    }
}
export class Marine {
    hitpoints = 2;
    attack(unit) {
        this.shoot(unit);
    }
    alive() {
        return true;
    }
    shoot(unit) {
        unit.hurt(1);
    }
    hurt(damage) {
        this.hitpoints -= damage;
    }
}
export class Zealot {
    hitpoints = 2;
    attack(unit) {
        this.claw(unit);
    }
    alive() {
        return true;
    }
    claw(unit) {
        unit.hurt(2);
    }
    hurt(damage) {
        this.hitpoints -= damage;
    }
    hitpointBar() {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
