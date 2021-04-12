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

var nodoMenu;
var nodoapri;
var nodochiudi;

function gestoreLoad () {
   try {
      nodoMenu = document.getElementById("menù");
      nodoapri = document.getElementById("btn");
      nodochiudi = document.getElementById("chiudimenu");
      nodoapri.onclick = gestoreMenuApri;
      nodochiudi.onclick = gestoreMenuChiudi;

   } catch ( e ) {
        alert("gestoreLoad "+ e);
   }
}
window.onload = gestoreLoad;
