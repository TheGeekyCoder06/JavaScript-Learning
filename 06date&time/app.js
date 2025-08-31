// -------------------- DATE CREATION -------------------- //
let myDate = new Date(2025, 1, 11, 15, 45, 30);  
// 👉 11th Feb 2025, 15:45:30 (3:45:30 PM)

console.log(myDate);  
// Example: Tue Feb 11 2025 15:45:30 GMT+0530 (India Standard Time)


// -------------------- GET METHODS (Extract Parts) -------------------- //
console.log(myDate.getFullYear());  // 👉 2025
console.log(myDate.getMonth());     // 👉 1 (February, since Jan = 0)
console.log(myDate.getDate());      // 👉 11 (day of month)
console.log(myDate.getDay());       // 👉 2 (Tuesday, since Sun = 0)
console.log(myDate.getHours());     // 👉 15
console.log(myDate.getMinutes());   // 👉 45
console.log(myDate.getSeconds());   // 👉 30
console.log(myDate.getMilliseconds()); // 👉 0
console.log(myDate.getTime());      // 👉 Timestamp in ms (since Jan 1, 1970)


// -------------------- SET METHODS (Modify Date) -------------------- //
myDate.setFullYear(2030);   // Change year to 2030
myDate.setMonth(5);         // Change to June (0 = Jan → 5 = June)
myDate.setDate(20);         // Change day of month
myDate.setHours(10, 30, 0); // Change time → 10:30:00

console.log(myDate);  
// 👉 Thu Jun 20 2030 10:30:00 GMT+0530 (India Standard Time)


// -------------------- FORMATTING METHODS -------------------- //

// Localized date
console.log(myDate.toDateString());     
// 👉 "Thu Jun 20 2030"

// Localized time
console.log(myDate.toTimeString());     
// 👉 "10:30:00 GMT+0530 (India Standard Time)"

// Full localized date + time
console.log(myDate.toLocaleString("en-IN")); 
// 👉 "20/6/2030, 10:30:00 am"

// Only date
console.log(myDate.toLocaleDateString("en-IN"));  
// 👉 "20/6/2030"

// Only time
console.log(myDate.toLocaleTimeString("en-IN"));  
// 👉 "10:30:00 am"


// -------------------- TIMESTAMPS -------------------- //
console.log(Date.now());             // Current timestamp in ms
console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds

// Convert timestamp back into date
let ts = 1739221800000; // Example timestamp
console.log(new Date(ts).toLocaleString("en-IN")); 
// 👉 "11/2/2025, 12:00:00 am"
