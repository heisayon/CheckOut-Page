const increase1 = document.getElementById("increase1");
const decrease1 = document.getElementById("reduce1");
const screen1 = document.getElementById("screen1");
const increase2 = document.getElementById("increase2");
const decrease2 = document.getElementById("reduce2");
const screen2 = document.getElementById("screen2");

increase1.addEventListener("click", () => {
  screen1.textContent++;
});

decrease1.addEventListener("click", () => {
  if (screen1.textContent > 1) {
    screen1.textContent--;
  }
});
increase2.addEventListener("click", () => {
  screen2.textContent++;
});

decrease2.addEventListener("click", () => {
  if (screen2.textContent > 1) {
    screen2.textContent--;
  }
});
