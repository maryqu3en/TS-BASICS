// classes in TypeScript
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter;
greeter = new Greeter("world"); // creating an instance of Greeter
console.log(greeter.greet());
var greeterMaker = Greeter; // using class as a type
var greeter2 = new greeterMaker("world"); // creating an instance with the class as a type
console.log(greeter2.greet());
var greeter3 = new Greeter("world"); // another instance of Greeter
console.log(greeter3.greet());
