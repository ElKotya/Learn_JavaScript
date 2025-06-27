let array = [];
for (let i = 0; i<3; i++) {
  array.push(+prompt('Введите число'));
}
const operation = prompt("Тип операции: +, -, *");

let result = array[0];
for(let i = 1; i < array.length; i++) {
  switch(operation) {
    case "+": result = result + array[i]
      break;
    case "-": result = result - array[i]
      break;
    case "*": result = result * array[i]
      break;
  }
};
console.log(result, 'result');
