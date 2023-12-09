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
// НАПИШІТЬ ЦИКЛ FOR, ЯКИЙ БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10

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

// const nameJavaScript = prompt("Яка офіційна назва JavaScript?");

// if (nameJavaScript === "ECMAScript") {
//   alert("Вірно!");
// } else alert("Не знаєте? ECMAScript!");

// ЗАДАЧА 12
// Напишіть програму, яка отримає від користувача число (кількість хвилин) і виведе в консоль стрічку в форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const minutesInput = prompt("Введіть кількість хвилин:");

// // Перетворення введеного значення в число
// const totalMinutes = parseInt(minutesInput);

// // Розрахунок годин і хвилин
// const hours = Math.floor(totalMinutes / 60);
// const remainingMinutes = totalMinutes % 60;

// // Форматування годин і хвилин за допомогою padStart
// const formattedHours = String(hours).padStart(2, "0");
// const formattedMinutes = String(remainingMinutes).padStart(2, "0");

// // Формування результуючої стрічки
// const result = `${formattedHours}:${formattedMinutes}`;

// console.log(result);

// ЗАДАЧА 13
// ЗА ДОПОМОГОЮ ЦИКЛУ FOR ДОДАЙТЕ ВСІ ПАРНІ ЧИСЛА ВІД MIN ДО MAX

// let min = 3;
// const max = 11;

// let sum = 0;
// let array = []; // Масив парних чисел

// // Перевіряємо, чи min парне. Якщо ні, збільшуємо його на 1
// if (min % 2 !== 0) {
//   min++;
// }
// // min = min % 2 !== 0 ? min + 1 : min;

// // Цикл, який додає парні числа від min до max
// for (let i = min; i <= max; i += 2) {
//   sum += i;
//   array.push(i);
// }

// console.log(sum);
// console.log(array);

// ЗАДАЧА 14
// Напишіть код, який запитуватиме логін за допомогою prompt і логуватиме результат у консоль браузера.
// Якщо відвідувач вводить "Адмін", то prompt запитує пароль.
// Якщо нічого не ввели або натиснуто клавішу Esc вивести рядок "Скасовано".
// В іншому випадку вивести рядок "Я вас не знаю".

// Пароль перевіряти так:
// якщо введено пароль "Я головний", то вивести рядок "Привіт!", інакше виводити рядок "Невірний пароль!".

// let login = prompt("Введіть логін:", "");
// console.log(login);

// if (login === "Адмін") {
//   let password = prompt("Введіть пароль:", "");

//   if (password === "Я головний") {
//     console.log("Привіт!");
//   } else if (password === null || password === "") {
//     console.log("Скасовано");
//   } else {
//     console.log("Невірний пароль!");
//   }
// } else if (login === null || login === "") {
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }

// ЗАДАЧА 15
// При завантаженні сторінки користувачеві пропонується ввести число.
// Введене число додається до значення змінної total.
// Операція введення числа продовжується до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на кнопку Cancel,
// показати alert зі стрічкою "Загальна сума введених чисел рівна [число]."
// Робити перевірку, що користувач ввів саме число, а не довільний набір символів, не потрібно.

let total = 0;

while (true) {
  let userInput = prompt("Введіть число:");

  // Перевірка, чи користувач натиснув "Cancel" або ввів недійсне число
  if (userInput === null || isNaN(userInput)) {
    break; // Вихід із циклу, якщо користувач натиснув "Cancel" або ввів недійсне число
  }

  // Додавання числа до загальної суми
  total += Number(userInput);
}

// Виведення результату у вигляді alert
alert(`Загальна сума введених чисел рівна ${total}.`);

