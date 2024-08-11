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
exports.Truck = void 0;
var CVehicle_1 = require("./CVehicle");
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(model, year, cargoCapacity) {
        var _this = _super.call(this, model, year) || this;
        _this.model = model;
        _this.year = year;
        _this.cargoCapacity = cargoCapacity;
        return _this;
    }
    Truck.prototype.loadCargo = function () {
        console.log("This ".concat(this.model, " can load up to ").concat(this.cargoCapacity, " tons of cargo."));
    };
    return Truck;
}(CVehicle_1.Vehicle));
exports.Truck = Truck;
