body{
 		background-color: orange;
 		text-align: center;
 	}
 	

let numerosecreto = Math.floor(Math.random() * 10) + 1;
	console.log(numerosecreto);

	function adivinhar() {
		let palpite = parseInt(document.getElementById("palpite").value);
		let resultado = document.getElementById("resultado");

		if (palpite=== numerosecreto){
			resultadp.innerText = "parabens! voce acertou!";
		} else if (palpite > numerosecreto) {
			resultado.innerText = "tente um numero menor.";
		} else {
			resultado.innerText ="tente um numero maior";
		}