"use strict";

// ============================================================= //
//                     OBJECTS IN JAVASCRIPT                     //
// ============================================================= //

// -------------------- 1. CREATING OBJECTS -------------------- //

let user = {
  name: "Harshith",
  age: 19,
  country: "India"
};

console.log(user.name);  // 👉 Harshith
console.log(user["age"]); // 👉 19

// Add property
user.hobby = "Coding";
console.log(user);

// Delete property
delete user.country;
console.log(user);

// Method inside object
let person = {
  firstName: "Alice",
  greet: function() {
    console.log("Hello, " + this.firstName);
  }
};
person.greet(); // 👉 Hello, Alice


// -------------------- 2. OBJECT METHODS -------------------- //

console.log(Object.keys(user));   // 👉 [ 'name', 'age', 'hobby' ]
console.log(Object.values(user)); // 👉 [ 'Harshith', 19, 'Coding' ]
console.log(Object.entries(user));// 👉 [ ['name','Harshith'], ['age',19], ['hobby','Coding'] ]


// -------------------- 3. NESTED OBJECTS -------------------- //

let student = {
  id: 101,
  details: {
    fullName: "Alice",
    address: {
      city: "Bangalore",
      pin: 560001
    }
  }
};
console.log(student.details.address.city); // 👉 Bangalore


// -------------------- 4. SHALLOW vs DEEP COPY -------------------- //

let original = { a: 1, b: { c: 2 } };

// Shallow Copy (spread operator)
let shallowCopy = { ...original };
shallowCopy.b.c = 99;
console.log(original.b.c); // 👉 99 (still affected!)

// Deep Copy (JSON method)
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 100;
console.log(original.b.c); // 👉 99 (not affected)


// -------------------- 5. SPREAD & REST -------------------- //

let obj1 = { x: 1, y: 2 };
let obj2 = { y: 3, z: 4 };

// Spread (merge objects)
let merged = { ...obj1, ...obj2 };
console.log(merged); // 👉 { x: 1, y: 3, z: 4 }

// Rest (collect remaining properties)
let { x, ...rest } = obj1;
console.log(x);    // 👉 1
console.log(rest); // 👉 { y: 2 }


// -------------------- 6. PROTOTYPE & INHERITANCE -------------------- //

let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

let dog = {
  bark: true
};

dog.__proto__ = animal; // Inherit from animal
console.log(dog.eats);  // 👉 true
dog.walk();             // 👉 Animal walks


// -------------------- 7. OPTIONAL CHAINING (?.) -------------------- //

let apiResponse = {
  status: "success",
  data: {
    id: 501,
    username: "TheGeekyCoder"
  }
};

// Safe access
console.log(apiResponse?.data?.username); // 👉 "TheGeekyCoder"
console.log(apiResponse?.info?.email);    // 👉 undefined (no error)


// -------------------- 8. NULLISH COALESCING (??) -------------------- //
// (Pairs well with optional chaining)

let userAge = null;
let defaultAge = 18;

console.log(userAge ?? defaultAge); // 👉 18 (uses default since userAge is null)

let zeroValue = 0;
console.log(zeroValue ?? 100); // 👉 0 (0 is NOT null/undefined)


// -------------------- 9. IMMUTABILITY HELPERS -------------------- //

// Object.freeze() → prevents adding/removing/changing properties
let frozenObj = { lang: "JS" };
Object.freeze(frozenObj);
frozenObj.lang = "Python"; 
console.log(frozenObj.lang); // 👉 "JS" (unchanged)

// Object.seal() → prevents adding/removing, but allows changing existing values
let sealedObj = { framework: "React" };
Object.seal(sealedObj);
sealedObj.framework = "Vue";
sealedObj.newProp = "Angular"; // not added
console.log(sealedObj); // 👉 { framework: "Vue" }


// -------------------- 10. OBJECT DESTRUCTURING -------------------- //

let employee = {
  name: "Bob",
  role: "Developer",
  location: "Remote"
};

// Basic destructuring
let { name, role } = employee;
console.log(name); // 👉 Bob
console.log(role); // 👉 Developer

// Renaming variables
let { location: workLocation } = employee;
console.log(workLocation); // 👉 Remote

// Default values
let { hobby = "Gaming" } = employee;
console.log(hobby); // 👉 Gaming

// Nested destructuring
let manager = {
  id: 1,
  details: {
    fullName: "Clara",
    dept: { team: "Engineering" }
  }
};
let { details: { fullName, dept: { team } } } = manager;
console.log(fullName); // 👉 Clara
console.log(team);     // 👉 Engineering

// Function parameter destructuring
function printEmployee({ name, role }) {
  console.log(`${name} works as a ${role}`);
}
printEmployee(employee); // 👉 Bob works as a Developer

// Rest operator in destructuring
let { name: empName, ...otherDetails } = employee;
console.log(empName);      // 👉 Bob
console.log(otherDetails); // 👉 { role: "Developer", location: "Remote" }


// ============================================================= //
//              END OF OBJECTS CHEAT SHEET                        //
// ============================================================= //
