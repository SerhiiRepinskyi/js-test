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

function StringChallenge(str) {
  const parts = str.split("*");
  const leftPart = parts[0].split("");
  const rightPart = parts[1].split("");

  const maxLength = Math.max(leftPart.length, rightPart.length);

  let result = "";

  for (let i = 0; i < maxLength; i++) {
    if (leftPart[i]) {
      result += leftPart[i];
    }
    if (rightPart[i]) {
      result += rightPart[i];
    }
  }

  return result;
}

console.log(StringChallenge("abc1*kyoo")); // "akbyco1o"
console.log(StringChallenge("123gh*abcde")); // "1a2b3cgdhe"
