var listaDeCuentas = [];
// listaDeCuentas = new Array()
var cuenta = "ES19-1234-5678-9012-3456-7890";
// Posicion 0
listaDeCuentas.push("ES19-1234-5678-9012-3456-7890");
// Posicion 1
listaDeCuentas.push("ES19-1234-5678-9012-3456-7890");
// Posicion 2
listaDeCuentas.push("es19-1234-5678-9012-3456-7890");
// Posicion 3
listaDeCuentas.push(cuenta);
// Posicion 4
listaDeCuentas.push(cuenta);
// Posicion 5
listaDeCuentas.push(cuenta);
// Mostrar primer elemento
print("Cuenta en posicion 0 : " + listaDeCuentas[0])
// Extraer el primer elemento
var primerElemento = listaDeCuentas.shift()
// Metodo que me devuelve un elemento del array con el texto
// Cuenta en posicion
function dameElElementoDePosicion(miArray,posicion){
    print("Elemento en posicion " 
        + posicion + " : " + miArray[posicion])
}
dameElElementoDePosicion(listaDeCuentas,0);
// TODO: Agregar el elemento 3
var elemento = 3;
var posicionFinal = listaDeCuentas.length // 5
listaDeCuentas[posicionFinal] = elemento;
// Agregar elemento al final sin push
var miElemento = "elemento"
listaDeCuentas.length // 6
listaDeCuentas[listaDeCuentas.length] = miElemento;
// TODO: Eliminar elemento al principio sin shift
function eliminoElPrimerElemento(lista){
    var temporal = [];
    lista[0] = "BORRAR";
    for(var i = 1; i<lista.length; i++){
        temporal[i-1] = lista[i];
    }
    print("lista antes: " + lista.length);
    print("temporal antes: " + temporal.length);
    lista = temporal;
    print("lista despues: " + lista.length);
    print("temporal despues: " + temporal.length);
    return temporal;
}
listaDeCuentas = eliminoElPrimerElemento(listaDeCuentas);
print("ListaDeCuentas : " + listaDeCuentas.length)
