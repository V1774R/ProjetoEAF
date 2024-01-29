//Elementos HTML
var mesAno = document.querySelector(".mesAno");		
var datas = document.querySelector(".datas");
var btnNext = document.querySelector(".btnNext");
var btnBack = document.querySelector(".btnBack");
// MESES E DIAS DA SEMANA
var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var liberados = ["Fevereiro", 4, 6, 8, 10, 24, 25, 26];
var classe;
//Criando cabeçalho do calendário.
var data = new Date();
//alert(dataDeInicio);
mesAno.innerHTML = `${meses[data.getMonth()].toUpperCase()} / ${data.getFullYear()}`;
var diaInicio = new Date(data.getFullYear(), data.getMonth(), 1).getDay();
var diaFinal = new Date(data.getFullYear(), data.getMonth()+1, 0).getDay();
var totalDias = new Date(data.getFullYear(), data.getMonth()+1, 0).getDate();
gerar();

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
    var m2 = liberados[0].toLowerCase(); //confere o mes liberado pelo admin

    for(let i = 1; i<=totalDias; i++){
        if(liberados.includes(i) && m == m2){
            classe = "data dinamico verde";
            datas.innerHTML += `<a href="#area" onclick="alert('Calma, ainda vou liberar de verdade kkk')"><div class="${classe}">${i}<div></a>`;
        }else{
            classe = "data";
            datas.innerHTML += `<div class="${classe}">${i}<div>`;
        }
    }
    for(let i = 1; i <= 6 - diaFinal; i++){
        datas.innerHTML += `<div class="data inativo">${i}<div></a>`;
    }
}
