document.addEventListener("DOMContentLoaded", () => {
  let fontsSelect = document.querySelector(".fonts");
  let colorsSelect = document.querySelector(".colors");
  let sizeSelect = document.querySelector(".size");
  let resultDiv = document.querySelector(".result");

  // Load saved settings
  let savedFont = localStorage.getItem("fontFamily");
  let savedColor = localStorage.getItem("color");
  let savedSize = localStorage.getItem("fontSize");

  if (savedFont) {
    fontsSelect.value = savedFont;
    resultDiv.style.fontFamily = savedFont;
  }
  if (savedColor) {
    colorsSelect.value = savedColor;
    resultDiv.style.color = savedColor;
  }
  if (savedSize) {
    sizeSelect.value = savedSize;
    resultDiv.style.fontSize = `${savedSize}px`;
  }

  // Update resultDiv and localStorage on change
  fontsSelect.addEventListener("change", (e) => {
    let fontFamily = e.target.value;
    resultDiv.style.fontFamily = fontFamily;
    localStorage.setItem("fontFamily", fontFamily);
  });

  colorsSelect.addEventListener("change", (e) => {
    let color = e.target.value;
    resultDiv.style.color = color;
    localStorage.setItem("color", color);
  });

  sizeSelect.addEventListener("change", (e) => {
    let fontSize = e.target.value;
    resultDiv.style.fontSize = `${fontSize}px`;
    localStorage.setItem("fontSize", fontSize);
  });
});
