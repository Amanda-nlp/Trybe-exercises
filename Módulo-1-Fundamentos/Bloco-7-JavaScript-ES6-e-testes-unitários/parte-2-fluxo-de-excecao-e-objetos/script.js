function sum() {
    try {
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        const result = parseInt(value1) + parseInt(value2);
        document.getElementById('result').innerHTML = `Resultado: ${result}`;
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';


    if (result === "NaN") {
        throw new Error("Insira dois números")
    }
    } catch (erro) {
        alert("Olá")
        console.log("teste")
        throw erro.message; 
  }
}


  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }


  /* 1. Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.
        Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
        Utilize o throw new Error e o bloco try/catch .
        Imprima o erro no parágrafo com id result , para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
        Evite funções que tenham muitas responsabilidades distintas. */
