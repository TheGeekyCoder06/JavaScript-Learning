"use strict"

// -------------------- STRING METHODS EXAMPLES -------------------- //

let str = `Hello there`

// Print the string
console.log(str)     
// 👉 Output: Hello there

// Accessing character by index (0-based)
console.log(str[4])  
// 👉 Output: "o" (H=0, e=1, l=2, l=3, o=4)

// Length of the string (includes spaces)
console.log(str.length) 
// 👉 Output: 11

// Prototype (lists all built-in methods available for strings)
console.log(str.__proto__)

// Convert to lowercase
str = str.toLowerCase()
console.log(str)
// 👉 Output: hello there

// Get character at index 5
console.log(str.charAt(5))
// 👉 Output: " " (space at index 5)

// Find first occurrence of a space character
console.log(str.indexOf(' '))
// 👉 Output: 5

// Split string into array of characters
console.log(str.split(''))
// 👉 Output: ["h","e","l","l","o"," ","t","h","e","r","e"]

// Extract substring from index 0 to 4 (end index not included)
const newWord = str.substring(0,4)
console.log(newWord)
// 👉 Output: hell

// -------------------- COMMON STRING METHODS (QUICK REFERENCE) -------------------- //
// str.toUpperCase()   → Convert to uppercase
// str.trim()          → Remove leading/trailing spaces
// str.includes("hi")  → Check if substring exists
// str.replace("old","new") → Replace first match
// str.slice(start,end) → Extract portion of string
// str.repeat(n)       → Repeat the string n times
