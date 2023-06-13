function mostrarFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let fatorial = 1;
      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }
      return fatorial;
    }
  }
  
  const numero = parseInt(prompt('Digite um número de 1 a 10:'));
  
  if (numero >= 1 && numero <= 10) {
    const fatorial = mostrarFatorial(numero);
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
  } else {
    console.log('Digite um número de 1 a 10, por favor');
  }
  