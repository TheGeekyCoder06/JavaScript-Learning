// -------------------- ARRAY CREATION -------------------- //
let arr = [10, 20, 30, 40, 50];
console.log(arr);  
// 👉 [10, 20, 30, 40, 50]


// -------------------- COMMON ARRAY METHODS -------------------- //

// Length of array
console.log(arr.length);   // 👉 5

// Accessing elements
console.log(arr[0]);       // 👉 10
console.log(arr[arr.length - 1]); // 👉 50


// -------------------- ADD/REMOVE ELEMENTS -------------------- //
arr.push(60);       // Add to end
console.log(arr);   // 👉 [10, 20, 30, 40, 50, 60]

arr.pop();          // Remove from end
console.log(arr);   // 👉 [10, 20, 30, 40, 50]

arr.unshift(5);     // Add to beginning
console.log(arr);   // 👉 [5, 10, 20, 30, 40, 50]

arr.shift();        // Remove from beginning
console.log(arr);   // 👉 [10, 20, 30, 40, 50]


// -------------------- SEARCHING -------------------- //
console.log(arr.indexOf(30));   // 👉 2
console.log(arr.includes(40));  // 👉 true


// -------------------- SLICING & SPLICING -------------------- //
console.log(arr.slice(1, 3));   // 👉 [20, 30]  (non-destructive)

arr.splice(2, 1, 99);           // Remove 1 element at index 2, insert 99
console.log(arr);               // 👉 [10, 20, 99, 40, 50]


// -------------------- ITERATION METHODS -------------------- //
arr.forEach((num) => console.log(num * 2));  
// 👉 20, 40, 198, 80, 100

let squared = arr.map(num => num ** 2);
console.log(squared);  
// 👉 [100, 400, 9801, 1600, 2500]

let evens = arr.filter(num => num % 2 === 0);
console.log(evens);  
// 👉 [10, 20, 40, 50]

let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  
// 👉 219

console.log(arr.some(num => num > 100));  // 👉 true
console.log(arr.every(num => num > 0));   // 👉 true


// -------------------- JOINING & CONVERTING -------------------- //
console.log(arr.join("-"));  
// 👉 "10-20-99-40-50"

console.log("Split Example".split(" "));  
// 👉 ["Split", "Example"]


// -------------------- SORTING & REVERSING -------------------- //
let nums = [4, 2, 10, 1, 5];
nums.sort((a, b) => a - b);   // Ascending
console.log(nums);            // 👉 [1, 2, 4, 5, 10]

nums.reverse();               // Reverse order
console.log(nums);            // 👉 [10, 5, 4, 2, 1]


// -------------------- FLATTENING -------------------- //
let nested = [1, [2, [3, [4]]]];
console.log(nested.flat(1));   // 👉 [1, 2, [3, [4]]]
console.log(nested.flat(2));   // 👉 [1, 2, 3, [4]]
console.log(nested.flat(Infinity)); // 👉 [1, 2, 3, 4]


// -------------------- SHALLOW COPY -------------------- //
// Shallow copy = only top-level elements copied, nested objects still linked

let shallow1 = arr.slice();    // Method 1
let shallow2 = [...arr];       // Method 2 (spread operator)

shallow1[0] = 999;
console.log(arr[0]);      // 👉 Still 10 (not affected)

// But if array has objects:
let objArr = [{a:1}, {b:2}];
let shallowCopy = [...objArr];
shallowCopy[0].a = 100;
console.log(objArr[0].a);   // 👉 100 (linked!)

// -------------------- DEEP COPY -------------------- //
// Deep copy = nested objects are also cloned (no link)

// Method 1: JSON trick (works only with JSON-safe data)
let deepCopy1 = JSON.parse(JSON.stringify(objArr));
deepCopy1[0].a = 200;
console.log(objArr[0].a);   // 👉 100 (original unaffected)

// Method 2: structuredClone (modern JS, safer)
let deepCopy2 = structuredClone(objArr);
deepCopy2[1].b = 300;
console.log(objArr[1].b);   // 👉 2 (original unaffected)
