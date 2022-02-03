//1. Faça cinco programas, um para cada operação aritmética básica.

//const a = 50;
//const b = 30;

//Adição (a + b)
//console.log(a +b); 



//Subtração (a - b)
//console.log(a-b);



//Multiplicação (a * b)
//console.log(a*b);



//Divisão (a / b)
//console.log(a / b);



//Módulo (a % b)
//console.log(a % b);



//2. Faça um programa que retorne o maior de dois números.
//const a = 50;
//const b = 30;
//if (a > b) {
//    console.log("a é maior que b")
//}else {
//    console.log("b é maior que a")
//}



//3. Faça um programa que retorne o maior de três números
//const a = 50;
//const b = 30;
//const c = 20;
//if (a > b && a > c) {
//    console.log("a é maior que b e c")
//} else if (b > c && b > a) {
//   console.log("b é maior que a e c")
//} else {
//    console.log("c é maior")
//}



//4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
//const number = 50;
//if (number > 0) {
//    console.log("positive")
//}else if (number < 0) {
//    console.log("negative")
//} else {
//    console.log("zero")
//}



//5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//const ang1 = 100;
//const ang2 = 80;
//const ang3 = 0;
//const somatoria = ang1 + ang2 + ang3;
//const todosSomados = ang1 > 0 && ang2 > 0 && ang3 > 0;
//if (somatoria === 180 && todosSomados === true) {
//    console.log("true")
//} else if (somatoria !== 180) {
//    console.log("false")
//} else {
//    console.log("Erro: isto não é um ângulo de um triângulo")
//}



//6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//let pecaXadrez = "CAVALO";

//if (pecaXadrez.toLowerCase() == "bispo") {
//    console.log("Movimentação na diagonal")
//} else if (pecaXadrez.toLowerCase() == "pino") {
//    console.log("Movimentação na vertical, porém para eliminar uma peça, sua movimentação é na diagonal")
//} else if (pecaXadrez.toLowerCase() == "rei") {
//    console.log("Movimentação para qualquer lado, com limitação de apenas 1 casa")
//} else if (pecaXadrez.toLowerCase() == "rainha") {
//    console.log("Movimentação para qualquer lado, sem restrições")
//} else if (pecaXadrez.toLowerCase() == "torre") {
//    console.log("Movimentação na horizontal e vertical")
//} else if (pecaXadrez.toLowerCase() == "cavalo") {
//    console.log("Movimentação no formato de um L, contando apenas 3 casa")
//} else {
//    console.log("Erro: não é uma peça de xadrez válida")
//}



//7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//let nota = 1;

//if (nota >= 90 && nota < 100) {
//    console.log("A")
//} else if (nota >= 80 && nota < 90) {
//    console.log("B")
//} else if (nota >= 70 && nota < 80) {
//    console.log("C)")
//} else if (nota >= 60 && nota < 70) {
//    console.log("D")
//} else if (nota >= 50 && nota < 60) {
//    console.log("E")
//} else if (nota < 50 && nota > 0) {
//    console.log("F")
//} else {
//    console.log("Erro: essa nota não existe")
//}