/*Funzioni che gestiscono l'apertura e la chiusura del menù*/

function gestoreMenuApri () {
   try {
      nodoMenu.style.width = "100%";
   } catch ( e ) {
        alert("gestoreMenuApri "+ e);
   }
}
function gestoreMenuChiudi () {
   try {
      nodoMenu.style.width = "0";

   } catch ( e ) {
        alert("gestoreMenuChiudi "+ e);
   }
}

function mouseOver(){
  try{
    nodoavanti.className ="buttonav";
    nodoindietro.classname = "buttonind";
  }catch(e){
    alert("mouseOver " +e);
  }
}
function mouseOut(){
  try{
    nodoavanti.classname="buttonav";
    nodoindietro.classname="buttonind";
  }catch(e){
    alert("mouseOut " +e);
  }
}
/*Eventi che gestiscono le funzioni dei pulsanti avanti e indietro, prendendo come
valore un intero dalla funzione cambiafoto*/

function gestoreavanti(){
  try{
    mostrafoto(+1);
  }catch(e){
    alert("gestoreavanti " +e);
  }
}


function gestoreindietro(){
  try{
    mostrafoto(-1);
  }catch(e){
    alert("gestoreindietro " +e);
  }
}

function mostrafoto(x){
    indicefoto += x;
    if(indicefoto == NUMERO_FOTO){
      indicefoto = 0;
    }
    if(indicefoto < 0){
      indicefoto = NUMERO_FOTO - 1;
    }
    nodofoto.setAttribute("src", galleria[indicefoto]);
}

/*dichiarazioni delle variabili utilizzate e gestoreload che si attiva in seguito
all'apertura della pagina*/

const NUMERO_FOTO = 9;
var galleria;
var indicefoto;
var nodoavanti;
var nodoindietro;
var nodofoto;
var nodoMenu;
var nodoapri;
var nodochiudi;
var contenuto;
function gestoreload(){
  try{
    nodoMenu = document.getElementById("menù");
    nodoapri = document.getElementById("btn");
    nodochiudi = document.getElementById("chiudimenu");
    nodoavanti = document.getElementById("avanti");
    nodoindietro = document.getElementById("indietro1");
    nodofoto = document.getElementById("foto");
    contenuto = document.getElementById("contentfoto")
    nodoapri.onclick = gestoreMenuApri;
    nodochiudi.onclick = gestoreMenuChiudi;
    nodoavanti.onclick = gestoreavanti;
    nodoindietro.onclick = gestoreindietro;
    contentfoto.onmouseover = mouseOver;
    contentfoto.onmouseout = mouseOut;

    galleria = [];
    for(var i = 0; i<NUMERO_FOTO; i++){
      var nomefoto = "images/foto" +i+ ".jpg";
      galleria.push(nomefoto);
    }
    indicefoto = 0;
    mostrafoto(0);
  }catch(e){
    alert("gestoreload " +e);
  }
}
window.onload = gestoreload;
