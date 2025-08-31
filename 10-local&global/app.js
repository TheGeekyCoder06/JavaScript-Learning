"use strict";

// ============================================================= //
//                     GLOBAL vs LOCAL SCOPE                     //
// ============================================================= //


// -------------------- 1. GLOBAL SCOPE -------------------- //
// Variables declared outside functions/blocks are global

let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // 👉 Accessible here
}
showGlobal();
console.log(globalVar); // 👉 Accessible everywhere


// -------------------- 2. LOCAL (FUNCTION) SCOPE -------------------- //
// Variables declared inside a function are local

function localScopeExample() {
  let localVar = "I am local";
  console.log(localVar); // 👉 Works inside
}
localScopeExample();
// console.log(localVar); // ❌ ReferenceError (not accessible outside)


// -------------------- 3. BLOCK SCOPE (let/const) -------------------- //
// `let` and `const` are block scoped, but `var` is NOT

{
  let blockLet = "inside block";
  const blockConst = "inside block";
  var blockVar = "function/global scoped";
  console.log(blockLet);   // 👉 inside block
  console.log(blockConst); // 👉 inside block
}

console.log(blockVar); // 👉 works outside (var leaks out)
// console.log(blockLet);  // ❌ Error
// console.log(blockConst); // ❌ Error


// -------------------- 4. SHADOWING -------------------- //
// Local variables can "shadow" global ones

let fruit = "Apple";

function shadowExample() {
  let fruit = "Mango"; // shadows global fruit
  console.log("Inside function:", fruit);
}

shadowExample(); // 👉 Mango
console.log("Outside function:", fruit); // 👉 Apple


// -------------------- 5. NESTED SCOPE (LEXICAL SCOPE) -------------------- //
// Inner function can access outer variables (closure concept)

function outer() {
  let outerVar = "Outer value";
  function inner() {
    console.log(outerVar); // 👉 Accessible
  }
  inner();
}
outer();


// -------------------- 6. GLOBAL OBJECT -------------------- //
// In browsers → global = window, in Node.js → global

var x = 10;
console.log(window.x); // 👉 Works (because var attaches to global object)

// But `let` and `const` do NOT attach to window
let y = 20;
console.log(window.y); // 👉 undefined


// ============================================================= //
//          END OF GLOBAL vs LOCAL SCOPE CHEAT SHEET             //
// ============================================================= //

"use strict";

// ============================================================= //
//                          HOISTING                             //
// ============================================================= //


// -------------------- 1. VAR HOISTING -------------------- //
// `var` declarations are hoisted to the top and initialized as `undefined`

console.log(a); // 👉 undefined (not error, because `a` is hoisted)
var a = 10;
console.log(a); // 👉 10


// -------------------- 2. LET & CONST HOISTING -------------------- //
// `let` and `const` are also hoisted BUT they are in a "Temporal Dead Zone" (TDZ)
// They cannot be accessed before declaration

// console.log(b); // ❌ ReferenceError (in TDZ)
let b = 20;

const c = 30;
// console.log(c); // ❌ ReferenceError if placed before declaration


// -------------------- 3. FUNCTION DECLARATION HOISTING -------------------- //
// Function declarations are hoisted completely (definition + body)
// So you can call them before they appear in code

greet(); // 👉 "Hello from function declaration"

function greet() {
  console.log("Hello from function declaration");
}


// -------------------- 4. FUNCTION EXPRESSION HOISTING -------------------- //
// Function expressions behave like variables
// So they are hoisted as `undefined` if declared with var
// Or TDZ error if declared with let/const

// console.log(sayHi);   // 👉 undefined (since var is hoisted)
// sayHi();              // ❌ TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi from function expression");
};
sayHi(); // 👉 Works here


// console.log(sayHello); // ❌ ReferenceError (TDZ with let)
let sayHello = function () {
  console.log("Hello with let");
};
sayHello(); // 👉 Works after declaration


// -------------------- 5. ARROW FUNCTION HOISTING -------------------- //
// Arrow functions also follow variable rules (like function expressions)

// console.log(arrowFn); // ❌ ReferenceError if let/const, undefined if var
const arrowFn = () => console.log("Arrow function called");
arrowFn(); // 👉 Works after declaration

// ============================================================= //
//          END OF HOISTING CHEAT SHEET                          //
// ============================================================= //

const person = {
  name: "Harshith",
  regularFn: function () {
    console.log("regularFn this:", this.name);
  },
  arrowFn: () => {
    console.log("arrowFn this:", this.name);
  },
};
console.log((num1,num2) => num1 + num2)
person.regularFn(); // 👉 "Harshith"
person.arrowFn();   // 👉 undefined (arrow took "this" from outside)
