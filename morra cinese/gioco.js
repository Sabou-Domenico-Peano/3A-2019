alert("Benvenuto in questa pagina web");

var nomeGioc=window.prompt("Ciao, inserisci il tuo nome:");
document.getElementById("titolo").innerHTML = "Benvenuto "+nomeGioc

var sceltaUtente;

function sceltaCarta(){
	sceltaUtente = "carta";
	alert(nomeGioc+" ha scelto "+sceltaUtente);
}
function sceltaForbici(){
	sceltaUtente = "forbici";
	alert(nomeGioc+" ha scelto "+sceltaUtente);
}
function sceltaSasso(){
	sceltaUtente = "sasso";
	alert(nomeGioc+" ha scelto "+sceltaUtente);
}

function verdetto(){
	document.getElementById("carta").style.display="none";
	document.getElementById("forbici").style.display="none";
	document.getElementById("sasso").style.display="none";
	document.getElementById("pulsante").style.display="none";
	var sceltaComputer;
	if(sceltaUtente == "carta"){
		sceltaComputer="forbici";
	}
	if(sceltaUtente == "forbici"){
		sceltaComputer="sasso";
	}
	if(sceltaUtente == "sasso"){
		sceltaComputer="carta";
	}
	document.getElementById("titolo").innerHTML=nomeGioc+" mi dispiace hai perso, riprova la prossima volta";
	document.getElementById("informazioni").innerHTML="Il computer ha scelto " + sceltaComputer +".Tu invece hai scelto "+sceltaUtente;
}
