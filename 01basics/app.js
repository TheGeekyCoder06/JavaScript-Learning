
// ✅ Use const when value should not change
const accountId = 12345;   

// ✅ Use let for values that may change later
let accountEmail = 'mharshith200@gmail.com';

// ❌ Avoid using var (function-scoped, can cause bugs)
// Using let instead
let password = "1234%";

// ⚠️ Always declare variables properly (avoid accidental globals)
let accountCity = "Bangalore";

// 📌 Printing values using template literals (backticks)
// \n is used for new lines
console.log(`${accountId} \n${accountEmail} \n${password} \n${accountCity}`);

/*
--------------------------------------------
🔎 Explanation:
1. const → constant, cannot be reassigned.
2. let   → block-scoped, can be reassigned.
3. var   → function-scoped (old JS, avoid).
4. No keyword → creates global variable (bad practice).
5. console.log + template literal → prints values neatly.
--------------------------------------------
✅ Best Practices:
- Use const when value won’t change.
- Use let if value may change.
- Avoid var in modern JS.
- Always declare variables properly.
--------------------------------------------
*/
