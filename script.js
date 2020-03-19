//Variabili

var chilometri;
var prezzo;
var età;
var scontomin, scontomax;
var prezzofin;


//richiesta all'utente
chilometri = prompt("Quanti chilometri vuoi percorrere?");
età = prompt("Quanti anni hai?");


//Calcolo costo biglietto totale
prezzo = chilometri * 0.21;


//Calcolo sconto
scontomin = prezzo * 0.2;
scontomax = prezzo * 0.4;


//Calcolo biglietto scontato
if(età < 18){
  prezzofin = prezzo - scontomin;
}
else if(età > 65){
  prezzofin = prezzo - scontomax;
}
else{
  prezzofin = prezzo;
}


//Output per l'utente
document.write("Il costo del tuo biglietto sarà " + prezzofin + "€");
