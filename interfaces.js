function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" }; // object with properties
printLabel(myObj); // calling function with object that matches interface
function createSquare(config) {
    var newSquare = { color: "white", area: 100 }; // default square
    if (config.color) {
        newSquare.color = config.color; // override color if provided
    }
    if (config.width) {
        newSquare.area = config.width * config.width; // calculate area if width provided
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" }); // creating square with specific color
console.log(mySquare);
