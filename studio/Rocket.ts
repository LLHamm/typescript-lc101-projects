import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    // CLASS VARIABLES
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    // Returns the sum of all items using each items massKg property
    sumMass(items: Payload[]): number {
        let totalMass = 0;
        for (let i=0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }
        return totalMass;
    }

    // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    currentMassKg(): number {
        let astronautMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;
    }

    // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    canAdd(item: Payload): boolean {
        let extraItemMass: number = this.currentMassKg() + item.massKg;
        let isTooMuch: boolean = extraItemMass <= this.totalCapacityKg;
        return isTooMuch;
    // OR, return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }

    addCargo(cargo: Cargo): boolean {
    // Uses this.canAdd() to see if another item can be added.
    // If true, adds cargo to this.cargoItems and returns true.
    // If false, returns false.
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    // Uses this.canAdd() to see if another astronaut can be added.
    // If true, adds astronaut to this.astronauts and returns true.
    // If false, returns false.
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
        }
        return false;
    }
}



