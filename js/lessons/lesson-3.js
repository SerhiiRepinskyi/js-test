// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача, через prompt і викликає колбек функцію (callback)
// greet(name) - колбек, який приймає імя і логінує в консоль рядок: "Привіт" + імя

// function letMeSeeYourName(callback) {
//   const userName = prompt("Введіть своє ім'я:", "");
//   callback(userName);
// }

// function greet(name) {
//   console.log(`Привіт ${name}`);
//   alert(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);

// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) - приймає імя та ціну товару, а також колбек. Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);

// function makeProduct(name, price, callback) {
//   const product = { name, price, id: Date.now() };
//   callback(product);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct("Холодильник", 10000, showProduct);

// ЗАДАЧА 3
// МАЄМО МАСИВ, ПОТРІБНО:
// 1) отримати масив вчених, які народились у 19 ст.;
// 2) порахувати загальну суму років скільки прожили вчені і визначити середнє значення;
// 3) відсортувати по алфавіту;
// 4) відсортувати по кількості прожитих років;
// 5) відфільтрувати, хто народився в 15, 16, 17 ст.;
// 6) знайти рік народження Albert Einstein;
// 7) визначити, чи усі вчені працювали у 19 ст.

// const scientists = [
//   {
//     name: "Albert",
//     surname: "Einstein",
//     born: 1879,
//     dead: 1955,
//     id: 1,
//   },
//   {
//     name: "Isaac",
//     surname: "Newton",
//     born: 1643,
//     dead: 1727,
//     id: 2,
//   },
//   {
//     name: "Galileo",
//     surname: "Galilei",
//     born: 1564,
//     dead: 1642,
//     id: 3,
//   },
//   {
//     name: "Marie",
//     surname: "Curie",
//     born: 1867,
//     dead: 1934,
//     id: 4,
//   },
//   {
//     name: "Johannes",
//     surname: "Kepler",
//     born: 1571,
//     dead: 1630,
//     id: 5,
//   },
//   {
//     name: "Nicolaus",
//     surname: "Copernicus",
//     born: 1473,
//     dead: 1543,
//     id: 6,
//   },
//   {
//     name: "Max",
//     surname: "Planck",
//     born: 1858,
//     dead: 1947,
//     id: 7,
//   },
//   {
//     name: "Katherine",
//     surname: "Blodgett",
//     born: 1898,
//     dead: 1979,
//     id: 8,
//   },
//   {
//     name: "Ada",
//     surname: "Lovelace",
//     born: 1815,
//     dead: 1852,
//     id: 9,
//   },

//   {
//     name: "Lise",
//     surname: "Meitner",
//     born: 1878,
//     dead: 1968,
//     id: 11,
//   },
//   {
//     name: "Sarah E.",
//     surname: "Goode",
//     born: 1855,
//     dead: 1905,
//     id: 10,
//   },
//   {
//     name: "Hanna",
//     surname: "Hammarström",
//     born: 1829,
//     dead: 1909,
//     id: 12,
//   },
// ];

// // 1) отримати масив вчених, які народились у 19 ст.
// const scientists19thCentury = scientists
//   .filter((scientist) => scientist.born >= 1801 && scientist.born <= 1900)
//   .map((scientist) => `${scientist.name} ${scientist.surname}`);
// console.log(scientists19thCentury);

// // 2) порахувати загальну суму років скільки прожили вчені і визначити середнє значення
// const totalYears = scientists.reduce(
//   (acc, scientist) => acc + (scientist.dead - scientist.born),
//   0
// );
// console.log(totalYears);

// const averageYears = totalYears / scientists.length;
// console.log(averageYears);

// // 3) відсортувати по алфавіту
// const sortedName = [...scientists].sort((a, b) =>
//   a.name[0] > b.name[0] ? 1 : -1
// );
// const sortedName1 = [...scientists].sort((a, b) =>
//   a.name[0] > b.name[0] ? -1 : 1
// );
// console.log(sortedName);
// console.log(sortedName1);

// // 4) відсортувати по кількості прожитих років
// const sortedByYearsLived = [...scientists].sort(
//   (a, b) => a.dead - a.born - (b.dead - b.born)
// );
// console.log(sortedByYearsLived);

// // 5) відфільтрувати, хто народився в 15, 16, 17 ст.
// const sortBornInCenturies = scientists.filter(
//   (scientist) => scientist.born >= 1401 && scientist.born <= 1800
// );
// console.log(sortBornInCenturies);

// // 6) знайти рік народження Albert Einstein
// const birthYearAlbertEinstein = scientists.find(
//   (scientist) => scientist.name === "Albert" && scientist.surname === "Einstein"
// ).born;
// console.log(birthYearAlbertEinstein);

// // 7) визначити, чи усі вчені працювали у 19 ст.
// const workNinetnth = scientists.every(
//   (scientist) => scientist.dead >= 1801 && scientist.dead <= 1900
// );
// console.log(workNinetnth);

// ЗАДАЧА 4
// Сортування примітивів.
// Виконати сортування масиву цін зі спадання та зростання.
// const prices = [2, 14, 1, 37, 26, 8];

// const pricesDescending = [...prices].sort((a, b) => b - a);
// const pricesAscending = [...prices].sort((a, b) => a - b);

// console.log(pricesDescending);
// console.log(pricesAscending);

// ЗАДАЧА 5
// Виконати сортування масиву назв моніторів в алфавітному та зворотному алфавітному порядку.
// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];

// const itemsAscending = [...items].sort((a, b) => a.localeCompare(b));
// const itemsDescending = [...items].sort((a, b) => b.localeCompare(a));

// console.log(itemsAscending);
// console.log(itemsDescending);

// ЗАДАЧА 6
// Зібрати в allTopics масив усіх предметів всіх курсів, використовуючи flatMap.
// Використовуючи Array.prototype.filter, виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Functions",
//       "Conditions",
//       "Classes",
//       "DOM",
//       "Git",
//       "GitHub",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Promises",
//       "AJAX",
//       "Git",
//       "GitHub",
//     ],
//   },
// ];

// const uniqueTopics = courses
//   .flatMap((course) => course.topics)
//   .filter((topic, index, array) => array.indexOf(topic) === index);

// console.log(uniqueTopics);

// ЗАДАЧА 7 (1 ДЗ)
// 1) Напишіть ф-ю конструктор, яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
// // виводить рядок Привіт, я {імя}, мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };
// const user = new Person("Den", "Dounot", 40, "male", "React");

// class Person {
//   constructor({ firstName, lastName, age, gender, interest } = {}) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.interest = interest;
//   }

//   bio() {
//     console.log(
//       `Привіт, я ${this.firstName}, мені ${this.age} років. Мені подобається ${this.interest}`
//     );
//   }

//   greeting() {
//     console.log(`Привіт, я ${this.firstName}`);
//   }
// }

// const result = new Person({
//   firstName: "Den",
//   lastName: "Dounot",
//   age: 40,
//   gender: "male",
//   interest: "React",
// });

// console.log(result.bio());
// console.log(result.greeting());

// ЗАДАЧА 8 (2 ДЗ)
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

// class User {
//   constructor({ username, age, numberOfPosts } = {}) {
//     this.username = username;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//   }

//   getInfo() {
//     return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }
// }

// const result = new User({ username: "Igor", age: 38, numberOfPosts: 5 });
// console.log(result.getInfo());

// ЗАДАЧА 9 (3 ДЗ)
// Напиши клас Storage який створює об'єкт керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// Добайте методи класу:
// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.

// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// items.addItem("Манго");
// items.removeItem("Ківі")

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     const index = this.items.indexOf(item);
//     this.items.splice(index, 1);
//   }
// }

// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);

// console.log(items.addItem("Манго"));
// console.log(items.removeItem("Ківі"));

// console.table(items);

// ЗАДАЧА 10 (4 ДЗ)
// Напиши клас Client який створює об'єкт із властивостями login і email.
// Оголоси приватні властивості #login і #email, доступ до яких зроби через геттер та сеттер login і email.

// class Client {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }
//   get login() {
//     return this.#login;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const result = new Client({ login: "Neo", email: "my-email.com.ua" });

// console.log(result);

// // Викликаються геттери
// console.log(result.login);
// console.log(result.email);

// // Викликаються сеттери
// result.email = "my-new-email.com.ua";
// result.login = "Abvgd";

// // Викликаються геттери
// console.log(result.login);
// console.log(result.email);
