// classes in TypeScript
class Greeter {
    greeting: string; // property declaration
    constructor(message: string) { // constructor
        this.greeting = message;
    }
    greet() { // method
        return "Hello, " + this.greeting;
    }
}
let greeter: Greeter;
greeter = new Greeter("world"); // creating an instance of Greeter
console.log(greeter.greet());
let greeterMaker: typeof Greeter = Greeter; // using class as a type
let greeter2: Greeter = new greeterMaker("world"); // creating an instance with the class as a type
console.log(greeter2.greet());
let greeter3: Greeter = new Greeter("world"); // another instance of Greeter
console.log(greeter3.greet());