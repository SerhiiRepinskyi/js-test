// ***** ЗАВДАННЯ 1 *****
// Написати функцію, яка в переданому рядку зробить першу букву кожного слова великою.

function StringChallenge(str) {
  const words = str.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstLetter = word.charAt(0).toUpperCase();
    const otherWord = word.slice(1);
    const upWord = firstLetter + otherWord;
    result.push(upWord);
  }

  const newStr = result.join(" ");

  return newStr;

  // Option 2
  // return str
  //   .split(" ")
  //   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //   .join(" ");
}

console.log(StringChallenge("це є тестовий рядок")); // "Це Є Тестовий Рядок"
console.log(StringChallenge("hello world!")); // "Hello World!"
