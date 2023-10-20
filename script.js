const downloadBtn = document.querySelector(".download");
const resetBtn = document.querySelector(".reset");
const container = document.querySelector(".container");

downloadBtn.addEventListener("click", () => {
  container.classList.add("change");
});

resetBtn.addEventListener("click", () => {
  container.classList.remove("change");
});
