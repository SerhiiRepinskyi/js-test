// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ, МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const name = "ГАЛИНА";
// const age = 35;
// const lang = "JAVASCRIPT";

// const message = `ДОБРОГО ДНЯ, МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${lang}`;

// console.log(message);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОШТУ, ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ __ ПОШТУ І __ ТЕЛЕФОН"

// const name = prompt("Введіть своє ім*я");
// const email = prompt("Введіть свою пошту");
// const tel = prompt("Введіть свій телефон");

// const message = `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ${email} ПОШТУ І ${tel} ТЕЛЕФОН`;

// console.log(message);

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ. ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const tv = Number(prompt("Введіть ціну телевізора"));
// const phone = Number(prompt("Введіть ціну телефону"));
// const computer = +prompt("Введіть ціну комп'ютеру"); // використання "+" - погана практика, краще використовувати Number

// const sum = tv + phone + computer;

// console.log(sum);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE, НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const number = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК?"));

// if (number === 12) {
//   console.log("Вірно");
// } else {
//   console.log("НЕ ЗНАЄТЕ? 12");
// }

// const month = number === 12 ? "Вірно" : "НЕ ЗНАЄТЕ? 12";

// console.log(month);

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ВИЗНАЧАТИМЕ ЧИ ЦІЛЕ ЦЕ ЧИСЛО, ЧИ НЕ ЦІЛЕ

// const user = Number(prompt("Введіть число"));

// if (user % 2 === 0) {
//   console.log("Ціле");
// } else {
//   console.log("Не ціле");
// }

// const number = user % 2 === 0 ? "Ціле" : "Не ціле";

// console.log(number);

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ, ДЕ МИ У КОРИСТОУВАЧА ЗАПИТУЄМО МІСЯЦЬ НАРОДЖЕННЯ І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const question = prompt("В якому мiсяцi ви народилися?");

// if (question === 12 || question === 1 || question === 2) {
//   console.log("зима");
// } else if (question >= 3 && question <= 5) {
//   console.log("весна");
// } else if (question >= 6 && question <= 8) {
//   console.log("літо");
// } else if (question >= 9 && question <= 11) {
//   console.log("осінь");
// } else {
//   console.log("не коректна пора року");
// }

// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ, ЩО НЕ ВІРНИЙ ЛОГІН

// const login = "LV.gmail.com";
// const parol = "GOIT";

// const loginUser = prompt("Введіть свій логін");
// const parolUser = prompt("Ведіть свій пароль");

// const result =
//   loginUser === login && parolUser === parol ? "Вітаю" : "Дані не коректні";

// console.log(result);

//  ЗАДАЧА 8
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ (ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

// const day = prompt("На який період оформляєте підписку?").toUpperCase();

// if (day === "ДЕНЬ") {
//   console.log("ціна 1.99");
// } else if (day === "НЕДІЛЯ") {
//   console.log("ціна 5.99");
// } else if (day === "МІСЯЦЬ") {
//   console.log("ціна 10.99");
// } else if (day === "РІК") {
//   console.log("ціна 100.99");
// } else {
//   console.log("Такої підписки не існує");
// }

// switch (day) {
//   case "ДЕНЬ":
//     console.log("ціна 1.99");
//     break;
//   case "НЕДІЛЯ":
//     console.log("ціна 5.99");
//     break;
//   case "МІСЯЦЬ":
//     console.log("ціна 10.99");
//     break;
//   case "РІК":
//     console.log("ціна 100.99");
//     break;
//   default:
//     console.log("Такої підписки не існує");
//     break;
// }

// ЗАДАЧА 9
// НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10

// const min = 10;
// const max = 100;

// for (let i = min; i < max; i += 1) {
//   console.log(i);
// }

// for (let i = min; i <= max; i += 10) {
//   console.log(i);
// }

// for (let i = min; i <= max; i += 1) {
//   if (i % 10 === 0) {
//     console.log(i);
//   }
//   continue;
// }

// ЗАДАЧА 10
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ, ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you have a REALLY long name!",
// ЯКЩО МЕНШЕ 7 - "Your name isn't very long"

// const name = prompt("Enter your name");

// if (name) {
//   const nameLength = name.length;
//   const answer =
//     nameLength > 7
//       ? "Wow, you have a REALLY long name!"
//       : "Your name isn't very long";

//   console.log(answer);
// } else {
//   console.log("You didn't enter a name.");
// }

// ЗАДАЧА 11
// Використовуючи функцію if...else, напишіть код, який буде запитувати:
// "Яка офіційна назва JavaScript?" Якщо користувач вводить "ECMAScript",
// то показати через alert: "Вірно!" В іншому випадку відобразити: "Не знаєте? ECMAScript!"

const nameJavaScript = prompt("Яка офіційна назва JavaScript?");

if (nameJavaScript === "ECMAScript") {
  alert("Вірно!");
} else alert("Не знаєте? ECMAScript!");

