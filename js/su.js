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

/*Funzione che gestisce l'evento dello scroll sul pulsante*/
 function gestorescroll(){
   try{
     if(document.body.scrollTop > 100){
       nodopulsante.style.display = "block";

     }else{
       nodopulsante.style.display = "none";
     }
   }catch(e){
     alert("gestorescroll " +e);
   }
 }


 var nodoMenu;
 var nodoapri;
 var nodochiudi;
 var nodopulsante;


 function gestoreload(){
   try{
     nodoMenu = document.getElementById("menù");
     nodoapri = document.getElementById("btn");
     nodochiudi = document.getElementById("chiudimenu");
     nodopulsante = document.getElementById("btntop");
     nodopulsante.style.display = "none";
     nodoapri.onclick = gestoreMenuApri;
     nodochiudi.onclick = gestoreMenuChiudi;
     nodopulsante.onclick = gestorescroll;
   }catch(e){
     alert("gestoreload " +e);
   }
 }
 window.onload = gestoreload;
window.onscroll = gestorescroll;
