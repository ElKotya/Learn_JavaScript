const students = {
  student1: {
    name: "Даниил Палькин",
    grades: [3, 5, 5, 5, 3]
  },
  student2: {
    name: "Александр Маньков",
    grades: [5, 5, 4, 5, 5]
  },
  student3: {
    name: "Рамиль Хатыпов",
    grades: [3, 3, 4, 2, 2]
  },
  student4: {
    name: "Валерий Павленко",
    grades: [4, 3, 4, 2, 1]
  },
}

Object.values(students).forEach((student) => {
  const avgSum = student.grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  console.log(`Студент: ${student.name}, Средний балл: ${avgSum / student.grades.length}`);
});
