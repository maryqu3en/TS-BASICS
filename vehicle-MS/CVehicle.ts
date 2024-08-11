import { IVehicle } from './IVehicle';

export class Vehicle implements IVehicle {
    constructor(public model: string, public year: number) { };

    start(): void {
        console.log(`this ${this.model} is starting.`);
    }

    stop(): void {
        console.log(`this ${this.model} is stopping.`);
    }
}