const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
/* 1. Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
      Dica: Use a função map */

/* const formatedBookNames = (array) => {
    const arrayString = array.map((elemento) => `${elemento.name} - ${elemento.genre} - ${elemento.author.name}`)
    return arrayString
}
console.log(formatedBookNames(books)) */



/* 2.  Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , 
       com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. 
       O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando 
       o livro foi lançado.
       Dica: use as funções map , sort*/

/* const nameAndAge = array => {
    const novo = array.map((elemento) => ({
        age: elemento.releaseYear - elemento.author.birthYear,
        author: elemento.author.name,
    }));
    return novo.sort((a,b) => a.age - b.age)
}
console.log(nameAndAge(books)) */




/* 3. Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
      Dica: use a função filter ; */
      
/* const fantasyOrScienceFiction = array => {
    const arrayObj = array.filter((elemento) => (elemento.genre === 'Fantasia') + (elemento.genre === 'Ficção Científica'));
    return arrayObj
}
console.log(fantasyOrScienceFiction(books)) */



/* 4. Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
      Dica: use as funções filter e sort */
      
/* 
const oldBooksOrdered = array => {
    const livros = array.filter((elemento) => elemento.releaseYear < 1962)
    return livros.sort((a,b) => a.releaseYear - b.releaseYear)
}
console.log(oldBooksOrdered(books)) */



/* 5. Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. */

/* const fantasyOrScienceFictionAuthors = array => {
    const arrayOrdem = array.filter((elemento) => (elemento.genre === 'Fantasia') + (elemento.genre === 'Ficção Científica'));
    const arrayNome = arrayOrdem.map((element) => element.author.name)
    return arrayNome.sort()
    
}
console.log(fantasyOrScienceFictionAuthors(books)) */



/* 6. Crie um array com o nome de todos os livros com mais de 60 anos de publicação. */

/* const oldBooks = array => {
    const livros = array.filter((elemento) => elemento.releaseYear < 1962)
    const nomeLivros = livros.map((element) => element.name)
    return nomeLivros
}
console.log(oldBooks(books)) */


