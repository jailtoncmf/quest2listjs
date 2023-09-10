function verificarNumero() {

  var numero = prompt("Digite um número inteiro:");


  if (!isNaN(numero)) {
    if (numero > 0) {
      document.write(numero + " O número é positivo.");
    } else if (numero < 0) {
      document.write(numero + " O número é negativo.");
    } else {
      document.write(numero + " O número é zero.");
    }
  } else {
    document.write(numero + " Por favor, digite um número válido.");
  }
}


verificarNumero();
