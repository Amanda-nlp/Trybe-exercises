//Recomendamos que você utilize o debugger ou o console.log() durante a realização dos exercícios, desse modo será mais fácil acompanhar o comportamento do código e entender o que ocorre em cada uma das linhas.


//1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

/* let fatorial = [];

for (let index = 1; index <= 10; index += 1) {
    fatorial += index;
    conta = fatorial[0] * fatorial[1] * fatorial[2] * fatorial[3] * fatorial[4] * fatorial[5] * fatorial[6] * fatorial[7] * fatorial[8] * fatorial[9];
}
console.log(conta);
 */



//2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

/* let word = "tryber";
let word2 = " ";

for (let index = word.length -1; index >= 0; index -= 1) {
    word2 += word[index];
}

console.log(word2);

 */


//3 - Considere o array de strings abaixo:
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

/* let array = ['java', 'javascript', 'python', 'html', 'css'];
 */



//4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let contadorDePrimos = [];

for (let index = 0; index <= 50; index += 1) {
    if (index % 2 === 0 || index % 3 === 0 || index % 5 === 0) {
        contadorDePrimos.push(index);
    }   
    
}

console.log(contadorDePrimos);

