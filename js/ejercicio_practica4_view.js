function primo(){
	var a=parseInt(document.getElementById("op_primo").value);
	document.getElementById("result").innerHTML=primo(a);
} 
function comparaTextoVista(){
	var a=(document.getElementById("op1").value);
	var b=(document.getElementById("op2").value);
    alert(comparaTexto(a,b));
}
function comparaNumeroVista(){
	var a=parseInt(document.getElementById("op1").value);
	var b=parseInt(document.getElementById("op2").value);
	alert(comparaNumero(a,b));	
}