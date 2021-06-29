// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(" ")
  return split
}

// Desafio 4
function concatName(array) {
  let lastItem = array[array.length - 1]
  let firstItem = array[0]
  let res =`${lastItem}, ${firstItem}`
  return res;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}

// Desafio 6
function highestCount(array) {
  let counter = 0;
  let highestNumber = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > highestNumber) {
      highestNumber = array[i]
    }
  }
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === highestNumber) {
        counter += 1
      }
    }
  return counter;
}
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
