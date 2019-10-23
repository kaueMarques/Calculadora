// ---------------ELEMENTOS---------------
// variavel com o resultado
var query = "";
//status do operador(para nao se repetir)
var ocupado = false;
// elemento com a div visor
var visor = document.getElementById("visor");
// array de elementos; div de cada botao
var botao = [];
    botao[1] = document.getElementById("botao-01");// AC
    botao[2] = document.getElementById("botao-02");// +/- 
    botao[3] = document.getElementById("botao-03");// % 
    botao[4] = document.getElementById("botao-04");// / 
    botao[5] = document.getElementById("botao-05");// 7 
    botao[6] = document.getElementById("botao-06");// 8 
    botao[7] = document.getElementById("botao-07");// 9 
    botao[8] = document.getElementById("botao-08");// x 
    botao[9] = document.getElementById("botao-09");// 4 
    botao[10] = document.getElementById("botao-10");//5 
    botao[11] = document.getElementById("botao-11");//6 
    botao[12] = document.getElementById("botao-12");// - 
    botao[13] = document.getElementById("botao-13");// 1 
    botao[14] = document.getElementById("botao-14");// 2 
    botao[15] = document.getElementById("botao-15");// 3 
    botao[16] = document.getElementById("botao-16");// +
    botao[17] = document.getElementById("botao-17");// 0 
    botao[18] = document.getElementById("botao-18");// 0  
    botao[19] = document.getElementById("botao-19");// , 
    botao[20] = document.getElementById("botao-20");// = 
// ---------------FUNCOES---------------
// atualiza o visor
var mostraVisor = function(print){
    visor.innerHTML = print;
}
// funcao do botao 01; [AC]
botao[1].onclick = function(){
    query = "";
    mostraVisor(0);
}
// funcao do botao 02; [+/-]
botao[2].onclick = function(){

}
// funcao do botao 03; [%]
botao[3].onclick = function(){

}
// funcao do botao 04; [/]
botao[4].onclick = function(){
    if(ocupado == false){
        query += "/"; 
        mostraVisor(query);
        ocupado = true;
    }
}
// funcao do botao 05; [7]
botao[5].onclick = function(){
    query += "7"; 
    mostraVisor(query);
}
// funcao do botao 06; [8]
botao[6].onclick = function(){
    query += "8"; 
    mostraVisor(query);
}
// funcao do botao 07; [9]
botao[7].onclick = function(){
    query += "9"; 
    mostraVisor(query);
}
// funcao do botao 08; [x]
botao[8].onclick = function(){
    if(ocupado == false){
        query += "x"; 
        mostraVisor(query);
        ocupado = true;
    }
}
// funcao do botao 09; [4]
botao[9].onclick = function(){
    query += "4"; 
    mostraVisor(query);
}
// funcao do botao 10; [5]
botao[10].onclick = function(){
    query += "5"; 
    mostraVisor(query);
}
// funcao do botao 11; [6]
botao[11].onclick = function(){
    query += "6"; 
    mostraVisor(query);
}
// funcao do botao 12; [-]
botao[12].onclick = function(){
    if(ocupado == false){    
        query += "-"; 
        mostraVisor(query);
        ocupado = true;
    }
}
// funcao do botao 13; [1]
botao[13].onclick = function(){
    query += "1"; 
    mostraVisor(query);
}
// funcao do botao 14; [2]
botao[14].onclick = function(){
    query += "2"; 
    mostraVisor(query);
}
// funcao do botao 15; [3]
botao[15].onclick = function(){
    query += "3"; 
    mostraVisor(query);
}
// funcao do botao 16; [+]
botao[16].onclick = function(){
    if(ocupado == false){
        query += "+";
        mostraVisor(query);
        ocupado = true;
    }
}
// funcao do botao 17; [0]
botao[17].onclick = function(){
    query += "0";
    mostraVisor(query);
}
// funcao do botao 18; [0]
botao[18].onclick = function(){
    query += "0";
    mostraVisor(query);
}
// funcao do botao 19; [,]
botao[19].onclick = function(){
    query += ".";
    mostraVisor(query);
}
// funcao do botao 20; [=]
botao[20].onclick = function(){    
    // soma
    if(query.indexOf("+")!==-1){
        var numero = query.split("+");
        query = parseFloat(numero[0]) + parseFloat(numero[1]);
    }
    // subtracao
    else if(query.indexOf("-")!==-1){
        var numero = query.split("-");
        query = parseFloat(numero[0]) - parseFloat(numero[1]);
    }
    // multiplicacao
    else if(query.indexOf("x")!==-1){
        var numero = query.split("x");
        query = parseFloat(numero[0]) * parseFloat(numero[1]);
    }
    else if(query.indexOf("/")!==-1){
        var numero = query.split("/");
        query = parseFloat(numero[0]) / parseFloat(numero[1]);
    }
    ocupado = false;
    mostraVisor(query);
}
// ---------------INICIALIZACAO---------------
mostraVisor(0);
