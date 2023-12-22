// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1) створіть масив styles з елементами «Джаз» і «Блюз»
// 2) добайте «Рок-н-ролл» в кінець
// 3) замініть значення в середині на «Класика»
// 4) видаліть перший елемент і виведіть його в консоль
// 5) вставте «Реп» і «Реггі» на початок масиву

// МАСИВ ПО ХОДУ ВИКОНАННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");

// styles.splice(1, 1, "Класика");

// console.log(styles.shift());

// styles.unshift("Реп", "Реггі");

// console.log(styles);
// console.table(styles);

// ЗАДАЧА 2
// Напишіть ф-цію logItems(array), яка буде отримувати масив і використовуючи цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <індекс елемента> та <значення елемента>.
// Нумерація для кожного елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено: 1 - Mango, а для індексу 2 виведе: 3 - Ajax.

// const users = ["Mango", "Poly", "Ajax"];

// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(users);

// ЗАДАЧА 3
// Напишіть код, який шукає найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// const numbers = [2, 17, 94, 1, 23, 37];
// let total = numbers[0];

// for (const number of numbers) {
//   if (total > number) {
//     total = number;
//   }
// }

// console.log(total);

// function findSmallestNumber(numbers) {
//   let total = numbers[0];

//   for (const number of numbers) {
//     if (total > number) {
//       total = number;
//     }
//   }
//   return total;
// }

// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// ЗАДАЧА 4
// Перевірте, чи являється рядок полідромом
// const str = "ротатор"; // true
// const newString = "Hello"; // false

// Варіант 1
// function isPolidrom(str) {
//   const arrayStr = str.split("");
//   console.log(arrayStr);

//   arrayStr.reverse();
//   console.log(arrayStr);

//   const reverseStr = arrayStr.join("");

//   return console.log(str === reverseStr);
// }

// isPolidrom(str);
// isPolidrom(newString);

// Варіант 2
// function isPolidrom(str) {
//   const reverseStr = str.split("").reverse().join("");

//   return console.log(str === reverseStr);
// }

// isPolidrom(str);
// isPolidrom(newString);

// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення. Всі аргументи будуть тільки числовими.

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2

// function calculateAverage() {
//   let sum = 0;

//   const numbers = Array.from(arguments);

//   for (const number of numbers) {
//     sum += number;
//   }
//   const result = sum / numbers.length;
//   return result;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// ЗАДАЧА 6
// Напишіть ф-цію greet(name), яка при виклику буде отримувати імя (як приклад, "Василь"), і логінувати рядок "Привіт, <імя>". У випадку, відсутнього значення, виводе аргумент "Привіт, гість"
// console.log(greet("Василь")); // Привіт Василь
// console.log(greet()); // Привіт гість

// function greet(name = "гість") {
//   let message = `Привіт ${name}`;
//   return message;
// }

// console.log(greet("Василь")); // Привіт Василь
// console.log(greet()); // Привіт гість

// ЗАДАЧА 7
// Виконайте рефакторинг, замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію

// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }
//   return `число ${b} більше ${a}`;
// }

// const checkNumbers = function (a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }
//   return `число ${b} більше ${a}`;
// };

// const checkNumbers = (a, b) => {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }
//   return `число ${b} більше ${a}`;
// };

// const checkNumbers = (a, b) =>
//   a > b ? `число ${a} більше ${b}` : `число ${b} більше ${a}`;

// console.log(checkNumbers(5, 10));

// ЗАДАЧА 8
// Напишіть ф-цію capitalize, яка буде приймати рядок і буде повертати новий рядок, де кожне слово буде з великої букви
// capitalize('the quick brown fox') // 'The Quick Brown Fox'

// function capitalize(string) {
//   const wordsArray = string.split(" ");
//   const resArray = [];

//   for (const element of wordsArray) {
//     const lowWord = element[0].toUpperCase();
//     // console.log(lowWord);

//     const newElement = element.slice(1);
//     // console.log(newElement);

//     const result = `${lowWord}${newElement}`;
//     // console.log("Результат:", result);

//     resArray.push(result);
//   }

//   return resArray.join(" ");
// }

// console.log(capitalize("the quick brown fox"));

// ЗАДАЧА 10
// Напишіть скрипт,для обєкта user в послідовності:
// - додає поле mood із значенням 'happy'
// - замінює значення hobby на 'skydiving'
// - замінює значення premium на false
// - виводить отриманий обєкта user в форматі ключ: значення, використовуючи  Object.keys() і for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// console.log(Object.keys(user));

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// ЗАДАЧА 11
// У вас є об'єкт, у якому зберігаються зарплати нашої команди.
// Напишіть код, для підрахунку всіх зарплат і збережіть результат в змінній sum.
// Маємо отримати 390. Якщо об'єкт salaries пустий, то результат буде 0.
// ДЛЯ ПЕРЕВИКОРИСТАННЯ ЛОГІКИ, ПИШІТЬ ФУНКЦІЮ!

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function calculateTotalSalary(salaries) {
//   const keys = Object.keys(salaries);
//   let sum = 0;

//   for (const key of keys) {
//     sum += salaries[key];
//   }

//   return sum;
// }

// console.log(calculateTotalSalary(salaries)); // 390

// ЗАДАЧА 12
// Створи об'єкт calculator(калькулятор) з 3-ма методами:
// read()- запрошує 2 значення і зберігає їх як значення об'єкта;
// sum() - повертає суму збережених значень;
// mult() - перемножує значення збережені і повертає результат;

// const calculator = {
//   a: null,
//   b: null,

//   read() {
//     this.a = Number.parseInt(prompt("Введіть перше ціле число:", ""));
//     this.b = Number.parseInt(prompt("Введіть друге ціле число:", ""));
//     return console.log(`a = ${this.a}; b = ${this.b}`);
//   },

//   sum() {
//     if (this.a === null || this.b === null) {
//       console.log("Будь ласка, викличте read() перед використанням sum()");
//       return null;
//     }

//     const sum = this.a + this.b;
//     console.log(`sum = ${sum}`);
//     return sum;
//   },

//   mult() {
//     if (this.a === null || this.b === null) {
//       console.log("Будь ласка, викличте read() перед використанням mult()");
//       return null;
//     }

//     const mult = this.a * this.b;
//     console.log(`mult = ${mult}`);
//     return mult;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mult());
