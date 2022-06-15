const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  alert(
    `Размер экрана девайса: ${window.screen.width}x${window.screen.height}
Размер окна браузера: ${window.innerWidth}x${window.innerHeight}`
  );
});
