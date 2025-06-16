let oneNumber = prompt('Введите первое число');
oneNumber = Number(oneNumber);

let twoNumber = prompt('Введите второе число');
twoNumber = Number(twoNumber);

let operator = prompt('/,*,+,-,%')

let result;

switch (operator) {
  case '-':
    result = oneNumber - twoNumber;
    break;

  case '+':
    result = oneNumber + twoNumber;
    break;

  case '*':
    result = oneNumber * twoNumber;
    break;

  case '/':
    result = oneNumber / twoNumber;
    break;

  case '%':
    result = oneNumber % twoNumber;
    break;

    default: alert('Неизвестный оператор');
}

alert(`Результат операции: ${oneNumber} ${operator} ${twoNumber} = ${result}`)