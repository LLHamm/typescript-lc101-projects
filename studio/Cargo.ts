import { Payload } from "./Payload";

export class Astronaut implements Payload {
    massKg: number;
    material: string;

    // CONSTRUCTOR
    constructor(masskg: number, material: string) {
        this.massKg = masskg;
        this.material = material;
    }
}

