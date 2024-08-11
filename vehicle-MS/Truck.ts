import { Vehicle } from './CVehicle';

export class Truck extends Vehicle {
    constructor(public model: string, public year: number, public cargoCapacity: number){
        super(model, year);
    }

    loadCargo(): void{
        console.log(`This ${this.model} can load up to ${this.cargoCapacity} tons of cargo.`);
    }
}