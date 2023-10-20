function checkButtonOverflow() {
  const nav = document.querySelector(".navv");
  const buttonList = document.querySelector(".menu");

  if (nav.offsetHeight < buttonList.offsetHeight) {
    nav.style.bottom = `-${buttonList.offsetHeight - nav.offsetHeight}px`;
  } else {
    nav.style.bottom = "0";
  }
}

// Execute a função sempre que a janela for redimensionada
window.addEventListener("resize", checkButtonOverflow);

// Execute a função quando a página for carregada
window.addEventListener("load", checkButtonOverflow);
