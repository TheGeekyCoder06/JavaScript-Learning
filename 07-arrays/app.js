// -------------------- ARRAY CHEAT SHEET -------------------- //
// Covers: creation, methods, slice vs splice, prototype, shallow vs deep copy, spread


// -------------------- 1. ARRAY CREATION -------------------- //
let fruits = ["apple", "banana", "mango"];  // simple array
let scores = new Array(10, 20, 30);         // using Array constructor
let emptyArr = [];                          // empty array

console.log(fruits, scores, emptyArr);


// -------------------- 2. COMMON ARRAY METHODS -------------------- //
// push() → add at end
fruits.push("grapes");
console.log(fruits);  // 👉 ["apple", "banana", "mango", "grapes"]

// pop() → remove from end
fruits.pop();
console.log(fruits);  // 👉 ["apple", "banana", "mango"]

// unshift() → add at start
fruits.unshift("orange");
console.log(fruits);  // 👉 ["orange", "apple", "banana", "mango"]

// shift() → remove from start
fruits.shift();
console.log(fruits);  // 👉 ["apple", "banana", "mango"]

// includes()
console.log(fruits.includes("banana"));  // 👉 true

// indexOf()
console.log(fruits.indexOf("mango"));    // 👉 2

// join()
console.log(fruits.join("-"));           // 👉 "apple-banana-mango"


// -------------------- 3. SLICE vs SPLICE -------------------- //
// slice(start, end) → returns shallow copy, does NOT change original
let testScores = [10, 20, 30, 40, 50];
let slicedScores = testScores.slice(1, 4);  
console.log(slicedScores);   // 👉 [20, 30, 40]
console.log(testScores);     // 👉 [10, 20, 30, 40, 50] (unchanged)

// splice(start, deleteCount, items...) → changes original
let splicedScores = testScores.splice(1, 2, 99, 100);
console.log(splicedScores);  // 👉 [20, 30] (removed)
console.log(testScores);     // 👉 [10, 99, 100, 40, 50] (modified)


// -------------------- 4. PROTOTYPE OF ARRAY -------------------- //
Array.prototype.first = function () {
  return this[0];
};

Array.prototype.last = function () {
  return this[this.length - 1];
};

let marks = [5, 10, 15, 20];
console.log(marks.first());  // 👉 5
console.log(marks.last());   // 👉 20


// -------------------- 5. SPREAD OPERATOR -------------------- //
// expands array/object into elements

let moreScores = [0, ...marks, 25];
console.log(moreScores);  
// 👉 [0, 5, 10, 15, 20, 25]

// copy (shallow)
let copyScores = [...marks];
console.log(copyScores);  
// 👉 [5, 10, 15, 20]


// -------------------- 6. SHALLOW vs DEEP COPY -------------------- //
// shallow copy (spread)
let players = [{ name: "A" }, { name: "B" }];
let shallowCopy = [...players];

shallowCopy[0].name = "Changed";
console.log(players[0].name);  
// 👉 "Changed" (reference copied)

// deep copy
let deepCopy = JSON.parse(JSON.stringify(players));
deepCopy[0].name = "Restored";
console.log(players[0].name);  
// 👉 "Changed" (deep copy is independent now)
