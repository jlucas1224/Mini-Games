var altura = 0
var largura = 0
var pontosAmbulancia = 0 
var posicaoAmbulancia = 60

var pontosPolicia = 0 
var posicaoPolicia =  0

var policias = 8
var ambulancias = 8

var escolha


function caixas(){
    console.log(policias)
    console.log(ambulancias)
    window.onload = function() {    
        let elements = document.getElementsByClassName("caixa");
    
        for(let i = 0; i < elements.length; i++) {
            elements[i].onclick = function () {
                escolha = Math.floor(Math.random()*2)
                if(escolha == 0 && policias>0 && elements[i].style.backgroundColor != "red"){
                    elements[i].style.backgroundColor = "blue";
                    policias--;
                }if(escolha == 1 && ambulancias>0 && elements[i].style.backgroundColor != "blue"){
                    elements[i].style.backgroundColor = "red";
                    ambulancias--;
                }
                
            }
        }
    };
    
}

function ajustaTamanhoPalcoJogo(){
  
    
    altura = window.innerHeight
    largura = window.innerWidth
}

function definirPosicaoAmbulancia(){
    posicaoAmbulancia += pontosAmbulancia * 100
    var ambulancia = document.getElementById('ambulancia')
    ambulancia.style.right = posicaoAmbulancia + 'px'
}
function ambulanciaMovement(){
    document.addEventListener('keydown', function (event) {
        if (event.key === 'a') {
         posicaoAmbulancia +=10;
         definirPosicaoAmbulancia()
        }
        if (event.key === 'd') {
            posicaoAmbulancia -=10;
         definirPosicaoAmbulancia()
        }
      });
     
}

function definirPosicaoPolicia(){
    posicaoPolicia += pontosPolicia * 100
    var policia = document.getElementById('policia')
    policia.style.right = posicaoPolicia + 'px'
}

function policiaMovement(){
    document.addEventListener('keydown', function (event) {
        if (event.key === 'z') {
            posicaoPolicia +=10;
            definirPosicaoPolicia()
        }
        if (event.key === 'c') {
            posicaoPolicia -=10;
            definirPosicaoPolicia()
        }
      });
     
}

ajustaTamanhoPalcoJogo()