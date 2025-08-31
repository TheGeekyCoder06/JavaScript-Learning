"use strict";

// ============================================================
// 🚀 CONDITIONAL & ITERATIVE CONSTRUCTS IN JAVASCRIPT
// ============================================================

// =======================
// 1. IF / ELSE
// =======================
// Basic decision making
let age = 20;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// =======================
// 2. ELSE IF LADDER
// =======================
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// =======================
// 3. TERNARY OPERATOR (?:)
// =======================
// Shorthand for if-else
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can Vote:", canVote); // 👉 "Yes"

// =======================
// 4. SWITCH CASE
// =======================
// Cleaner alternative for multiple else-if
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}

// =======================
// 5. FOR LOOP
// =======================
// Used when you know how many times to run
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Iteration:", i);
}

// =======================
// 6. WHILE LOOP
// =======================
// Runs as long as condition is true
let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count);
  count++;
}

// =======================
// 7. DO-WHILE LOOP
// =======================
// Executes at least once before checking condition
let num = 5;
do {
  console.log("Do-While Number:", num);
  num--;
} while (num > 0);

// =======================
// 8. FOR...OF LOOP
// =======================
// Used for iterating over values of arrays/iterables
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log("For...of Color:", color);
}

// =======================
// 9. FOR...IN LOOP
// =======================
// Used for iterating over object keys
let student = {
  name: "Harshith",
  age: 19,
  course: "CS",
};

for (let key in student) {
  console.log(`For...in -> ${key}: ${student[key]}`);
}

// =======================
// 10. BREAK & CONTINUE
// =======================
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Breaking at", i);
    break; // exits loop
  }
  console.log("Iteration:", i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 2) {
    console.log("Skipping", i);
    continue; // skips iteration
  }
  console.log("Iteration after continue:", i);
}
