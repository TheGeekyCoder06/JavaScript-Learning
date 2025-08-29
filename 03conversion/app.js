"use strict";

// -------------------- TYPE CONVERSION EXAMPLES -------------------- //

// Suppose we have a variable containing a string
let score = "123a";  

console.log(typeof score);  
// 👉 Output: string  
// because "123a" is inside quotes → always a string

// Convert string to number using Number()
let value = Number(score);  

console.log(typeof value);  
// 👉 Output: number  
// BUT since "123a" is not a valid number, JavaScript gives NaN (Not a Number)

// Check actual value
console.log(value);  
// 👉 Output: NaN (special type of number that means invalid number)

// -------------------- BOOLEAN CONVERSION RULES -------------------- //
// Any value in JS can be converted to a boolean (true/false)

// Number to Boolean
console.log(Boolean(1));   // true  
console.log(Boolean(0));   // false  

// Empty string vs Non-empty string
console.log(Boolean(""));        // false (empty string is considered false)  
console.log(Boolean("hkhskf"));  // true (non-empty string is considered true)  

// Null and Undefined
console.log(Boolean(null));      // false  
console.log(Boolean(undefined)); // false  

// Special values
console.log(Boolean(NaN));       // false  
console.log(Boolean(" "));       // true (a space is still a character, so non-empty)


// -------------------- OPERATORS & OPERATIONS -------------------- //

// 1. Arithmetic Operators
let a = 10;
let b = 3;
console.log("a + b =", a + b);  // Addition → 13
console.log("a - b =", a - b);  // Subtraction → 7
console.log("a * b =", a * b);  // Multiplication → 30
console.log("a / b =", a / b);  // Division → 3.333...
console.log("a % b =", a % b);  // Modulus (remainder) → 1
console.log("a ** b =", a ** b); // Exponentiation → 10^3 = 1000

// 2. Assignment Operators
let x = 5;
x += 2; // same as x = x + 2
console.log("x after += 2:", x); // 7
x *= 3; // same as x = x * 3
console.log("x after *= 3:", x); // 21

// 3. Comparison Operators
console.log(5 == "5");   // true (only checks value, not type)
console.log(5 === "5");  // false (checks value + type → strict equality)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(7 > 5);      // true
console.log(7 < 5);      // false
console.log(7 >= 7);     // true
console.log(7 <= 5);     // false

// 4. Logical Operators
console.log(true && false); // false (AND → both must be true)
console.log(true || false); // true  (OR → at least one true)
console.log(!true);         // false (NOT → reverses the value)

// 5. String Operators
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // Concatenation → "Hello World"

// 6. Unary Operators
let n = 5;
console.log(+n);   // 5 (unary plus → no change)
console.log(-n);   // -5 (unary minus)

// 7. Increment / Decrement
let count = 0;
console.log(count++); // 0 (post-increment → returns first, then adds 1)
console.log(count);   // 1
console.log(++count); // 2 (pre-increment → adds 1 first, then returns)

// 8. Ternary Operator
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"


// -------------------- TRUTHY vs FALSY VALUES -------------------- //
// In JavaScript, some values are always FALSE when converted to Boolean
// Everything else is TRUTHY

/*
Falsy Values (always false):
1. false
2. 0
3. -0
4. 0n   (BigInt zero)
5. ""   (empty string)
6. null
7. undefined
8. NaN

Truthy Values (always true):
1. true
2. Any non-zero number (e.g., 1, -5, 3.14)
3. Any non-empty string ("hello", " ")
4. Objects {} and Arrays []
5. Functions
6. Infinity and -Infinity
*/
