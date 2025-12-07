let iconSun = document.querySelector(".fa-sun");
let iconMoon = document.querySelector(".fa-moon");
let iconCopy = document.querySelector(".fa-copy");
let displayScreen = document.getElementById("charset");
let lenghtValue = document.getElementById("lenght-value");
let inputLenght = document.getElementById("lenght");
let upperCheckbox = document.getElementById("uppercase");
let lowerCheckbox = document.getElementById("lowercase");
let numberCheckbox = document.getElementById("number");
let symbolCheckbox = document.getElementById("symbol");
let strenghtOutput = document.getElementById("trenght-value");
let strenchbox1 = document.getElementsByClassName("difficult1");
let strenchbox2 = document.getElementsByClassName("difficult2");
let strenchbox3 = document.getElementsByClassName("difficult3");
let strenchbox4 = document.getElementsByClassName("difficult4");
let submitButton = document.getElementById("submit");
let theme = document.getElementById("dark-theme");

//copy password function
iconCopy.addEventListener("click", () => {
  // Select the text field
  let copy = displayScreen.value;
  displayScreen.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copy);
  iconCopy.style.color = "rgb(223, 153, 0)";
});

//Change password lenght on display
inputLenght.addEventListener("change", () => {
  let passwordSize = inputLenght.value;
  lenghtValue.textContent = passwordSize;
});

//Get value and generate password
submitButton.addEventListener("click", () => {
  passwordSize = inputLenght.value;
});

//Theme change
  theme.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isDark = document.body.classList.contains("light");

  iconMoon.style.display = isDark ? "none" : "block";
  iconSun.style.display = isDark ? "block" : "none";
});
