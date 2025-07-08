interface IUnit {
    attack(unit: IUnit): void;
    alive(): boolean
}
export class Zergling implements IUnit {
    attack(unit: IUnit): void {

    }

    alive(): boolean {
        return false;
    }

    run(unit: IUnit): void {

    }
}
export class Marine implements IUnit {
    attack(unit: IUnit): void {

    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {

    }
}
export class Zealot implements IUnit {
    attack(unit: IUnit): void {

    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {

    }
}