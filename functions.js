// functions in TypeScript
function greet(name) {
    return "Hello, ".concat(name, "!");
}
var greetMe = greet('Mary');
console.log(greetMe);
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; }; // function expression
var myAdd2 = function (x, y) { return x + y; }; // function type for variable
function buildName(firstName, lastName) {
    if (lastName)
        return "".concat(firstName, " ").concat(lastName);
    return firstName;
}
var result1 = buildName('Mary');
console.log(result1);
var result2 = buildName('Mary', 'Soubih');
console.log(result2);
var greetAgain = function (name) {
    console.log("Hello, ".concat(name, "!"));
};
greetAgain('Mary');
