function isPrimo(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function listPrimos() {
  let primos = [];

  for (let i = 1; i <= 1000; i++) {
    if (isPrimo(i)) {
      primos.push(i);
    }
  }

  return primos;
}

const inputNumber = parseInt(prompt("Digite um número:"));

if (isPrimo(inputNumber)) {
  console.log(`${inputNumber} é primo.`);
} else {
  console.log(`${inputNumber} não é primo.`);
}

const primoNumbers = listPrimos();
console.log("Números primos entre 1 e 1000:");
console.log(primoNumbers);
