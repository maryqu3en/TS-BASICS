"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shapes_1 = require("./shapes");
function calculateArea(shape) {
    console.log("Area: ".concat(shape.area()));
}
var circle = new shapes_1.Circle(5);
var rectangle = new shapes_1.Rectangle(4, 6);
calculateArea(circle);
calculateArea(rectangle);
