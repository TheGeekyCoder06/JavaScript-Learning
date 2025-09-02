// Select elements
const form = document.querySelector("form");
const results = document.querySelector("#results");

// Add event listener on form submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const height = parseInt(document.querySelector("#height").value);
  const weight = document.querySelector("#weight").value;

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height!";
    return;
  }

  if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight!";
    return;
  }

  // Convert height cm → m
  const heightInMeters = height / 100;

  // Calculate BMI
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  // Show result + guide
  let message = `Your BMI is <b>${bmi}</b><br>`;

  if (bmi < 18.6) {
    message += "You are underweight ❗";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    message += "You are in the normal range ✅";
  } else {
    message += "You are overweight ⚠️";
  }

  results.innerHTML = message;
});
