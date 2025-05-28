const hotoes = document.querySelectorAll(".botoes");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i=0; i < botoes.length; i++){
    botoes [i].onclick = function(){
        for (let j=0; j < botoes.length; j++){
            botoes [j].classlist.remove ("ativo");
            textos [j].classList.remove ("ativo");
        }
        botoes [i].classList.add ("ativo");
        textos [i].classList.add ("ativo");
    }
}
const contadores = document.querySelectorAll("contador");
const tempoObjetivo1 = new Date ("2030-01-01T00:00:00");
const tempoObjetivo2 = new Date ("2030-01-01T00:00:00");
const tempoObjetivo3 = new Date ("2050-01-01T00:00:00");
const tempoObjetivo4 = new Date ("2026-01-01T00:00:00");
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4]
function atualizarCronometro (){
    for (let i = 0; i < contadores.length; i++){
        document.getElementById("dias"+i).textContent = calculatempo(tempos [i])[0];
        document.getElementById("horas"+i).textContent = calculatempo(tempos [i])[1];
        document.getElementById("min"+i).textContent = calculatempo(tempos [i])[2];
        document.getElementById("seg"+i).textContent = calculatempo(tempos [i])[3];
    }
    for(let i = 0; i <contadores.length; i++){
        //contadores[i].textContent = calculaTempo (tempos [i]);
    }
}
function comecaCronometro (){
    atualizarCronometro ();
    seyInterval (atualizarCronometro, 1000);
}
comecaCronometro();