function calcular() {
    // Pega o valor digitado no campo 'valor1' e converte para número inteiro
    const valor1 = parseInt(document.getElementById('valor1').value);

    // Pega o valor digitado no campo 'valor2' e converte para número inteiro
    const valor2 = parseInt(document.getElementById('valor2').value);

    // Pega a operação escolhida pelo usuário no campo 'operacao'
    const operacao = document.getElementById('operacao').value;

    // Cria uma variável que vai guardar o resultado da operação
    let resultado;

    // Verifica qual operação o usuário escolheu e faz o cálculo correspondente
    switch (operacao) {
      case 'soma':
        resultado = valor1 + valor2;
        break;
      case 'subtracao':
        resultado = valor1 - valor2;
        break;
      case 'multiplicacao':
        resultado = valor1 * valor2;
        break;
      case 'divisao':
        resultado = valor1 / valor2;
        break;
      default:
        resultado = 'Operação inválida'; // Se não for nenhuma das opções, mostra erro
    }

    // Exibe o resultado calculado dentro do elemento com id "resultado"
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
  }

  // Toda vez que mudar o valor de qualquer campo, chama a função calcular automaticamente

// Sempre que o usuário digitar no campo de número (input), chama a função calcular().
document.getElementById('valor1').addEventListener('input', calcular); 
document.getElementById('valor2').addEventListener('input', calcular);

// Sempre que o usuário trocar a operação (change), chama também a função calcular().
document.getElementById('operacao').addEventListener('change', calcular);
