"use strict";

/**
 * ============================================================
 *  innerText vs textContent vs innerHTML in JavaScript
 * ============================================================
 *
 * 1. innerText
 *    - Returns ONLY the visible text (respects CSS).
 *    - Ignores hidden text (e.g., display:none, visibility:hidden).
 *    - Triggers reflow (slower).
 *
 * 2. textContent
 *    - Returns ALL text inside the element (ignores CSS visibility).
 *    - Does NOT include HTML tags (raw text only).
 *    - Faster (does not trigger reflow).
 *
 * 3. innerHTML
 *    - Returns the full markup + text inside the element.
 *    - Includes HTML tags.
 *    - Can set/insert HTML dynamically (⚠️ risk of XSS if user input is used).
 *
 * ------------------------------------------------------------
 * Example Setup (HTML):
 *
 * <div id="demo">
 *   Hello <b>World</b>
 *   <span style="display:none">Hidden</span>
 * </div>
 * ------------------------------------------------------------
 */

const demo = document.getElementById("demo");

// =======================
// innerText
// =======================
console.log("innerText:", demo.innerText);
// 👉 Output: "Hello World"
// (ignores <span> because it's hidden with display:none)

// =======================
// textContent
// =======================
console.log("textContent:", demo.textContent);
// 👉 Output: "Hello World Hidden"
// (includes hidden text, ignores styling)

// =======================
// innerHTML
// =======================
console.log("innerHTML:", demo.innerHTML);
// 👉 Output: "Hello <b>World</b>\n  <span style="display:none">Hidden</span>"
// (includes tags + text)
