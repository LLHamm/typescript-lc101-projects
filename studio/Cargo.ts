import { Payload } from "./Payload";

export class Cargo implements Payload {
    massKg: number;
    material: string;

    // CONSTRUCTOR
    constructor(masskg: number, material: string) {
        this.massKg = masskg;
        this.material = material;
    }
}

