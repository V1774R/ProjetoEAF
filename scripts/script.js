var statusMenu = false;
function abreFechaMenu(){
    //alert('Abrindo menu');
     var menu = document.querySelector(".cabecalho__menus");
    if(statusMenu == false){
        //alert('abre');
        
        menu.style.height = "120px";
        menu.style.top = "0";
        menu.style.transition = "1s";
        statusMenu = true;
        
    }else{
        //alert('fecha');
        menu.style.top = "-150px";
        menu.style.height = "0";
        menu.style.transition = "1s";
        statusMenu = false;
    }
}

