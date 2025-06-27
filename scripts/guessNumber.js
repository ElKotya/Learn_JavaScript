let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber); // загаданное число.
let count = 0;
let stop = false;

while (!stop) {
  let promptedNumber = Number(prompt("Введите число от 1 до 100, которое нужно угадать"));
  count += 1;

  if (promptedNumber < randomNumber) {
    alert("Загаданное число больше");
  } else if (promptedNumber > randomNumber) {
    alert("Загаданное число меньше");
  } else if (promptedNumber === randomNumber) {
    alert("Вы угадали число");
    stop = true;
  } else {
    alert("Ошибка! Введите число!!!");
  }
  alert("попыток:" + count);
}