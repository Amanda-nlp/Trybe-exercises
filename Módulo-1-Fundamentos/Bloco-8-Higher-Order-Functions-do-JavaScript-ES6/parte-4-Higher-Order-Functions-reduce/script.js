/* 1. Dada uma matriz, transforme em um array. */

/* const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];

const flatten = arrays.reduce((acumulador, item) => acumulador.concat(item), []) 

console.log(flatten) */

/* Atv 2, 3, 4 */

/* 
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
 */

/* 2. Crie uma string com os nomes de todas as pessoas autoras. */

/* const reduceNames = books.reduce((acumulador, item) => {
acumulador += `${item.author.name}, `
return acumulador
}, "") 
console.log(reduceNames) */

/* 3. Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados. */

/* const averageAge = array => array.reduce((acumulador, item) => {
    return Math.round(acumulador += ((item.releaseYear - item.author.birthYear)/array.length))
}, 0)
console.log(averageAge(books)) */

/* 4. Encontre o livro com o maior nome.*/

/* const longestNamedBook = array => array.reduce((acumulador, item) => {
  if (acumulador.name.length < item.name.length) {
   acumulador = item.name.length
   return item
  }
  return acumulador
})
console.log(longestNamedBook(books)) */

/* -------------------------------------------------------------------------------------------------------------------- */

/* 5. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula. */

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => array.reduce((acumulador, item) => {
acumulador + item.split("").reduce((acumulador, item) => {
    if(item === "a" || item === "A") {
    return acumulador + 1
    }
    return acumulador
  }, 0)
}, 0)
console.log(containsA(names))