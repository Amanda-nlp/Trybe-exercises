// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma total de 1 a 50 é:


/* let soma = 0;

for (let i = 1; i <= 50; i += 1) {
    soma += i;
} 

console.log(soma); */



//2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.


/* let numbers = 0;

for (let i = 2; i <= 150; i +=1) {
    if (i % 3 === 0) {
        numbers += 1;
    }
}
if (numbers === 50) {
    console.log("Não gostei!");
} */



// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 


/* let player1 = "tesoura";
let player2 = "tesoura";

if (player1 == "pedra" && player2 == "tesoura" || player1 == "tesoura" && player2 == "papel" || player1 == "papel" && player2 == "pedra") {
    console.log("Player 1 won");
}

if (player1 == "pedra" && player2 == "papel" || player1 == "papel" && player2 == "tesoura" || player1 == "tesoura" && player2 == "papel") {
    console.log("Player 2 won");
}

if (player1 === player2) {
    console.log("A Ties");
} */




//4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.
 
/* let idade = 60;

if (idade < 18) {
    console.log("A pessoa é menor de idade");
} else {
    console.log("A pessoa é maior de idade");
}
 */


// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

/* let idadeCarolzita = 50;
let idadeMurilo = 300;
let idadeBaeta = 36;

if (idadeCarolzita < idadeMurilo && idadeCarolzita < idadeBaeta) {
    console.log("Carolzita é mais nova");
}
if (idadeMurilo < idadeCarolzita && idadeMurilo < idadeBaeta) {
    console.log("Murilo é mais novo");
}
if (idadeBaeta < idadeCarolzita && idadeBaeta < idadeMurilo) {
    console.log("Baeta é mais nova");
} */