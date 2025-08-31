"use strict";

// ============================================================= //
//                     FUNCTIONS IN JAVASCRIPT                   //
// ============================================================= //


// -------------------- 1. FUNCTION BASICS -------------------- //

// Function Declaration
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Harshith")); // 👉 Hello, Harshith

// Function Expression
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 👉 5

// Arrow Function (concise syntax)
const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // 👉 20


// -------------------- 2. PARAMETERS & RETURN -------------------- //

// Default Parameters
function welcome(user = "Guest") {
  return `Welcome, ${user}`;
}
console.log(welcome()); // 👉 Welcome, Guest

// Rest Parameters (collects remaining args into array)
function sumAll(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 👉 10

// Spread with functions
function maxNum(a, b, c) {
  return Math.max(a, b, c);
}
let numbers = [4, 9, 1];
console.log(maxNum(...numbers)); // 👉 9


// -------------------- 3. FUNCTION SCOPE -------------------- //

let globalVar = "Global";

function testScope() {
  let localVar = "Local";
  console.log(globalVar); // 👉 accessible
  console.log(localVar);  // 👉 accessible
}
testScope();
// console.log(localVar); // ❌ ReferenceError


// -------------------- 4. HOISTING -------------------- //

// Function declarations are hoisted
sayHi();
function sayHi() {
  console.log("Hi, I am hoisted!");
}

// Function expressions are NOT hoisted
// sayHello(); // ❌ Error
const sayHello = function () {
  console.log("Hello!");
};


// -------------------- 5. CALLBACK FUNCTIONS -------------------- //

function processUserInput(callback) {
  let name = "Alice";
  callback(name);
}
processUserInput((n) => console.log("User is " + n));


// -------------------- 6. HIGHER-ORDER FUNCTIONS -------------------- //
// (Functions that take other functions as arguments or return them)

function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log(applyOperation(5, 3, (x, y) => x + y)); // 👉 8


// -------------------- 7.  IIFE (Immediately Invoked Function Exp) -------------------- //

(function () {
  console.log("IIFE executed immediately!");
})();


// -------------------- 8. CLOSURES -------------------- //
// (Function remembers variables from its outer scope)

function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  };
}
const inc = outer();
console.log(inc()); // 👉 1
console.log(inc()); // 👉 2


// -------------------- 9. PURE vs IMPURE FUNCTIONS -------------------- //

function pureAdd(a, b) {
  return a + b; // No side effects
}

let total = 0;
function impureAdd(a) {
  total += a; // Side effect (modifies external var)
  return total;
}

console.log(pureAdd(2, 3)); // 👉 5
console.log(impureAdd(5));  // 👉 5
console.log(impureAdd(5));  // 👉 10


// -------------------- 10. FUNCTION METHODS -------------------- //

function introduce(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}

let user = { name: "Harshith" };

introduce.call(user, "Bangalore", "India"); // 👉 Harshith from Bangalore, India
introduce.apply(user, ["Delhi", "India"]);  // 👉 Harshith from Delhi, India

let boundFn = introduce.bind(user);
boundFn("Mumbai", "India"); // 👉 Harshith from Mumbai, India


// -------------------- 11. GENERATOR FUNCTIONS -------------------- //
// (yield values one by one)

function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGen();
console.log(gen.next().value); // 👉 1
console.log(gen.next().value); // 👉 2
console.log(gen.next().value); // 👉 3


// -------------------- 12. ASYNC FUNCTIONS -------------------- //

async function fetchData() {
  return "Data received!";
}
fetchData().then(console.log); // 👉 Data received! 


// ============================================================= //
//              END OF FUNCTIONS CHEAT SHEET                     //
// ============================================================= //
