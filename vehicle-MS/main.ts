import { Car } from './Car';
import { Truck } from './Truck';

let myCar = new Car('Seat', 2011, 'black');

myCar.start();
myCar.openDoor();
myCar.stop();

console.log('------------------');

let myTruck = new Truck('Daihatsu', 2010, 5);

myTruck.loadCargo();