"use strict";

// ============================================================
// 🚀 EXECUTION CONTEXT IN JAVASCRIPT
// ============================================================
//
// 👉 Execution Context is the environment in which JavaScript code is executed.
//    It has two phases:
//    1. Creation Phase
//       - Memory is allocated for variables & functions
//       - Variables get `undefined` (hoisting)
//       - Functions get the full definition
//    2. Execution Phase
//       - Code runs line by line
//       - Variables are assigned real values
//
// There are 2 types:
//    1. Global Execution Context (GEC) -> created when the file first runs
//    2. Function Execution Context (FEC) -> created each time a function is invoked
//
// ============================================================


// =======================
// 1. GLOBAL EXECUTION CONTEXT
// =======================
console.log("👉 Program starts - Global Execution Context created");

var x = 10;
let y = 20;

function add(a, b) {
  return a + b;
}

console.log("x:", x); // 10
console.log("y:", y); // 20
console.log("add(2,3):", add(2, 3)); // 5


// =======================
// 2. FUNCTION EXECUTION CONTEXT
// =======================
// Each time a function is invoked, a new Execution Context is created
function multiply(p, q) {
  console.log("Inside multiply function");
  let result = p * q;
  return result;
}

let output = multiply(4, 5);
console.log("multiply(4,5):", output);


// =======================
// 3. HOISTING EXAMPLE
// =======================
// 👉 In Creation Phase: 
// - Variables declared with `var` are hoisted with value `undefined`
// - Functions are hoisted with their full body
// - `let` & `const` are hoisted but in Temporal Dead Zone (TDZ)

console.log("value of hoistedVar before declaration:", hoistedVar); 
// 👉 undefined (due to var hoisting)

var hoistedVar = "Now assigned";

try {
  console.log(hoistedLet); // ❌ ReferenceError (TDZ)
} catch (error) {
  console.log("Accessing hoistedLet before declaration:", error.message);
}

let hoistedLet = "Declared with let";

hoistedFunc(); // ✅ Works because functions are hoisted
function hoistedFunc() {
  console.log("I am hoisted!");
}


// =======================
// 4. CALL STACK & EXECUTION CONTEXT
// =======================
// Call Stack keeps track of execution contexts
function first() {
  console.log("Inside first()");
  second();
}

function second() {
  console.log("Inside second()");
  third();
}

function third() {
  console.log("Inside third()");
}

first(); 
// 👉 Call Stack sequence: GEC -> first() -> second() -> third() -> pop back


// =======================
// 5. EXECUTION CONTEXT CLEANUP
// =======================
// When a function finishes execution, its execution context is destroyed 
// (popped off the Call Stack), freeing memory.

function temporary() {
  let temp = "I live only inside this function!";
  console.log(temp);
}
temporary();
// After execution -> `temporary()` context is removed from stack
