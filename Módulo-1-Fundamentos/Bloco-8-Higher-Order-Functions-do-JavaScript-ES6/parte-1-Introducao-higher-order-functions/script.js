/* 1. Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
      Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . 
      A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente
      um email no formato nome_da_pessoa@trybe.com . */

const newEmployees = (criandoEmail) => {
    const employees = {
      id1: criandoEmail("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: criandoEmail("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: criandoEmail("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const criandoEmail = nome => {
    let arrumandoEmail = nome.replace(/ /g, "_").toLowerCase()
    return {nome, email: `${arrumandoEmail}@trybe.com`}
   
  }
  console.log(newEmployees(criandoEmail))
  


/* 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 
      recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
      O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */
      
let sorte; 
const sorteio = (numero, callback) => {
sorte = (Math.floor(Math.random() * 5) + 1)
  return verificar(numero) 
}

const verificar = numero => {
  if(numero == sorte) {
    return `Parabéns você ganhou, o número sorteado foi: ${sorte}`
  } else {
    return `Tente novamente, o número sorteado foi: ${sorte} `
  }
}

console.log(sorteio(3, verificar))

/* 3. Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será 
      um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa
      se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF 
      deve retornar o total da contagem de respostas certas.
      Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver 
      resposta ("N.A") não altera-se a contagem. */

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

let contadorCorretas = 0;  
let contadorErradas = 0

const atribuicaoPontos = (verificarGabarito, verificarAluno, callback) => {
callback(verificarGabarito, verificarAluno)
return `Você acertou um total de ${contadorCorretas} pontos e errou um total de ${contadorErradas} pontos, portanto, seu total foi ${contadorCorretas - contadorErradas}`
}
const verificarRespostas = (verificarGabarito, verificarAluno) => {
  for (let i = 0; i < verificarGabarito.length; i += 1) {
    if(verificarGabarito[i] === verificarAluno[i]) {
      contadorCorretas += 1
    } else if (verificarAluno[i] == "N.A") {
      contadorCorretas += 0
    } else {
      contadorErradas += 0.5
    }
  }
}
console.log(atribuicaoPontos(rightAnswers, studentAnswers, verificarRespostas))