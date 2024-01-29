//Elementos HTML
var mesAno = document.querySelector(".mesAno");		
var datas = document.querySelector(".datas");
var btnNext = document.querySelector(".btnNext");
var btnBack = document.querySelector(".btnBack");
// MESES E DIAS DA SEMANA
const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var liberados = [2024, "fevereiro", 4, 6, 8, 10, 24, 25, 26]; //indices 0 e 1 são reservados para o ano e o mes, respectivamente.
var horariosDisponiveis = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];
var classe;
var exibirDetalhes = false;
//Criando cabeçalho do calendário.
var data = new Date();
//alert(dataDeInicio);
mesAno.innerHTML = `${meses[data.getMonth()].toUpperCase()} / ${data.getFullYear()}`;
var diaInicio = new Date(data.getFullYear(), data.getMonth(), 1).getDay();
var diaFinal = new Date(data.getFullYear(), data.getMonth()+1, 0).getDay();
var totalDias = new Date(data.getFullYear(), data.getMonth()+1, 0).getDate();
gerar();

var mesSelecionado; //Variavel alterada pelas funções passar e voltar.
function voltar(){
    data.setMonth(data.getMonth()-1);
    diaInicio = new Date(data.getFullYear(), data.getMonth(), 1).getDay();
    diaFinal = new Date(data.getFullYear(), data.getMonth()+1, 0).getDay();
    totalDias = new Date(data.getFullYear(), data.getMonth()+1, 0).getDate();
    mesAno.innerHTML = `${meses[data.getMonth()].toUpperCase()} / ${data.getFullYear()}`;
    gerar();
    
}
function passar(){
    data.setMonth(data.getMonth()+1);
    diaInicio = new Date(data.getFullYear(), data.getMonth(), 1).getDay();
    diaFinal = new Date(data.getFullYear(), data.getMonth()+1, 0).getDay();
    totalDias = new Date(data.getFullYear(), data.getMonth()+1, 0).getDate();
    mesAno.innerHTML = `${meses[data.getMonth()].toUpperCase()} / ${data.getFullYear()}`;
    gerar();

}

function gerar(){
    datas.innerHTML = ``;;
    for(let i = 0 - diaInicio + 1; i <= 0; i++){
    //console.log("escrever dia na posição: "+i);
    var inativosPre = new Date(data.getFullYear(), data.getMonth(), i).getDate();
        datas.innerHTML += `<div class="data inativo">${inativosPre}<div>`;
    }
    var m = meses[data.getMonth()].toLowerCase();//pega o mes do sistema
    var m2 = liberados[1].toLowerCase(); //confere o mes liberado pelo admin

    for(let i = 1; i<=totalDias; i++){
        if(liberados.includes(i) && m == m2 && liberados[0] == data.getFullYear()){
            classe = "data dinamico verde";
            datas.innerHTML += `<a href="#area" onclick="abrirDetalhes(${i})"><div class="${classe}">${i} <div></a>`;
        }else{
            classe = "data";
            datas.innerHTML += `<div class="${classe}">${i}<div>`;
        }
    }
    for(let i = 1; i <= 6 - diaFinal; i++){
        datas.innerHTML += `<div class="data inativo">${i}<div></a>`;
    }
}



function abrirDetalhes(x){
    //alert("mostrando resultados para o dia:" + x);
    var dia = new Date(data.getFullYear(), data.getMonth(), x);
    var texto = document.querySelector(".calendario__detalhesDia__hora__data");
    texto.innerHTML = `${dia.getDate()} de ${meses[dia.getMonth()]} de ${dia.getFullYear()}`;
    if(exibirDetalhes == false){
        var detalhes = document.querySelector(".calendario__detalhesDia");
        detalhes.style.opacity = "1";
        detalhes.style.transition = "2s";
        detalhes.style.zIndex = "1";
        exibirDetalhes = true;
        mostrarHorarios();
    }else{
        var detalhes = document.querySelector(".calendario__detalhesDia");
        detalhes.style.opacity = "0";
        detalhes.style.transition = "2s";
        detalhes.style.zIndex = "-1";
        exibirDetalhes = false;
    }

}
function mostrarHorarios(){
    var elemento = document.querySelector(".local_exibir_horarios");
    elemento.innerHTML = ``;
    for(c=0; c < horariosDisponiveis.length; c++){
        elemento.innerHTML += `<div>${horariosDisponiveis[c]} <a href="#" class="selec" onclick="confirmar()"> | selecionar</a></div>`;
    }
}
function confirmar(){
    alert('Ainda não é possível selecionar um horário. Está função está em construção e sera implementada em breve.');

}