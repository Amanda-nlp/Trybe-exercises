let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

//for (let index = 0; index < numbers.length; index += 1) {
//    console.log(numbers[index]);
//}




//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

//let soma = 0;

//for (let index = 0; index < numbers.length; index += 1) {
//    soma += numbers[index];
//}

//console.log(soma);



//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

//let soma = 0;
//let mediaAritmetica = 0;

//for (let index = 0; index < numbers.length; index +=1 ) {
//    soma += numbers[index];
//    mediaAritmetica = soma/numbers.length;
//}

//console.log(mediaAritmetica);



//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

//let soma = 0;
//let mediaAritmetica = 0;

//for (let index = 0; index < numbers.length; index +=1 ) {
//    soma += numbers[index];
//    mediaAritmetica = soma/numbers.length;      
//}

//if (mediaAritmetica > 20) {
//    console.log("Vamor maior que 20")
//} else {
//    console.log("Valor menor ou igual a 20")
//}



//5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

//let percorrerLista = numbers[0];

//for (let index = 0; index < numbers.length; index +=1 ) {
//    if (numbers[index] > percorrerLista) {
//        percorrerLista = numbers[index]; 
//    }
//}

//console.log(percorrerLista);



//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

//let contadorImpar = 0;

//for (let index = 0; index < numbers.length; index +=1 ) {
//    if (numbers[index] % 2 !== 0) {
//        contadorImpar += 1;
//    } 
//}

//console.log(contadorImpar);



//7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

//let percorrerLista = numbers[0];

//for (let index = 0; index < numbers.length; index +=1 ) {
//    if (numbers[index] < percorrerLista) {
//       percorrerLista = numbers[index]; 
//    }
//}

//console.log(percorrerLista);



//8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
 
//let listaNova = [];

//for (let index = 1; index <= 25; index += 1) {
//    listaNova.push(index);
//}

//console.log(listaNova);




//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let listaNova = [];

for (let index = 1; index <= 25; index += 1) {
    listaNova.push(index/2);
}

console.log(listaNova);
