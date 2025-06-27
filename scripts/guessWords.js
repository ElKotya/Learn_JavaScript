const dictionary = {
  university: "университет",
  shield: "щит",
  phone: "телефон",
  space: "космос",
}

let stop = false;

while(!stop) {
  let word = prompt("Введите слово EN");
  const result = dictionary[word];
  if(word === "exit") {
    stop = true;
  } else {
    !!result ? alert(result) : alert("Введенное слово отсутствует.");
  }
}