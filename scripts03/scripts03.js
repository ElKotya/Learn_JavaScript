const firstOperand = +promt('Введите первое число');
const secondOperand = +promt('Введите второе число');

if (Number.isNaN(firstOperand) || Number.isNaN(secondOperand)) {
  console.log('Введенные данные не позволяют произвести расчеты');
  return;
}
const isFirstOperandEven = firstOperand % 2 == 0;
const isSecondOperandEven = secondOperand % 2 == 0;
if (firstOperand === secondOperand) {
  console.log('Числа равны друг другу');
  console.log(isFirstOperandEven ? 'Оба числа являются четными' : 'Оба числа являются нечетными'); 
} else if (firstOperand > secondOperand) {
  console.log(`Первое число больше второго на ${firstOperand-secondOperand}`);
  console.log(isFirstOperandEven ? 'Первое число является чётным' : 'Первое число является нечётным');
  console.log(isSecondOperandEven ? 'Второе число является чётным' : 'Второе число является нечётным');
} else if (firstOperand < secondOperand) {
  console.log(`Второе число больше первого на ${secondOperand-firstOperand}`);
  console.log(isFirstOperandEven ? 'Первое число является чётным' : 'Первое число является нечётным');
  console.log(isSecondOperandEven ? 'Второе число является чётным' : 'Второе число является нечётным');
}