function resetFontSize() {
  const windowWidth = window.innerWidth;
  const rem = windowWidth / 75;
  document.documentElement.style.fontSize = `${rem}px`;
}

resetFontSize();
window.addEventListener("resize", resetFontSize);
