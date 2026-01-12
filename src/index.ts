export function sayHelloWorld(world: string) {
  return `Hello ${world}`;
}

// testing the function
console.log(sayHelloWorld("TypeScript"));


// any vs unknown vs actual typing

// any means no type checking and just changing the variable on the fly

let a : any
a = 5
a = "hello"
a = true

// unknown means we don't know the type yet, but we have to do type checking before using it in order 
// to not mess up the types on the long run

let b : unknown
b = 5
b = "hello"

// console.log(b.toUpperCase()) 
// would not work here because b is of unknown type
// vsc warns us beforehand

if (typeof b === "string") {
  console.log(b.toUpperCase())
  // would work here because we did type checking
}

// actual typing means we know the type beforehand and typescript will enforce it

let c : string
c = "hello"
// c = 5 would not work here because c is of type string
// vsc warns us beforehand too in this scenario

console.log(c.toUpperCase())

// what i learnt

// avoid any
// use unknown for third party data like APIsù
// use actual typing whenever possible in order to prevent errors


// Classes vs Interfaces

// classes remain the same on all languages constructor, internal funct and info return

class Adam{
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

}

const myself = new Adam("Adam", 18);
console.log(myself.greet());

// interfaces are used to scheme beforehand

interface AdamInterface {
  name: string;
  age: number;
  greet(): string; // returns a string so no need to change the type here 
}

const AdamInt: AdamInterface = {
  name: "Adam",
  age: 18,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
};

// this interface can be read later on and used to create classes or objects...

// enums also remain the same in Lua and other languages
// just a bunch of constants that you can access whenever u need to state differnt values

enum Color { // u can use them as dictionaries too and store values and mix and match w them
  Red,
  Green,
  Blue
}

const myFavoriteColor: Color = Color.Green;
console.log(`My favorite color is ${Color[myFavoriteColor]}.`);

// used mostly to not repeat strings over and over again or to access items by index or faster 


Color.Red // 0
Color.Green // 1
Color.Blue // 2

// frameworks 

// react and angular

// React basically splits everything in components in order to have your UI separated and then connect everything into one screen. It's a good tool if you like adding code everywhere and want everything to work like you want it but it all comes down to will I use it and is it worth my time to use react rather than other frameworks.


// React does support typescript and if you want to go fullstack you can either use Next.JS or React Router


// AngularJS Is more of a Front-end library / framework, its documentation is bigger as it's bigger than react and it can cause some issues in the long game if you don't fully control

// which one is better? depends on ur knowledge and ur use if u have a business and want a good front end that will catch some nice visits then go for react but if u want everything to be as reliable as possible without losing the good angular view then for sure go ahead and use angularjs or angular

// both support ts

// Best practices JS/TS


// use let and const over var, more reliable scoping

// use === and !== over == and != to avoid type coercion issues

// use arrow functions for better readability and faster coding

// use template literals for string interpolation

// use destructuring for arrays and objects

// use default parameters for functions

/**
 * JSDoc example.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */

