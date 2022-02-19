//As pessoas devem ter o poder de alterar:

// 1. Cor de fundo da tela:
let mudaCor1 = document.querySelectorAll(".mudaCorFundo")
let mudaFundo = document.querySelector("#CorFundo")

mudaCor1[0].addEventListener("click", mudaCores)
mudaCor1[1].addEventListener("click", mudaCores)
mudaCor1[2].addEventListener("click", mudaCores)

mudaFundo.style.backgroundColor = localStorage.getItem("cor")

function mudaCores(cores) {
    if (mudaCor1[0] == cores.target) {
        mudaFundo.style.backgroundColor = "green"
        localStorage.setItem("cor", "green")
        
    }if (mudaCor1[1] == cores.target) {
        mudaFundo.style.backgroundColor = "red"
        localStorage.setItem("cor", "red")

    }if (mudaCor1[2] == cores.target) {
        mudaFundo.style.backgroundColor = "yellow"  
        localStorage.setItem("cor", "yellow")
    }
}

// 2. Cor do texto:

let mudaCor2 = document.querySelectorAll(".mudaCorTesto")
let texto = document.querySelector(".texto")

mudaCor2[0].addEventListener("click", mudaCorTexto)
mudaCor2[1].addEventListener("click", mudaCorTexto)
mudaCor2[2].addEventListener("click", mudaCorTexto)

texto.style.color = localStorage.getItem("texto")

function mudaCorTexto(cor) {
    if (mudaCor2[0] == cor.target) {
        texto.style.color = "green"
        localStorage.setItem("texto", "green")

    }if (mudaCor2[1] == cor.target) {
        texto.style.color = "red"
        localStorage.setItem("texto", "red")

    }if (mudaCor2[2] == cor.target) {
        texto.style.color = "blue"  
        localStorage.setItem("texto", "blue")
    }
}


// 3. Tamanho da fonte:

let mudaTexto = document.querySelectorAll(".mudaTamanhoTexto")
let textoTamanho = document.querySelector(".tamanhoFonte")


mudaTexto[0].addEventListener("click", mudaTamTexto)
mudaTexto[1].addEventListener("click", mudaTamTexto)
mudaTexto[2].addEventListener("click", mudaTamTexto)

textoTamanho.style.fontSize = localStorage.getItem("tamanho")

function mudaTamTexto(tamanho) {
    if (mudaTexto[0] == tamanho.target) {
        textoTamanho.style.fontSize = "15px"
        localStorage.setItem("tamanho", "15px")

    }if (mudaTexto[1] == tamanho.target) {
        textoTamanho.style.fontSize = "30px"
        localStorage.setItem("tamanho", "30px")

    }if (mudaTexto[2] == tamanho.target) {
        textoTamanho.style.fontSize = "45px" 
        localStorage.setItem("tamanho", "45px")
    }
}


// 4. Espaçamento entre as linhas do texto:

let mudaLinha = document.querySelectorAll(".mudaTamanhoLinha")
let textoEspacamento = document.querySelector(".tamanhoLinha")

mudaLinha[0].addEventListener("click", mudaTamLinha)
mudaLinha[1].addEventListener("click", mudaTamLinha)
mudaLinha[2].addEventListener("click", mudaTamLinha)

textoEspacamento.style.lineHeight = localStorage.getItem("linha")

function mudaTamLinha(linha) {
    if (mudaLinha[0] == linha.target) {
        textoEspacamento.style.lineHeight = "15px"
        localStorage.setItem("linha", "15px")

    }if (mudaLinha[1] == linha.target) {
        textoEspacamento.style.lineHeight = "20px"
        localStorage.setItem("linha", "20px")

    }if (mudaLinha[2] == linha.target) {
        textoEspacamento.style.lineHeight = "25px" 
        localStorage.setItem("linha", "25px")
    }
}

// 5. Tipo da fonte ( Font family ):

let mudaFonte = document.querySelectorAll(".mudaFonte")
let fonteTexto = document.querySelector(".fonte")

mudaFonte[0].addEventListener("click", fonte)
mudaFonte[1].addEventListener("click", fonte)
mudaFonte[2].addEventListener("click", fonte)

fonteTexto.style.fontFamily = localStorage.getItem("fonte")

function fonte(tipo) {
    if (mudaFonte[0] == tipo.target) {
        fonteTexto.style.fontFamily = "arial"
        localStorage.setItem("fonte", "arial")

    }if (mudaFonte[1] == tipo.target) {
        fonteTexto.style.fontFamily = "Times New Roman"
        localStorage.setItem("fonte", "Times New Roman")
        
    }if (mudaFonte[2] == tipo.target) {
        fonteTexto.style.fontFamily = "Mono space" 
        localStorage.setItem("fonte", "Mono space")
    }   
}



     





  
  
  
  
    








