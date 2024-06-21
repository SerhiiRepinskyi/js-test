// ========== firstTask (CodeSandbox) ==========

// Дано масив з numbers всередині.
// Вам необхідно написати функцію,
// яка виведе тільки парні елементи даного масива
// по черзі.

// На розв'язання даєтся 5 хвилин;
const array = [1, 2, 3, 4, 5, 6, 7, 8];

function result(arr) {
  arr.forEach((el) => {
    if (el % 2 === 0) {
      console.log(el);
    }
  });
}

result(array); // 2 4 6 8

// ========== secondTask (CodeSandbox)==========

// Welcome to the seven seas.
// You are the captain of a pirate ship.
// You are in battle against the royal navy.
// You have cannons at the ready.... or are they?
// Your task is to check if the gunners are loaded and ready,
// if they are: Fire!
// If they aren't ready: We are not ready!
// Your gunners for each test case are 4 or less.
// When you check if they are ready their answers are
//in a dictionary and will either be: aye or nay
// Firing with less than all gunners ready is non-optimum
// (this is not fire at will, this is fire by the captain's
//orders or walk the plank, dirty sea-dog!)
// If all answers are 'aye' then Fire!
//If one or more are 'nay' then We are not ready!

const a = {
  Mike: "aye",
  Joe: "aye",
  Johnson: "aye",
  Peter: "aye",
};

const b = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };

function fire(arr) {
  const arrValues = Object.values(arr);
  return arrValues.every((el) => el === "aye") ? "Fire!" : "We are not ready!";
}

console.log(fire(a)); // "Fire!"
console.log(fire(b)); // "We are not ready!"
