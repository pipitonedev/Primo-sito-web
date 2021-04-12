

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

function scrivitesto (nodo, testo) {
   try {
      var nodoTesto = document.createTextNode(testo);
      nodo.replaceChild(nodoTesto, nodo.firstChild);

   } catch ( e ) {
        alert("scriviMessaggio "+ e);
   }
}

function gestoreBiografia () {
   try {
      scrivitesto(nododescrizione, "");
      scrivitesto(nododescrizione, biografia[this.id]);
      nododescrizione.style.display = "block";
   } catch ( e ) {
        alert("gestoreBiografia "+ e);
   }
}
function gestoreback(){
  try{
    window.location.reload();
  }catch(e){
    alert("gestoreback " +e);
  }
}


var nodoMenu;
var nodoapri;
var nodochiudi;
var nodoPersonaggi;
var nododescrizione;
var nodotesto;



function gestoreLoad () {
   try {
     nodoMenu = document.getElementById("menù");
     nodoapri = document.getElementById("btn");
     nodochiudi = document.getElementById("chiudimenu");
      nodoPersonaggi = document.getElementsByClassName("imgpers");
      for (var k = 0; k < nodoPersonaggi.length; k++) {
         nodoPersonaggi[k].onclick = gestoreBiografia;
      }


      nododescrizione = document.getElementById("text");
      nodoTesto = document.createTextNode("");
      nododescrizione.appendChild(nodoTesto);
      nodoapri.onclick = gestoreMenuApri;
      nodochiudi.onclick = gestoreMenuChiudi;
    nododescrizione.style.display = "none";

   } catch ( e ) {
        alert("gestoreLoad "+ e);
   }
}
window.onload = gestoreLoad;

// ----- CONTENUTI -----

var biografia = {
       "ted": "Ted Mosby è un architetto di New York. E' nato il 25 aprile 1978 a Shaker Heights, nell'Ohio. È alla costante ricerca di un'anima gemella, con cui sposarsi e metter su figli. Per buona parte della serie è innamorato della sua amica Robin, con la quale ha una relazione sentimentale. I due, in seguito, si lasciano quando capiscono di non volere le stesse cose. Convive coi suoi migliori amici, Marshall e Lily, conosciuti entrambi ai tempi del college, ma quando Lily rimane incinta Ted lascia ai due la casa, per trasferirsi in una tutta sua. Barney è un altro suo grande amico. Ted ha sempre avuto il sogno di progettare un grande edificio a New York, ama il suo lavoro e spesso cerca di intrattenere la gente con aneddoti sugli edifici ma quasi sempre le persone che lo ascoltano si annoiano. La vita di Ted continua a subire risvolti negativi." + " Dopo essere stato piantato all'altare, Ted fatica a riprendersi e la crisi ricade sul lavoro.",
       "marshall": "Marshall Eriksen è nato in una piccola cittadina del Minnesota. Fin dall'infanzia nutre il bisogno di salvare la Terra e l'ambiente, cosa che lo porterà a studiare legge alla Wesleyan University, per diventare avvocato ambientalista. Qui incontra per la prima volta Ted e Lily. Anche se lontano da casa, è estremamente legato alla sua famiglia: con il suo solo metro e novanta di altezza è il piccolo di famiglia. Resterà fidanzato con Lily per 9 anni, finché si lasciano poco prima del matrimonio: a lei viene offerta l'occasione di partecipare ad un corso di pittura in una prestigiosa accademia, Lily torna in seguito a New York a causa degli scarsi risultati ottenuti al corso di arte. Marshall la perdonerà e ritorneranno insieme fino a sposarsi. Dopo il matrimonio comprano un appartamento, che però si rivelerà essere in pendenza e in una zona invasa dall'odore tossico di un depuratore di acque. Dopo qualche anno, Marshall e Lily avranno un bambino che sarà chiamato" + " Marvin, in onore del padre di Marshall.  I due andranno a vivere nella casa dei nonni di Lily, nei sobborghi. In seguito, Ted lascia alla coppia il suo appartamento, così che possano crescervi il loro figlio in un ambiente più cittadino. ",
       "barney": " Barney Stinson è cresciuto con la madre e con il fratello ed è per questo che probabilmente è rimasto un grande cocco di mamma, al punto da chiamare la madre ogni giorno. È un alto dirigente di Wall Street che lavora alla Goliath National Bank, anche se il suo ruolo nella banca non viene mai ben definito. È un gran donnaiolo tanto che nella sua storia ha sedotto, conquistato e abbandonato oltre duecento donne. Barney è vestito quasi sempre con il completo. Vive a New York, in un appartamento di Lower Manhattan. Nonostante generalmente si presenti come un individuo cinico, sicuro di sé e dalla parlantina persuasiva e sciolta, Barney è estremamente sensibile. Avrà una relazione con Robin, rendendosi conto di essersene innamorato si sposeranno, ma non andrà tutto per il meglio, infatti, dopo solo tre anni divorzieranno. Alcuni anni dopo il divorzio, Barney metterà incinta una sua conquista occasionale. Diventerà un buon padre, affermando che Elle è il suo grande amore.",
       "lily": "Lily Aldrin vive a New York e lavora come insegnante d'asilo. Nel 1996, al suo primo giorno all'università, ha conosciuto Marshall e da quel momento i due si sono fidanzati. Grazie a Marshall ha conosciuto Ted, dato che i due erano compagni di stanza nel dormitorio dell'università. Nel 2001 conosce Barney grazie a Ted, che l'aveva casualmente incontrato al McLaren's(pub in cui il gruppo si riunisce). Alla fine, nel 2005, conoscerà Robin che diventerà presto la sua migliore amica. Pur essendo molto innamorata di Marshall, Lily certe volte ha un copportamento bi-curioso nei confronti dell'amica.  Quando Lily si vede costretta a trasferirsi per un anno in Italia, a Roma, per lavoro con la famiglia, si creano non poche diatribe con Marshall che vuole restare a New York per perseguire la sua carriera di giudice.  Lily decide di rifiutare il lavoro, ma quando scopre di essere incinta del secondo bambino decidono di trasferirsi in Italia.",
       "robin": "Robin Scherbatsky è una giornalista canadese, fiera delle sue radici. Fumatrice occasionale, diventa la migliore amica di Lily. A Robin non piacciono le olive(anche se in seguito le piaceranno) e ha una particolare fobia per i centri commerciali, ma ama lo scotch, i sigari, la battaglia navale, le armi da fuoco e i pinguini. Robin è l'ultima persona che entra a far parte del gruppo di amici protagonisti della sitcom. Infatti,  Ted, Marshall, Lily e Barney si frequentano ormai da qualche anno. All'inizio degli anni novanta, durante l'adolescenza, diventò una celebrità in patria come bubblegum popstar, sotto lo pseudonimo di Robin Sparkles. Divenuta inizialmente famosa in televisione grazie a Space Teens, un programma per adolescenti. Il successo canoro di Robin terminò bruscamente quando, a seguito di un'infatuazione per Paul Shaffer, a metà del decennio cambiò nome d'arte in Robin Daggers e virò verso un look dark e delle sonorità grunge.",
       "tracy": "Tracy McConnel, la futura moglie di Ted, è stata la ragazza misteriosa fino all'ultima stagione. E' Barney la prima persona del gruppo d'amici a imbattersi nella misteriosa ragazza, durante uno dei suoi classici tentativi d'abbordaggio: pur se il loro incontro è molto fugace, inconsapevolmente la giovane farà riflettere il ragazzo sulla sua vita sentimentale. Successivamente, durante un viaggio in treno a Farhampton  la futura moglie di Ted conosce Lily, che la prende subito in simpatia; nella stessa località la ragazza incappa poi anche in Marshall, con cui stringe subito amicizia e con Robin, che distoglie dai suoi propositi di fuga dalle nozze. Ted, concluso il matrimonio, incontra Tracy alla stazione ferroviaria di Farhampton; i due attaccano bottone grazie all'ombrello giallo della ragazza. Sarà proprio in cima al faro di Farhampton che Ted, due anni dopo il loro primo incontro, chiederà alla fidanzata di sposarlo, ricevendo un sì come risposta."

    };
