function createPerson(name, age) {
  let innerName = name;
  let innerAge = age;

  return {
    getName: () => {
      return innerName;
    },
    getAge: () => {
      return innerAge;
    },
    setName: (newName) => {
      innerName = newName;
    },
    setAge: (newAge) => {
      innerAge = newAge;
    },
    celebrateBirthday: () => {
      innerAge++;
      return innerAge;
    },
  }
}

const person = createPerson("Даниил", 31);
console.log(person.getName()); // "Даниил"
console.log(person.getAge()); // 31
person.setName("Даша");
person.setAge(28);
console.log(person.getName()); // "Даша"
console.log(person.getAge()); // 28
person.celebrateBirthday();
console.log(person.getAge()); // 29