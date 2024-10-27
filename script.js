// script.js
document.addEventListener("DOMContentLoaded", (event) => {
  // Загрузка навигационного меню
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(".nav-left-container").innerHTML = data;
      // Добавление класса 'active' к текущему элементу навигации
      const currentPage = window.location.pathname.split("/").pop();
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    });
});

function showEnlargedImage() {
  const enlargedImgContainer = document.getElementById(
    "enlarged-img-container"
  );
  enlargedImgContainer.innerHTML = `
          <img src="image.jpg" class="centered-image enlarged-image" alt="Enlarged Image">
          <div class="image-caption">Хитрый кот</div>
      `;
}
