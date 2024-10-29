// script.js

// Добавляем слушатель события "DOMContentLoaded" для выполнения кода после загрузки DOM
document.addEventListener("DOMContentLoaded", (event) => {
  // Загрузка навигационного меню из файла nav.html
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      // Вставляем содержимое nav.html в элемент с классом "nav-left-container"
      document.querySelector(".nav-left-container").innerHTML = data;

      // Определяем текущую страницу
      const currentPage = window.location.pathname.split("/").pop();
      // Получаем все элементы навигации с классом "nav-link"
      const navLinks = document.querySelectorAll(".nav-link");

      // Проходим по каждому элементу навигации
      navLinks.forEach((link) => {
        // Если href элемента совпадает с текущей страницей, добавляем класс "active"
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    });
});

// Функция для отображения увеличенного изображения
function showEnlargedImage() {
  // Получаем контейнер для увеличенного изображения по id
  const enlargedImgContainer = document.getElementById(
    "enlarged-img-container"
  );
  // Вставляем HTML код для увеличенного изображения и подписи
  enlargedImgContainer.innerHTML = `
    <img src="image.jpg" class="centered-image enlarged-image" alt="Enlarged Image">
    <div class="image-caption">Хитрый кот</div>
  `;
}
