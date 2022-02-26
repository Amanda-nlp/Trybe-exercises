// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
let campo11 = document.querySelector("#botao-enviar")
let campo12 = document.querySelector("#retornoUsuario")

campo11.addEventListener("click", botaoEnviar)

function botaoEnviar(click) {
    click.preventDefault(); 
    campo12.innerHTML = "Formulário recebido com sucesso!!!" 
}


