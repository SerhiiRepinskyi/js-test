// ***** ЗАВДАННЯ 1 *****
// Напиши функцію, яка в переданому рядку зробить першу букву кожного слова великою.

// function StringChallenge(str) {
//   const words = str.split(" ");
//   const result = [];

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     const firstLetter = word.charAt(0).toUpperCase();
//     const otherWord = word.slice(1);
//     const upWord = firstLetter + otherWord;
//     result.push(upWord);
//   }

//   const newStr = result.join(" ");

//   return newStr;

//   // Option 2
//   // return str
//   //   .split(" ")
//   //   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//   //   .join(" ");
// }

// console.log(StringChallenge("це є тестовий рядок")); // "Це Є Тестовий Рядок"
// console.log(StringChallenge("hello, world!")); // "Hello, World!"

// ***** ЗАВДАННЯ 2 *****
// Напиши функцію, яка приймає довільний рядок і повертає рядок у якому символи переданого рядка розміщені в алфавітному порядку.

// function StringChallenge(str) {
//   const sortStr = str.split("").sort().join("");
//   return sortStr;
// }

// console.log(StringChallenge("result")); // "elrstu"
// console.log(StringChallenge("результат")); // "аезлрттуь"
// console.log(StringChallenge("Hello, world!")); // " !,Hdellloorw"

// ***** ЗАВДАННЯ 3 *****
// Напиши функцію StringChallenge(str), що має прочитати переданий параметр str, який буде містити великий рядок буквено-цифрових символів з однією зірочкою, що розділяє рядок порівну на два окремі рядки. Ваша мета повернути новий рядок, поєднавши символи у відповідних місцях обох рядків.
// Наприклад: якщо передається рядок "abc1*kyoo", то функція повинна повернути рядок "akbyco1o", тому що а поєднується з k, b - з у і т.д. Рядок завжди буде ділитися порівну зірочкою в центрі.

// function StringChallenge(str) {
//   const parts = str.split("*");
//   const leftPart = parts[0].split("");
//   const rightPart = parts[1].split("");

//   const maxLength = Math.max(leftPart.length, rightPart.length);

//   let result = "";

//   for (let i = 0; i < maxLength; i++) {
//     if (leftPart[i]) {
//       result += leftPart[i];
//     }
//     if (rightPart[i]) {
//       result += rightPart[i];
//     }
//   }

//   return result;
// }

// console.log(StringChallenge("abc1*kyoo")); // "akbyco1o"
// console.log(StringChallenge("123gh*abcde")); // "1a2b3cgdhe"

// ***** ЗАВДАННЯ 4 *****
// Нехай функція ArrayChallenge(arr) візьме масив чисел, що зберігається в arr, і поверне рядок true, якщо будь-яка комбінація чисел у масиві (за винятком найбільшого числа) може бути складена так, щоб вона дорівнювала найбільшому числу в масиві, інакше false.
// Наприклад: якщо arr містить [4, 6, 23, 10, 1, 3], функція повинна повернути true, тому що 4+6+10+3=23. Масив не може буди порожнім, не буде містити всіх однакових елементів, і може мати відємні числа.

function ArrayChallenge(arr) {
  // Сортуємо масив у спадаючому порядку
  arr.sort((a, b) => b - a);

  // Видаляємо найбільше число
  const maxNumber = arr.shift();

  function canAddToMax(target, numbers) {
    if (target === 0) {
      return true; // Ціль досягнута
    }
    if (numbers.length === 0) {
      return false; // Неможливо досягнути ціль
    }

    // Спробувати додати поточне число або пропустити його
    return (
      canAddToMax(target - numbers[0], numbers.slice(1)) ||
      canAddToMax(target, numbers.slice(1)) ||
      canAddToMax(target + numbers[0], numbers.slice(1)) // Додавання враховує від'ємні числа
    );
  }

  return canAddToMax(maxNumber, arr);
}

console.log(ArrayChallenge([4, 6, 23, 10, 1, 3])); // true
console.log(ArrayChallenge([5, 7, 16, 1, 2])); // false
console.log(ArrayChallenge([3, 5, -1, 8, 12])); // true
