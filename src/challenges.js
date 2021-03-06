// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
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
  let res = `${lastItem}, ${firstItem}`
  return res;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
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
function catAndMouse(mouse, cat1, cat2) {

  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);

  if (distancia1 < distancia2) {
    return 'cat1';
  } else if (distancia2 < distancia1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(array) {

  let res = [];

  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      res.push("fizz");
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      res.push("buzz")
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      res.push("fizzBuzz")
    } else {
      res.push("bug!")
    }
  }
  return res
}

// Desafio 9
function encode(string) {
  let res = "";

  for (let i in string) {
    switch (string[i]) {
      case "a":
        res += '1';
        break;

      case "e":
        res += '2';
        break;

      case "i":
        res += '3';
        break;

      case "o":
        res += '4';
        break;

      case "u":
        res += '5';
        break;

      default:
        res += string[i]
    }
  }
  return res
}

function decode(string) {
  let res = "";

  for (let i in string) {
    switch (string[i]) {
      case '1':
        res += 'a';
        break;

      case '2':
        res += 'e';
        break;

      case '3':
        res += 'i';
        break;

      case '4':
        res += 'o';
        break;

      case '5':
        res += 'u';
        break;

      default:
        res += string[i]
    }
  }
  return res
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
