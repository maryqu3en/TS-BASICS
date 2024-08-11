export interface Shape {
    area(): number;
}

export class Circle implements Shape {
    constructor(private radius: number) { }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

export class Rectangle implements Shape {
    constructor(private width: number, private height: number) { }

    area(): number {
        return this.width * this.height;
    }
}
