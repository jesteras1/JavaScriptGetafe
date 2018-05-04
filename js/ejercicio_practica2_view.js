function suma(){
	var a=document
			.getElementById("op1")
			.value;
	var b=document
			.getElementById("op2")
            .value;
    a = parseInt(a);
    b = parseInt(b);
	var resultado = miSuma(parseInt(a),parseInt(b));
	document
		.getElementById("result")
		.innerHTML=resultado;
}
function resta(){
	var a=document.getElementById("op1").value;
	var b=document.getElementById("op2").value;
	document.getElementById("result").innerHTML=miResta(a,b);
}
 
 function multiplica(){
	var a=document.getElementById("op1").value;
	var b=document.getElementById("op2").value;
	document.getElementById("result").innerHTML=miMultiplica(a,b);
}
 function divide(){
	var a=document.getElementById("op1").value;
	var b=document.getElementById("op2").value;
	try{
		if(parseInt(b)==0){
			throw "LA LIASTES";
		}
		document.getElementById("result").innerHTML=parseInt(a)/parseInt(b);
	}
	catch (errorcito){
		alert("You are so gañán that you tried to divide by ZERO");
		document.getElementById("result").innerHTML="Gañán user not allowed";
	}
}