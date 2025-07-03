// ========== Task ==========

const students = [
  { name: "Alice", age: 21, courses: ["Math", "Physics"] },
  { name: "Bob", age: 19, courses: ["Computer Science"] },
  { name: "Charlie", age: 20, courses: ["History", "Art"] },
];

// Заборонено використовувати метод .sort(), рекурсії, цикл у циклі, більше одного явного виклику циклу (for, .foreach(), .map(), .reduce(), .filter(), etc).

// ===== З використанням заборонених методів =====
// function sortStudentsByAge(students) {
//   return [...students]
//     .sort((a, b) => b.age - a.age)
//     .map((student) => student.name);
// }

// ===== Бульбашковий алгоритм сотування - рекомендація =====
function sortStudentsByAge(students) {
  const arr = [...students];
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].age < arr[i + 1].age) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr.map((s) => s.name);
}

console.log(sortStudentsByAge(students), "result"); // ["Alice", "Charlie", "Bob"] "result"

// Очікуваний результат
// ["Alice", "Charlie", "Bob"]
