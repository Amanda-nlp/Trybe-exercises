function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // 1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  // Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  // Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  // Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

function colocarOsDias () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dias = document.getElementById("days");

    for (let i = 0; i < dezDaysList.length; i += 1) {
        const lerDias = dezDaysList[i];
        const criandoLinhas = document.createElement("li");
        criandoLinhas.innerHTML = lerDias;
        criandoLinhas.className = "day";

        if (lerDias === 24 || lerDias === 31) {
            criandoLinhas.className = "day holiday";
        } else if (lerDias === 4  || lerDias === 11 || lerDias === 18) {
            criandoLinhas.className = "day friday";
        } else if (lerDias === 25) {
            criandoLinhas.className = "day friday holiday";
        }

        dias.appendChild(criandoLinhas);
    };

};
  
colocarOsDias();



// 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function recebeFeriado(Feriados) {
    const dias = document.querySelector(".buttons-container");

    criandoParagrafo = document.createElement("button");
    criandoParagrafo.innerHTML = Feriados;
    criandoParagrafo.className = "btn-holiday";

    dias.appendChild(criandoParagrafo);

};

recebeFeriado("Feriados");


// 3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function funcionalidadeBotao() {

    criandoParagrafo.addEventListener("click", corDiferente);
    let defineCor = true;

    function corDiferente() {
        let diasMudam = document.querySelectorAll(".holiday");

        if (defineCor == true){
            for (let i = 0; i < diasMudam.length; i += 1) {
                diasMudam[i].style.backgroundColor = "red";
        
            };
        defineCor = false;   
        } else if (defineCor == false) {
            for (let i = 0; i < diasMudam.length; i += 1) {
                diasMudam[i].style.backgroundColor = "rgb(238,238,238)";
                
            };
        defineCor = true;
        };
    };
};

funcionalidadeBotao();


// 4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function criandoBotao(sexta) {
    const sextaFeira = document.querySelector(".buttons-container");

    criandoOutroBotao = document.createElement("button");
    criandoOutroBotao.innerHTML = sexta;
    criandoOutroBotao.className = "btn-friday";

    sextaFeira.appendChild(criandoOutroBotao);
}

criandoBotao("Sexta-feira");


// 5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function mudandoBotao() {
    criandoOutroBotao.addEventListener("click", nomeDiferente);
    let defineCor = true;
    numerosOriginais = [];

    function nomeDiferente() {
        let mudar = document.querySelectorAll(".friday");

        if (defineCor == true){
            for (let i = 0; i < mudar.length; i += 1) {
                
                numerosOriginais.push(mudar[i].innerText);
                console.log(numerosOriginais);
                mudar[i].innerHTML = "Sexta-feira";
        
            };
        defineCor = false;   
        } else if (defineCor == false) {
            for (let i = 0; i < mudar.length; i += 1) {

                mudar[i].innerText = numerosOriginais[i];
                console.log(numerosOriginais);
            };
        defineCor = true;
        };
    };
};

mudandoBotao();


// 6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .