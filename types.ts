// basic types in TypeScript
let isDone: boolean = false; // boolean type
let decimal: number = 6; // number type
let color: string = "blue"; // string type
let list: number[] = [1, 2, 3]; // array type with number elements
let x: [string, number] = ["hello", 10]; // tuple type, fixed number of elements with types
enum Color { Red, Green, Blue } // enum type, for named constants
let c: Color = Color.Green; // using enum type
let notSure: any = 4; // any type, can be anything
let u: undefined = undefined; // undefined type
let n: null = null; // null type
let someValue: any = "this is a string"; // any type again
let strLength: number = (someValue as string).length; // type assertions, treating someValue as a string

