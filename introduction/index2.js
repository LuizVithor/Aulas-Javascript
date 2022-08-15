//let username = window.prompt ("Qual seu nome:" );
//Cria uma tela de inserção de texto para mandar a informação para o console do live server
//console.log (username);

let username;

document.getElementById("MeuBotão").onclick = function(){
	username = document.getElementById("MeuTexto").nodeValue;
	console.log(username);
	document.getElementById("myLabel").innerHTML = "Olá " + username;
}