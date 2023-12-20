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
const str = "ротатор"; // true
const newString = "Hello"; // false

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
function isPolidrom(str) {
  const reverseStr = str.split("").reverse().join("");

  return console.log(str === reverseStr);
}

isPolidrom(str);
isPolidrom(newString);
