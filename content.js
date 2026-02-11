console.log("Grammar Extension Loaded");

// ===== SETTINGS =====
const DEBOUNCE_DELAY = 800;
const MIN_TEXT_LENGTH = 5;

// ===== Debounce Helper =====
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// ===== Grammar Check Function =====
async function checkGrammar(text, element) {
  try {
    const response = await fetch("https://api.languagetool.org/v2/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        text: text,
        language: "en-US"
      })
    });

    const data = await response.json();

    if (data.matches.length > 0) {
      console.log("Grammar Issues:", data.matches);
      showTooltip(element, data.matches[0]);
    }

  } catch (error) {
    console.error("Grammar API Error:", error);
  }
}

// ===== Tooltip UI =====
function showTooltip(element, match) {
  const oldTooltip = document.getElementById("grammar-tooltip");
  if (oldTooltip) oldTooltip.remove();

  const tooltip = document.createElement("div");
  tooltip.id = "grammar-tooltip";
  tooltip.innerText = match.message;

  tooltip.style.position = "absolute";
  tooltip.style.background = "#ff4d4d";
  tooltip.style.color = "white";
  tooltip.style.padding = "8px";
  tooltip.style.borderRadius = "5px";
  tooltip.style.fontSize = "12px";
  tooltip.style.zIndex = "999999";

  const rect = element.getBoundingClientRect();
  tooltip.style.top = rect.bottom + window.scrollY + 5 + "px";
  tooltip.style.left = rect.left + window.scrollX + "px";

  document.body.appendChild(tooltip);

  setTimeout(() => {
    tooltip.remove();
  }, 3000);
}

// ===== Input Listener =====
const handleInput = debounce((e) => {
  const element = e.target;

  if (
    element.tagName === "TEXTAREA" ||
    (element.tagName === "INPUT" && element.type === "text")
  ) {
    const text = element.value;

    if (text.length >= MIN_TEXT_LENGTH) {
      checkGrammar(text, element);
    }
  }
}, DEBOUNCE_DELAY);

document.addEventListener("input", handleInput);
