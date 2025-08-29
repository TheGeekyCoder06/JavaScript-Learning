"use strict";  
// "use strict" makes JavaScript run in strict mode.  
// It helps catch errors early and prevents the use of unsafe practices.  

// -------------------- BASIC OPERATIONS -------------------- //
console.log(3 + 3); // Adds numbers → 6  

// ❌ 'alert()' works only in the browser, not in Node.js.  
// In Node.js we only use console.log() for output.  
// alert(3 + 3);  // This will throw error in Node.js  

// -------------------- SYNTAX ERROR EXAMPLE -------------------- //
// console.log(3+3) console.log(8*8)
// ❌ The above line throws an error because JS expects a semicolon (;)  
// or a new line between two statements. Correct way is:  
// console.log(3+3); console.log(8*8);

// -------------------- DATA TYPES IN JS -------------------- //
// number → integers, decimals, NaN  
// bigint → very large numbers beyond safe integer limit  
// string → text inside quotes ("Hello", 'Hi')  
// boolean → true or false  
// null → special value meaning "empty" or "nothing"  
// undefined → declared but not assigned any value  

// -------------------- typeof OPERATOR -------------------- //
// typeof is used to check the type of a value.  

console.log(typeof 'e');        // string  
console.log(typeof null);       // object (this is a known bug in JS)  
console.log(typeof undefined);  // undefined  
