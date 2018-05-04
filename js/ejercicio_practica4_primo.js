function primo(a){
	var hasta=Math.sqrt(a);
    var divisor=a;
    var resultado;
	if (a===2){
		return "Es primo!";
	}
	else{
		if ((a%2)==0){
			return "No es primo, divisible entre 2";
		}
		for (var i=3;i<=hasta;i=i+2){
			if ((a%i)==0){
				resultado="No es primo, divisible entre "+i;
				divisor=i;
				break;
			}
		}
		if (divisor==a){
			return "Es primo";
        } 
        return resultado;
	}
 
} 
function comparaTexto(a,b){
	if (a>b){
		return a+" es mayor que "+b;
	}
	else if (a<b){
		return a+" es menor que "+b;
	}
	else{
		return a+" es igual que "+b;
	}
}
function comparaNumero(a,b){
	if (a>b){
		return a+" es mayor que "+b;
	}
	else if (a<b){
		return a+" es menor que "+b;
	}
	else{
		return a+" es igual que "+b;
	}
}