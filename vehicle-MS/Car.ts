import { Vehicle } from './CVehicle';

export class Car extends Vehicle {
    constructor(public model: string, public year: number, public color: string){
        super(model, year);
    }

    openDoor(): void{
        console.log(`The door of the ${this.model} is opening.`);
    }
}