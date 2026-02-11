let isEnabled = true;

const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {
  isEnabled = !isEnabled;

  button.textContent = isEnabled ? "Enabled" : "Disabled";
  button.style.backgroundColor = isEnabled ? "#4CAF50" : "gray";
});
