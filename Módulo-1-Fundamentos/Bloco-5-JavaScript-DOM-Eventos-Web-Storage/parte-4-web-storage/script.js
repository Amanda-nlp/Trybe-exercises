//As pessoas devem ter o poder de alterar:

// 1. Cor de fundo da tela:
// 2. Cor do texto:
// 3. Tamanho da fonte:
// 4. Espaçamento entre as linhas do texto:
// 5. Tipo da fonte ( Font family ):


let mudaCor1 = document.querySelectorAll(".mudaCorFundo");
let mudaFundo = document.querySelector("#CorFundo");


        mudaCor1[0].addEventListener("click", mudaCores)
        mudaCor1[1].addEventListener("click", mudaCores)
        mudaCor1[2].addEventListener("click", mudaCores) 

        /* localStorage.setItem("backgroundColor", color); */

        function mudaCores(cores) {
            if (mudaCor1[0] == cores.target) {
                mudaFundo.style.backgroudColor = "green";
            }



            
            //mudaCor1[1].style.backgroudColor = "red";
            console.log(cores.target);
        }






     





  
  
  
  
    








