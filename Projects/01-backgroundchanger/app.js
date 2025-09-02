
// Select all elements with class "button"
const buttons = document.querySelectorAll(".button");

// Select the <body> element
const body = document.querySelector("body");

// Loop through each color box
buttons.forEach((button) => {
  // Attach click event listener
  button.addEventListener("click", (e) => {
    const color = e.target.id; // get the color name from id
    body.style.backgroundColor = color;
    console.log(`Background changed to: ${color}`);
  });
});
