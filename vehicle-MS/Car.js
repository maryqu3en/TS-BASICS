"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var CVehicle_1 = require("./CVehicle");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, year, color) {
        var _this = _super.call(this, model, year) || this;
        _this.model = model;
        _this.year = year;
        _this.color = color;
        return _this;
    }
    Car.prototype.openDoor = function () {
        console.log("The door of the ".concat(this.model, " is opening."));
    };
    return Car;
}(CVehicle_1.Vehicle));
exports.Car = Car;
