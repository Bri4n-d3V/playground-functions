// Desafio 10
function techList(array, name) {
  let arrayTech = [];
  array.sort();

  if (array.length === 0) {
    return 'Vazio!'
  }

  for (let tech of array) {
    arrayTech.push({
      tech,
      name
    });
  }
  return arrayTech
}
// Desafio 11
function generatePhoneNumber(arr) {
  let ddd = "(";
  let primeirosNumeros = "";
  let ultimosNumeros = "";

  if (arr.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (var i = 0; i < arr.length; i += 1) {
    let counter = 0;
    for (var j = 0; j < arr.length; j += 1) {
        if (arr[j] === arr[i]) {
          counter += 1
        }
    }
    if (counter >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (let i = 0; i < arr.length; i += 1) {

    if (arr[i] < 0 || arr[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    } else if (i >= 0 && i <= 1) {
      ddd = ddd + arr[i];
    } else if (i >= 2 && i <= 6) {
      primeirosNumeros = primeirosNumeros + arr[i];
    } else if (i >= 7 && i <= 10) {
      ultimosNumeros = ultimosNumeros + arr[i];
    }
  }
  ddd = ddd + ")";
  primeirosNumeros = primeirosNumeros + "-";
  return `${ddd} ${primeirosNumeros}${ultimosNumeros}`;
}
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  triangleCheck,
  hydrate
};
