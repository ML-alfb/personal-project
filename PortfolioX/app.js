const toggle = document.querySelector(".toggle");
const ul = document.querySelector(".ul");
const icon = document.querySelectorAll(".toggle i");

toggle.addEventListener("click", () => {
  ul.classList.toggle("action");
  const dd = icon[0].classList.contains("time");

  if (dd) {
    icon[0].classList.remove("time");
    icon[1].classList.add("time");
  } else {
    icon[0].classList.add("time");
    icon[1].classList.remove("time");
  }
});
