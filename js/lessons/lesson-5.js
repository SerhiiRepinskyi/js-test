// ========== ЗАДАЧА 1 ==========
// УМОВА:
// Зробити фіксований скрол на сторінці для менюшки, тобто, щоб наше меню фіксувалось зверху браузера при скролі, для того потрібно порахувати висоту хедера, відстежуємо позицію скролу та додавати клас fixed-nav якщо скрол більше висоту хедера, в іншому випадку його видаляємо

// const header = document.querySelector(".header");
// const heightHeader = header.clientHeight; // Визначаємо висоту header за допомогою clientHeight!!!
// // console.log(heightHeader);
// // const widthHeader = header.clientWidth;
// // console.log(widthHeader);

// const navigation = document.querySelector("#navigation");

// function addClassHeader() {
//   if (pageYOffset > heightHeader) {
//     navigation.classList.add("fixed-nav");
//   } else {
//     navigation.classList.remove("fixed-nav");
//   }
// }

// // Замість pageYOffset можна використати scrollY - новий метод, треба перевірити, чи підтримуються усіма браузерами

// window.addEventListener("scroll", addClassHeader);

// ========== ЗАДАЧА 2 ==========
// УМОВА:
// Оптимізуйте роботу scroll та resize за допомогою бібліотеки lodash, підключивши скрипт
{
  /* <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>; */
}

function quantityScroll() {
  console.log("scroll");
}

function quantityResize() {
  console.log("resize");
}

// addEventListener("scroll", quantityScroll);
// addEventListener("resize", quantityResize);

addEventListener("scroll", _.throttle(quantityScroll, 700));
addEventListener("resize", _.throttle(quantityResize, 700));
