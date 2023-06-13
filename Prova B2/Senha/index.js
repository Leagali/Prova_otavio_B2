function verificacaoSenha(senha) {
  
    if (senha.length < 8) {
      return "A senha deve ter ao menos 8 caracteres.";
    }
  
    if (!/[A-Z]/.test(senha) || !/[a-z]/.test(senha) || !/[0-9]/.test(senha)) {
      return "A senha deve ter uma letra maiúscula, uma letra minúscula e um número.";
    }
  
    return "A senha é válida.";
  }
  
  var senha = prompt("Digite a senha:");
  
  var resultado = verificacaoSenha(senha);
  alert(resultado);
