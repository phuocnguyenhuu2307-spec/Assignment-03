const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const content = this.previousElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.textContent = "View More";
    } else {
      content.style.display = "block";
      this.textContent = "View Less";
    }
  });
});
