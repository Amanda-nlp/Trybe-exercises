/* EXERCÍCIOS - PARTE 1 */

/* 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
        Modifique a estrutura da função para que ela seja uma arrow function.
        Modifique as concatenações para template literals. */

/* function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true); */


/* REFATORANDO EXERCÍCIO 1: */

const testingScope = escopo => escopo === true ? "ótimo, fui utilizada no escopo !" : "Não devo ser utilizada fora do meu escopo";

const imprimeScope = escopo => `O que estou fazendo aqui ? ${testingScope(escopo)}`;

console.log(imprimeScope(true));



/* 2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente
      Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".*/
    
let oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const imprimeNumeros = `A ordem crescente é: ${oddsAndEvens.sort((a, b) => a - b)}`;

console.log(imprimeNumeros); 


/* ------------------------------------------------------------------------------------------------------------------------------------------- */

/* EXERCÍCIOS - PARTE 2 */

/* 1. Crie uma função que receba um número e retorne seu fatorial. 
      Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.*/

const condicao = numero => numero > 0 ? fatorial(numero) : console.log("Escreva um outro número") 

const fatorial = fatorando => {
    resultados = fatorando;
    for (let i = fatorando -1; i > 1; i -- ) {
        resultados *= i
    }
}
condicao(5)
console.log(`O resultado do fatorial do seu número é: ${resultados}`)

/* 2. Crie uma função que receba uma frase e retorne qual a maior palavra.*/

const dividindoPalavras = palavras => {
    let frase = palavras.split(" ") 

    contadorLetras = 0;
    contadorPalavraMaior = "";

    for (let i = 0; i < frase.length; i += 1) {
       if(frase[i].length > contadorLetras) {
           contadorPalavraMaior = frase[i]
           contadorLetras = frase[i].length
       }
    }
}

dividindoPalavras('Antônio foi no supermercado e não sabemos o que aconteceu')
console.log(contadorPalavraMaior) 

/* 3. Crie uma página que contenha:
      Um botão ao qual será associado um event listener ;
      Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
      Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. */

    const botao = document.querySelector("button")
    const cliques = document.querySelector("p")
    let numeroCliques = 0;

    botao.addEventListener("click", () => {
        
        numeroCliques += 1
        cliques.innerText = numeroCliques
         
    })

/* 4. Crie um código JavaScript com a seguinte especificação:
      Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
        String determinada: "Tryber x aqui!"
        Parâmetro: "Bebeto"
        Retorno: "Tryber Bebeto aqui!"
        Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
      
      Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
        Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
        JavaScript;
        HTML; ... #goTrybe".*/