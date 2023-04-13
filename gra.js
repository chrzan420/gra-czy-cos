let i = 20;
let punkty = 0;

//odliczanie
function start(){
let liczenie = window.setInterval(
    function(){
    i--;
    document.getElementById("stoper").innerText = i + "s";
    if (i==0){
		window.clearInterval(liczenie);
//koniec gry i podsumowanie
		document.getElementById("odp").innerHTML = "koniec gry " + "<br>" + " twoj wynik: " + punkty;
    }
},1000);



}

//gra
function next(){
	
	let wpisz = document.getElementById("wpisz");
	
	
	document.getElementById("odp").innerText = "^a";
	let regex = /^a/g;
	if (regex.test(wpisz.value)==true){
		wpisz.style.background="green";
		punkty++;
	}

	else{
		wpisz.style.background="red";

	}


document.getElementById("odp").innerText = "[0-9]+[0-9]=[0-9]";
	let regex1 = /[0-9]\+[0-9]\=[0-9]/g;
	if (regex1.test(wpisz.value)==true){
		wpisz.style.background="green";
		punkty++;
	}
	
	else{
		wpisz.style.background="red";

	}
}
