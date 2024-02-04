// ========== ЗАДАЧА 1 ==========
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch, ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

// const BASE_URL = "https://pixabay.com/api/";
// const API_KEY = "22926721-5d20aa08498ffd1ff2f906542";
// const elementWrapper = document.querySelector(".container");
// let page = 1;

// fetch(
//   `${BASE_URL}?key=${API_KEY}&q=Lion&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
// )
//   .then((res) => res.json())
//   .then((data) => sortFetchedArr(data.hits))
//   .catch((error) => console.log(error));

// function imageCardEl({ largeImageURL, type }) {
//   const imageCardTemp = document.createElement("img");
//   imageCardTemp.src = largeImageURL;
//   imageCardTemp.alt = type;
//   elementWrapper.appendChild(imageCardTemp);
// }

// function sortFetchedArr(elements) {
//   for (const element of elements) {
//     imageCardEl(element);
//   }
// }

// ========== ЗАДАЧА 2 ==========
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userValue} ,
// ТА ЗА ДОПОМОГОЮ fetch, ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ПАРАМЕТРИ ЗАПИТУ ОТРИМАЙ З INPUT)

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const wrapper = document.querySelector(".render");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const userValue = input.value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userValue}`)
    .then((responce) => responce.json())
    .then((data) => sortRender(data.drinks))
    .catch((err) => console.log(err));
}

function cardElem({ strDrink, strDrinkThumb, strCategory }) {
  const murkUp = `<h2>${strDrink}</h2>
  <img src="${strDrinkThumb}" alt="${strDrink}">
  <p>${strCategory}</p>`;
  wrapper.insertAdjacentHTML("beforeend", murkUp);
}

function sortRender(elements) {
  elements.forEach((element) => cardElem(element));
}
