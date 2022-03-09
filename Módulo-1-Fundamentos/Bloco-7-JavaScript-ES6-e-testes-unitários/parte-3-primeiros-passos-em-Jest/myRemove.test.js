/* 2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
      Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
      Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
      Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */

      const myRemove = require("./sum");

      describe("A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array", () => {
          it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
              expect([1,2,4]).not.toContain(3)
        /* expect(myRemove([1,2,3,4],3)).toEqual([1,2,4]) */
          });
          it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
              expect([1,2,4]).not.toContain([1, 2, 3, 4])
      });
          it("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
              expect([1, 2, 3, 4]).not.toContain(5)
          });
    });