//Elementos HTML
var mesAno = document.querySelector(".mesAno");		
var datas = document.querySelector(".datas");
var btnNext = document.querySelector(".btnNext");
var btnBack = document.querySelector(".btnBack");
var elemento_p = document.querySelector(".info");
var elemento = document.querySelector(".local_exibir_horarios");
var detalhes = document.querySelector(".calendario__detalhesDia");
var texto = document.querySelector(".calendario__detalhesDia__hora__data");
// MESES E DIAS DA SEMANA
const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var liberados = [2024, "fevereiro", 28]; //indices 0 e 1 são reservados para o ano e o mes, respectivamente.
var horariosDisponiveis = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];
var classe;
var exibirDetalhes = false;
var data = new Date();
mesAno.innerHTML = `${meses[data.getMonth()].toUpperCase()} / ${data.getFullYear()}`;
var diaInicio = new Date(data.getFullYear(), data.getMonth(), 1).getDay();
var diaFinal = new Date(data.getFullYear(), data.getMonth()+1, 0).getDay();
var totalDias = new Date(data.getFullYear(), data.getMonth()+1, 0).getDate();
var diaSelecionado; //Dia para agendamento
var mesSelecionado; //mes para agendamento
gerar();

// FUNÇÕES
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
    datas.innerHTML = ``;
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
    elemento_p.innerHTML = `Horários Disponíveis`;
    var dia = new Date(data.getFullYear(), data.getMonth(), x);
    diaSelecionado = dia.getDate();
    mesSelecionado = dia.getMonth();
    texto.innerHTML = `${dia.getDate()} de ${meses[dia.getMonth()]} de ${dia.getFullYear()}`;
    if(exibirDetalhes == false){
        
        detalhes.style.opacity = "1";
        detalhes.style.transition = "2s";
        detalhes.style.zIndex = "1";
        exibirDetalhes = true;
        mostrarHorarios();
    }else{
        
        detalhes.style.opacity = "0";
        detalhes.style.transition = "2s";
        detalhes.style.zIndex = "-1";
        exibirDetalhes = false;
    }

}
function mostrarHorarios(){
    elemento.innerHTML = ``;
    
    for(c=0; c < horariosDisponiveis.length; c++){
        elemento.innerHTML += `<div>${horariosDisponiveis[c]} <a href="#" class="selec" onclick="confirmar(${diaSelecionado}, ${mesSelecionado}, ${c})"> | selecionar</a></div>`;
    }
}

//Enviar para PHP
var nome;
var cpf;
var telefone;
var dia;
var mes;
var hora;
function confirmar(d, m, h){
    dia = d;
    mes = m;
    hora = h;
    elemento_p.innerHTML = `Horário: ${horariosDisponiveis[h]} horas.</br>Digite seus dados: `;
    elemento.innerHTML = `<div> <input class="campo nome" type="text" placeholder="Nome: "></div>`;
    elemento.innerHTML += `<div><input class="campo cpf" type="number" placeholder="CPF(apenas números): "></div>`;
    elemento.innerHTML += `<div><input class="campo telefone" type="number" placeholder="Telefone(apenas números): "></div>`;
    elemento.innerHTML += `<div class="btn" style="cursor: pointer;" onclick="resumir()">próximo</div><br>`;


}
//<a href="php/confirmacao.php?nome=${nome}&cpf=${cpf}&telefone=${telefone}&dia=${dia}&mes=${mes}&hora=${h}">proximo</a
function resumir(){
    var nome = document.querySelector(".nome").value;
    var cpf = document.querySelector(".cpf").value;
    var telefone = document.querySelector(".telefone").value;
    texto.innerHTML = `Resumo da Solicitação: `;
    elemento_p.innerHTML = "Agendamento: ";
    elemento.innerHTML = `<div> Nome: ${nome} </div>`;
    elemento.innerHTML += `<div> CPF: ${cpf} </div>`;
    elemento.innerHTML += `<div> Telefone: ${telefone} </div>`;
    elemento.innerHTML += `<div> Dia: ${dia} de ${meses[mes]} </div>`;
    elemento.innerHTML += `<div> Horário: ${horariosDisponiveis[hora]} horas </div>`;
    elemento.innerHTML += `<div class="btn" style="cursor: pointer;"><a href="sucesso.html#sucesso" style="text-decoration: none; color: white;>Confirmar</a></div><br>`;
}
