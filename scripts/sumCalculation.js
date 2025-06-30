let array = [];
for (let i = 0; i<3; i++) {
  array.push(+prompt('Введите число'));
}

const result = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(result, 'result');