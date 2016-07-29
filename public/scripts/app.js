
// Modelo / estado
//Mi estado esta representado por
// la hora el minuto el segundo y el tipo de reloj
// que tenemos en las variables iniciales se puede elejir 
//la hora con la que se desea que comience el reloj
var state = 0;
var hora1=0;
var hora2=0;
var minuto1=0;
var minuto2=0;
var segundo=1;


var canvas=document.getElementById("reloj");

var clockController= document.getElementById("tipo");

clockController.addEventListener("change", function() {
    if (clockController.value=== "digital") {
      state=0;
    }else if(clockController.value === "analogo"){
      state=1;
    }
    canvas.innerHTML = render2(state);
});

var changeTrigger = document.getElementById("change");

function render2(state){
  var html = "";
  if (state==0) {
    html += '<div class="display">';
    html += '<div class="numero H1">'+ hora1 +'</div>';
    html += '<div class="numero H2">'+ hora2 +'</div>';
    html += '<div class="numero M1">'+ ': '+ minuto1 +'</div>';
    html += '<div class="numero M2">'+ minuto2 +'</div>';
    html += '<div class="segundos">'+ ':'+segundo +'</div>';
    html += '<div style="clear:both;"></div>';
    html += '</div>';

    segundo+=1;
    if(segundo===60){
      segundo=0;
      minute2+=1;
    }
    if(minuto2>9){
      minuto1+=1;
      minuto2=0;
    }
    if (minuto1>5) {
      hora2+=1;
      minuto1=0;
      minuto2=0;
    }
    if (hora1===2) {
      if (hora2>3) {
        hora2=0;
        hora1=0;
        minuto2=0;
        minuto1=0;
      }
    }

  }
  else if (state===1) {

    
  }
  return html; 
}

function Iniciar_reloj(){
  canvas.innerHTML=render2(state);
}
Iniciar_reloj();
setInterval(Iniciar_reloj,1000);