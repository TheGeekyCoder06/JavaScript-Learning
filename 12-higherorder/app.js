"use strict";

// ============================================================
// 🚀 ARRAY ITERATION METHODS (map, filter, reduce)
// ============================================================

// =======================
// 1. MAP
// =======================
// Applies a function to each element & returns a NEW array
let prices = [100, 200, 300];
let discounted = prices.map(price => price * 0.9);

console.log("Original Prices:", prices);       // 👉 [100, 200, 300]
console.log("Discounted Prices:", discounted); // 👉 [90, 180, 270]

// =======================
// 2. FILTER
// =======================
// Returns a NEW array with elements that match a condition
let ages = [12, 18, 22, 15, 30];
let adults = ages.filter(age => age >= 18);

console.log("All Ages:", ages);   // 👉 [12, 18, 22, 15, 30]
console.log("Adults:", adults);   // 👉 [18, 22, 30]

// =======================
// 3. REDUCE
// =======================
// Reduces array to a single value (sum, product, etc.)
let numbers = [10, 20, 30, 40];
let total = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("Numbers:", numbers); // 👉 [10, 20, 30, 40]
console.log("Sum:", total);       // 👉 100
