const students = [
  { name: "Иван", age: 20, grades: [4, 5, 3] },
  { name: "Анна", age: 22, grades: [5, 5, 4] },
  { name: "Петр", age: 21, grades: [3, 4, 2] },
  { name: "Даниил", age: 21, grades: [2, 2, 5] }
];

const getAverageGrade = (arr) => {
  let total = 0;
  const averageGrade = arr.reduce((accumulator, item) => {

    const sum = item.grades.reduce((acc, item) => {
      return acc + item;
    }, 0);

    total += item.grades.length;

    return accumulator + sum;
  }, 0);

  return (averageGrade / total).toFixed(2);
}

console.log(getAverageGrade(students));
