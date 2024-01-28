//Elementos HTML
var mesAno = document.querySelector(".mesAno");		
var datas = document.querySelector(".datas");
var btnNext = document.querySelector(".btnNext");
var btnBack = document.querySelector(".btnBack");
// MESES E DIAS DA SEMANA
var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
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
        datas.innerHTML += `<a href="#"><div class="data inativo">${inativosPre}</a><div></a>`;
    }
    for(let i = 1; i<=totalDias; i++){
        datas.innerHTML += `<a href="#"><div class="data dinamico">${i}<div></a>`;
    }
    for(let i = 1; i <= 6 - diaFinal; i++){
        datas.innerHTML += `<a href="#"><div class="data inativo">${i}<div></a>`;
    }
}
