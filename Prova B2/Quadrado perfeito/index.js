function verificacaoQuadradoPerfeito(numero) {
    var raizQuadrada = Math.sqrt(numero);
  
    if (raizQuadrada === Math.floor(raizQuadrada)) {
      return true;
    } else {
      return false;
    }
  }
  
  var numero = prompt("Digite um número para dizer se é um quadrado perfeito:");
  
  if (verificacaoQuadradoPerfeito(numero)) {
    console.log("O número " + numero + " é um quadrado perfeito.");
  } else {
    console.log("O número " + numero + " não é um quadrado perfeito.");
  }
