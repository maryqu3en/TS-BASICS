// interfaces in TypeScript
interface LabelledValue {
    label: string; // required property
}

function printLabel(labelledObj: LabelledValue) { // function using interface
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" }; // object with properties
printLabel(myObj); // calling function with object that matches interface

interface Square {
    color: string;
    area: number;
}

interface SquareConfig {
    color?: string; // optional property
    width?: number; // optional property
}

function createSquare(config: SquareConfig): Square { // function with interface parameters
    let newSquare = { color: "white", area: 100 }; // default square
    if (config.color) {
        newSquare.color = config.color; // override color if provided
    }
    if (config.width) {
        newSquare.area = config.width * config.width; // calculate area if width provided
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" }); // creating square with specific color
console.log(mySquare);
