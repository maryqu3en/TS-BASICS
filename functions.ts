// functions in TypeScript
function greet(name: string): string { // function with parameters and return type
    return `Hello, ${name}!`;
}
let greetMe: string = greet('Mary');
console.log(greetMe);


function add(x: number, y: number): number {
    return x + y;
}
let myAdd = function (x: number, y: number): number { return x + y; }; // function expression
let myAdd2: (x: number, y: number) => number = function (x, y) { return x + y; }; // function type for variable


function buildName(firstName: string, lastName?: string): string { // optional parameter
    if (lastName) return `${firstName} ${lastName}`;
    return firstName;
}
let result1 = buildName('Mary');
console.log(result1);
let result2 = buildName('Mary', 'Soubih');
console.log(result2);

let greetAgain: (name: string) => void = function (name: string) {
    console.log(`Hello, ${name}!`);
}
greetAgain('Mary');

