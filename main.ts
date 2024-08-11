import { Shape, Circle, Rectangle } from './shapes';

function calculateArea(shape: Shape): void {
  console.log(`Area: ${shape.area()}`);
}

let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);

calculateArea(circle);
calculateArea(rectangle);
