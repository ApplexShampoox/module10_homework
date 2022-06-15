const btn1 = document.querySelector(".bi-arrow-down-left-circle");
const btn2 = document.querySelector(".bi-arrow-down-left-circle-fill");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  btn1.classList.toggle("btn-hide");
  btn2.classList.toggle("btn-hide");
});
