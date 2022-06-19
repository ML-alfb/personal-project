const slider = document.querySelector(".slider");
console.log(slider);
const cardSlide = Array.from(slider.children);
const width = cardSlide[0].clientWidth;
const nextBtn = document.querySelector(".btn-1");
const previousBtn = document.querySelector(".btn-2");
const btn = document.querySelector(".btn-M1");
const header = document.querySelector(".header");
let x = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("action");
  } else header.classList.remove("action");
});

cardSlide.forEach((card) => {
  card.style.left = x + "px";
  x += width + 50;
});

nextBtn.addEventListener("click", () => {
  const currentSlid = slider.querySelector(".currentSlide");
  const nextSlid = currentSlid.nextElementSibling;
  const move = nextSlid.style.left;
  const nextSlidX =
    nextSlid.nextElementSibling.nextElementSibling.nextElementSibling;
  if (!nextSlidX) return;
  slider.style.transform = `translateX(-${move})`;
  currentSlid.classList.remove("currentSlide");
  nextSlid.classList.add("currentSlide");
});
previousBtn.addEventListener("click", () => {
  const currentSlid = slider.querySelector(".currentSlide");
  const previousSlid = currentSlid.previousElementSibling;
  if (!previousSlid) return;
  const movex = previousSlid.style.left;

  slider.style.transform = `translateX(-${movex})`;
  currentSlid.classList.remove("currentSlide");
  previousSlid.classList.add("currentSlide");
});
