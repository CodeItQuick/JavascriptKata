import IUnit from "./iunit.js";

export class Zergling implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling2 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine2 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot2 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling3 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine3 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot3 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling4 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine4 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot4 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling5 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine5 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot5 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling6 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine6 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot6 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling7 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine7 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot7 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling8 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine8 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot8 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling9 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine9 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot9 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling10 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine10 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot10 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling11 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine11 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot11 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling12 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine12 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot12 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling13 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine13 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot13 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling14 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine14 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot14 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling15 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine15 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot15 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}
export class Zergling16 implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Marine16 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot16 implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        return "not full";
    }
}