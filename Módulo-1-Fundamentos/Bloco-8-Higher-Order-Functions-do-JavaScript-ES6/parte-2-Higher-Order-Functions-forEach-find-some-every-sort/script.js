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



/* 1. Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
      Dica: use a função find . */

/* const authorBornIn1947 = (array) => {
    const pessoaProcurar = array.find((elemento) => elemento.author.birthYear == 1947)
    if (pessoaProcurar) {
        console.log(`${pessoaProcurar.author.name} é a primeira pessoa nascida no ano de 1947 `)
    }
};
authorBornIn1947(books) */





/* 2. Retorne o nome do livro de menor nome.
      Dica: use a função forEach . */
// Variável nameBook que receberá o valor do menor nome;
/* 
let nameBook = "";
let contarLetras = 100;

const smallerName = (array) => {
    array.forEach((elemento) => {
        if(contarLetras > elemento.name.length) {
          contarLetras = elemento.name.length
          nameBook = elemento.name

        }  
    })
    return nameBook;
}

smallerName(books)
console.log(`O nome do livro de menor nome é: ${nameBook}`) */





/* 3. Encontre o primeiro livro cujo nome possui 26 caracteres. */

/* const getNamedBook = (array) => {
  const encontrandoLivro = array.forEach((elemento) => {
    if (elemento.name.length == 26) {
      console.log(`O primeiro livo cujo nome possui 26 caracteres é: ${elemento.name}`)
    }
  }
)}
getNamedBook(books) */





/* 4. Ordene os livros por data de lançamento em ordem decrescente. */

/* const booksOrderedByReleaseYearDesc = (array) => {
  const ordem = array.sort((a, b) => b.releaseYear - a.releaseYear)
  console.log(ordem)
}

booksOrderedByReleaseYearDesc(books) */





/* 5. Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário. */
/* const expectedResult = false; */

/* const everyoneWasBornOnSecXX = array => {
  const pessoasSeculo = array.every((elemento) => elemento.author.birthYear <= 2000 && elemento.author.birthYear >= 1901) 
  if(pessoasSeculo) {
    console.log(true)
  } else {
    console.log(false)
  }
}
everyoneWasBornOnSecXX(books) */




/* 6. Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário. */
/* const expectedResult = true; */

/* const someBookWasReleaseOnThe80s = array => {
  const algumLivroDec = array.some((elemento) => elemento.releaseYear <= 1989 && elemento.releaseYear >= 1980)
  if(algumLivroDec) {
    console.log(true)
  } else {
    console.log(false)
  }
}
someBookWasReleaseOnThe80s(books) */


