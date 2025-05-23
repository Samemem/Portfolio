let buttons = [];
let hiddenDivs = [];

// Loop through and assign all buttons and hidden divs to the arrays
for (let i = 1; i <= 15; i++) {
  buttons[i] = document.getElementById(`clickdiv${i}`);
  hiddenDivs[i] = document.getElementById(`hidden${i}`);
}

// Add click event listeners for each button
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    hiddenDivs.forEach((div, i) => {
      if (i === index) {
        // Toggle the visibility of the clicked div
        div.style.display = (getComputedStyle(div).display === "none") ? "block" : "none";

        // Scroll to the visible div smoothly
        if (div.style.display === "block") {
          div.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Hide all other divs
        div.style.display = "none";
      }
    });
  });
});
