document.querySelectorAll(".main-nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("burger-toggle").checked = false;
  });
});
