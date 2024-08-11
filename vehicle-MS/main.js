"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var Truck_1 = require("./Truck");
var myCar = new Car_1.Car('Seat', 2011, 'black');
myCar.start();
myCar.openDoor();
myCar.stop();
console.log('------------------');
var myTruck = new Truck_1.Truck('Daihatsu', 2010, 5);
myTruck.loadCargo();
