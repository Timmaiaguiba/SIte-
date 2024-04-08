const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function (index) {
        return function() {
            for (let j = 0; j < botoes.length; j++) {
                botoes[j].classList.remove("ativo");
                textos[j].classList.remove("ativo");
            }

            botoes[index].classList.add("ativo");
            textos[index].classList.add("ativo");
        }
    }(i);
}

const tempoObjetivos = [
    new Date("2024-12-31T00:00:00"),
    new Date("2024-05-31T00:00:00"),
    new Date("2024-06-31T00:00:00"),
    new Date("2024-07-31T00:00:00")
];


setInterval(atualizarContadores, 1000);

function atualizarContadores() {
    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = calculaTempo(tempoObjetivos[i]);
    }
}

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
