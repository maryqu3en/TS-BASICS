"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(model, year) {
        this.model = model;
        this.year = year;
    }
    ;
    Vehicle.prototype.start = function () {
        console.log("this ".concat(this.model, " is starting."));
    };
    Vehicle.prototype.stop = function () {
        console.log("this ".concat(this.model, " is stopping."));
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
