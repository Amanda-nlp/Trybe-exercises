/* 3. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
      Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
      Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
      Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
      Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
      Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */


const myFizzBuzz = require("./myFizzBuzz");

describe("A função myFizzBuzz(num) recebe um número num e retorna fizzbuzz se o número for divisível por 3 e 5 , retorna fizz se for divisível apenas por 3 , retorna buzz se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número", () => {
    it("Uma chamada com um número divisível por 3 e 5 e o retorno é fizzbuzz", () => {
        expect(myFizzBuzz(15)).toEqual("fizzbuzz")
    });
    it("Uma chamada com um número divisível por 3 e o retorno é fizz", () => {
        expect(myFizzBuzz(9)).toEqual("fizz")
    });
    it("Uma chamada com um número divisível por 5 e o retorno é buzz", () => {
        expect(myFizzBuzz(20)).toEqual("buzz")
    });
    it("Uma chamada com um número que não é divisível por 3 ou 5 e o retorno é o próprio número", () => {
        expect(myFizzBuzz(53)).toEqual(myFizzBuzz(53))
    });
    it("Uma chamada com um parâmetro que não é um número e verifique se o retorno é false", () => {
        expect(myFizzBuzz("oi")).toEqual(false)
    });
});